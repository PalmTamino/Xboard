<?php

namespace App\Http\Controllers\V1\Guest;

use App\Exceptions\ApiException;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Payment;
use App\Services\OrderService;
use App\Services\PaymentService;
use App\Services\TelegramService;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    // Note: $uuid is optional here
    public function notify($method, $uuid = null, Request $request)
    {
        try {
            $paymentService = new PaymentService($method, null, $uuid);
            $verify = $paymentService->notify($request->input());
            if (!$verify) {
                return $this->fail([422, 'verify error']);
            }
            if (!$this->handle($verify['trade_no'], $verify['callback_no'])) {
                return $this->fail([400, 'handle error']);
            }
            return (isset($verify['custom_result']) ? $verify['custom_result'] : 'success');
        } catch (\Exception $e) {
            // CHANGED: Return the error message for debugging
            return response($e->getMessage(), 500);
        }
    }

    private function handle($tradeNo, $callbackNo)
    {
        $order = Order::where('trade_no', $tradeNo)->first();
        if (!$order) {
            return $this->fail([400202, 'order is not found']);
        }
        if ($order->status !== Order::STATUS_PENDING) {
            return true;
        }

        $orderService = new OrderService($order);
        if (!$orderService->paid($callbackNo)) {
            return false;
        }

        $payment = Payment::where('id', $order->payment_id)->first();
        $telegramService = new TelegramService();
        $message = sprintf(
            "💰成功收款%s元\n" .
            "———————————————\n" .
            "支付接口：%s\n" .
            "支付渠道：%s\n" .
            "本站订单：`%s`",
            $order->total_amount / 100,
            $payment->payment,
            $payment->name,
            $order->trade_no
        );

        $telegramService->sendMessageWithAdmin($message);
        return true;
    }
}
