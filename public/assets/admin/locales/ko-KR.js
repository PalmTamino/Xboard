window.XBOARD_TRANSLATIONS = window.XBOARD_TRANSLATIONS || {};
window.XBOARD_TRANSLATIONS['ko-KR'] = {
  "payment": {
    "title": "결제 설정",
    "description": "알리페이, 위챗페이 등의 결제 수단을 설정합니다.",
    "table": {
      "columns": {
        "id": "ID",
        "enable": "활성화",
        "name": "표시 이름",
        "payment": "결제 게이트웨이",
        "notify_url": "알림 URL",
        "notify_url_tooltip": "결제 게이트웨이가 이 주소로 알림을 보냅니다. 방화벽을 통해 접근 가능한지 확인해주세요.",
        "actions": "작업"
      },
      "actions": {
        "edit": "편집",
        "delete": {
          "title": "삭제 확인",
          "description": "이 결제 수단을 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.",
          "success": "삭제 완료"
        }
      },
      "toolbar": {
        "search": "결제 수단 검색...",
        "reset": "초기화",
        "sort": {
          "hint": "결제 수단을 드래그하여 정렬하고, 완료 후 저장을 클릭하세요",
          "save": "순서 저장",
          "edit": "순서 편집"
        }
      }
    },
    "form": {
      "add": {
        "button": "결제 수단 추가",
        "title": "결제 수단 추가"
      },
      "edit": {
        "title": "결제 수단 편집"
      },
      "fields": {
        "name": {
          "label": "표시 이름",
          "placeholder": "결제 이름 입력",
          "description": "프론트엔드 표시용"
        },
        "icon": {
          "label": "아이콘 URL",
          "placeholder": "https://example.com/icon.svg",
          "description": "프론트엔드 표시용 아이콘 URL"
        },
        "notify_domain": {
          "label": "알림 도메인",
          "placeholder": "https://example.com",
          "description": "게이트웨이 알림용 도메인"
        },
        "handling_fee_percent": {
          "label": "수수료 비율 (%)",
          "placeholder": "0-100"
        },
        "handling_fee_fixed": {
          "label": "고정 수수료",
          "placeholder": "0"
        },
        "payment": {
          "label": "결제 게이트웨이",
          "placeholder": "결제 게이트웨이 선택",
          "description": "사용할 결제 게이트웨이 선택"
        }
      },
      "validation": {
        "name": {
          "min": "이름은 최소 2자 이상이어야 합니다",
          "max": "이름은 30자를 초과할 수 없습니다"
        },
        "notify_domain": {
          "url": "올바른 URL을 입력해주세요"
        },
        "payment": {
          "required": "결제 게이트웨이를 선택해주세요"
        }
      },
      "buttons": {
        "cancel": "취소",
        "submit": "제출"
      },
      "messages": {
        "success": "저장 완료"
      }
    }
  },
  "knowledge": {
    "title": "지식 베이스",
    "description": "여기에서 지식 베이스를 구성할 수 있으며, 추가, 삭제 및 편집 작업을 수행할 수 있습니다.",
    "columns": {
      "id": "ID",
      "status": "상태",
      "title": "제목",
      "category": "카테고리",
      "actions": "작업"
    },
    "form": {
      "add": "지식 추가",
      "edit": "지식 편집",
      "title": "제목",
      "titlePlaceholder": "지식 제목을 입력해주세요",
      "category": "카테고리",
      "categoryPlaceholder": "카테고리를 입력하면 자동으로 분류됩니다",
      "language": "언어",
      "languagePlaceholder": "언어를 선택해주세요",
      "content": "내용",
      "show": "표시",
      "cancel": "취소",
      "submit": "제출"
    },
    "languages": {
      "en-US": "English",
      "ja-JP": "日本語",
      "ko-KR": "한국어",
      "vi-VN": "Tiếng Việt",
      "zh-CN": "简体中文",
      "zh-TW": "繁體中文"
    },
    "messages": {
      "deleteConfirm": "삭제 확인",
      "deleteDescription": "이 작업은 이 지식 베이스 기록을 영구적으로 삭제하며 복구할 수 없습니다. 계속하시겠습니까?",
      "deleteButton": "삭제",
      "operationSuccess": "작업 성공"
    },
    "toolbar": {
      "searchPlaceholder": "지식 검색...",
      "reset": "초기화",
      "sortModeHint": "지식 항목을 드래그하여 정렬하고, 완료 후 저장을 클릭하세요",
      "editSort": "정렬 편집",
      "saveSort": "정렬 저장"
    }
  },
  "search": {
    "placeholder": "메뉴 및 기능 검색...",
    "title": "메뉴 네비게이션",
    "noResults": "검색 결과가 없습니다",
    "shortcut": {
      "label": "검색",
      "key": "⌘K"
    }
  },
  "nav": {
    "dashboard": "대시보드",
    "systemManagement": "시스템 관리",
    "systemConfig": "시스템 설정",
    "themeConfig": "테마 설정",
    "noticeManagement": "공지사항 관리",
    "paymentConfig": "결제 설정",
    "knowledgeManagement": "지식 관리",
    "nodeManagement": "노드 관리",
    "permissionGroupManagement": "권한 그룹",
    "routeManagement": "경로 관리",
    "subscriptionManagement": "구독",
    "planManagement": "플랜 관리",
    "orderManagement": "주문 관리",
    "couponManagement": "쿠폰 관리",
    "userManagement": "사용자 관리",
    "ticketManagement": "티켓 관리"
  },
  "settings": {
    "title": "시스템 설정",
    "description": "사이트, 보안, 구독, 초대 수수료, 노드, 이메일 및 알림을 포함한 핵심 시스템 구성을 관리합니다",
    "server": {
      "title": "서버 설정",
      "description": "통신 키, 폴링 간격, 로드 밸런싱 및 기타 고급 옵션을 포함한 노드 통신 및 동기화 설정을 구성합니다.",
      "server_token": {
        "title": "통신 토큰",
        "placeholder": "통신 토큰 입력",
        "description": "서버 간 인증에 사용됩니다",
        "generate_tooltip": "클릭하여 무작위 토큰 생성"
      },
      "server_pull_interval": {
        "title": "노드 풀 작업 폴링 간격",
        "description": "노드가 패널에서 데이터를 가져오는 빈도입니다.",
        "placeholder": "풀 간격 입력"
      },
      "server_push_interval": {
        "title": "노드 푸시 작업 폴링 간격",
        "description": "노드가 패널로 데이터를 푸시하는 빈도입니다.",
        "placeholder": "푸시 간격 입력"
      },
      "device_limit_mode": {
        "title": "기기 제한 모드",
        "description": "완화 모드에서는 동일한 IP 주소의 여러 노드가 하나의 기기로 계산됩니다.",
        "strict": "엄격 모드",
        "relaxed": "완화 모드",
        "placeholder": "기기 제한 모드 선택"
      }
    },
    "invite": {
      "title": "초대 및 수수료 설정",
      "description": "초대 등록 및 수수료 관련 설정을 구성합니다.",
      "invite_force": {
        "title": "강제 초대 활성화",
        "description": "활성화하면 초대받은 사용자만 등록할 수 있습니다."
      },
      "invite_commission": {
        "title": "초대 수수료 비율",
        "description": "기본 전역 수수료 분배 비율입니다. 사용자 관리에서 개별 비율을 구성할 수 있습니다.",
        "placeholder": "수수료 비율 입력"
      },
      "invite_gen_limit": {
        "title": "초대 코드 생성 제한",
        "description": "사용자가 생성할 수 있는 최대 초대 코드 수",
        "placeholder": "생성 제한 입력"
      },
      "invite_never_expire": {
        "title": "초대 코드 만료 없음",
        "description": "활성화하면 초대 코드가 사용 후에도 만료되지 않으며, 그렇지 않으면 사용 후 만료됩니다."
      },
      "commission_first_time": {
        "title": "첫 결제 수수료만",
        "description": "활성화하면 초대받은 사용자의 첫 결제에서만 수수료가 생성되며, 사용자 관리에서 개별적으로 구성할 수 있습니다."
      },
      "commission_auto_check": {
        "title": "자동 수수료 확인",
        "description": "활성화하면 주문 완료 3일 후 수수료가 자동으로 확인됩니다."
      },
      "commission_withdraw_limit": {
        "title": "출금 임계값 (위안)",
        "description": "이 임계값 미만의 출금 요청은 제출되지 않습니다.",
        "placeholder": "출금 임계값 입력"
      },
      "commission_withdraw_method": {
        "title": "출금 방법",
        "description": "지원되는 출금 방법, 여러 방법은 쉼표로 구분합니다.",
        "placeholder": "출금 방법 입력, 쉼표로 구분"
      },
      "withdraw_close": {
        "title": "출금 비활성화",
        "description": "활성화하면 사용자가 출금을 요청할 수 없으며, 초대 수수료는 사용자 잔액으로 직접 이동합니다."
      },
      "commission_distribution": {
        "title": "3단계 분배",
        "description": "활성화하면 수수료가 설정된 세 비율에 따라 분할되며, 총합은 100%를 초과할 수 없습니다.",
        "l1": "1단계 초대자 비율",
        "l2": "2단계 초대자 비율",
        "l3": "3단계 초대자 비율",
        "placeholder": "비율 입력 예: 50"
      },
      "saving": "저장 중..."
    },
    "site": {
      "title": "사이트 설정",
      "description": "사이트 이름, 설명, 통화 단위 및 기타 핵심 설정을 포함한 기본 사이트 정보를 구성합니다.",
      "form": {
        "siteName": {
          "label": "사이트 이름",
          "placeholder": "사이트 이름을 입력해주세요",
          "description": "사이트 이름이 표시되어야 하는 곳에 사용됩니다."
        },
        "siteDescription": {
          "label": "사이트 설명",
          "placeholder": "사이트 설명을 입력해주세요",
          "description": "사이트 설명이 표시되어야 하는 곳에 사용됩니다."
        },
        "siteUrl": {
          "label": "사이트 URL",
          "placeholder": "사이트 URL을 입력해주세요, 끝에 /를 제외",
          "description": "현재 웹사이트 URL, 이메일 및 URL이 필요한 다른 곳에서 사용됩니다."
        },
        "forceHttps": {
          "label": "HTTPS 강제",
          "description": "사이트가 HTTPS를 사용하지 않지만 CDN 또는 리버스 프록시가 HTTPS를 강제할 때 활성화해야 합니다."
        },
        "logo": {
          "label": "LOGO",
          "placeholder": "LOGO URL을 입력해주세요, 끝에 /를 제외",
          "description": "LOGO가 표시되어야 하는 곳에 사용됩니다."
        },
        "subscribeUrl": {
          "label": "구독 URL",
          "placeholder": "구독에 사용됩니다. 여러 URL은 ','로 구분. 비워두면 사이트 URL을 사용합니다.",
          "description": "구독에 사용되며, 비워두면 사이트 URL을 사용합니다."
        },
        "tosUrl": {
          "label": "이용약관(TOS) URL",
          "placeholder": "이용약관 URL을 입력해주세요, 끝에 /를 제외",
          "description": "이용약관(TOS) 링크에 사용됩니다"
        },
        "stopRegister": {
          "label": "신규 사용자 등록 중지",
          "description": "활성화하면 누구도 등록할 수 없습니다."
        },
        "tryOut": {
          "label": "등록 체험",
          "placeholder": "비활성화",
          "description": "체험용 구독을 선택하세요. 옵션이 없다면 먼저 구독 관리에서 추가하세요.",
          "duration": {
            "label": "체험 기간",
            "placeholder": "0",
            "description": "체험 기간(시간)."
          }
        },
        "currency": {
          "label": "통화 단위",
          "placeholder": "CNY",
          "description": "표시용으로만 사용되며, 변경하면 시스템의 모든 통화 단위에 영향을 미칩니다."
        },
        "currencySymbol": {
          "label": "통화 기호",
          "placeholder": "¥",
          "description": "표시용으로만 사용되며, 변경하면 시스템의 모든 통화 기호에 영향을 미칩니다."
        }
      }
    },
    "safe": {
      "title": "보안 설정",
      "description": "로그인 인증, 비밀번호 정책 및 API 접근 설정을 포함한 시스템 보안 옵션을 구성합니다.",
      "form": {
        "emailVerify": {
          "label": "이메일 인증",
          "description": "활성화하면 사용자는 이메일을 인증해야 합니다."
        },
        "gmailLimit": {
          "label": "Gmail 별칭 비활성화",
          "description": "활성화하면 Gmail 별칭으로 등록할 수 없습니다."
        },
        "safeMode": {
          "label": "안전 모드",
          "description": "활성화하면 사이트 URL 이외의 도메인을 통한 접근이 403으로 차단됩니다."
        },
        "securePath": {
          "label": "관리자 경로",
          "placeholder": "admin",
          "description": "관리자 관리 경로, 변경하면 기존 관리자 경로가 수정됩니다"
        },
        "emailWhitelist": {
          "label": "이메일 접미사 화이트리스트",
          "description": "활성화하면 목록의 이메일 접미사만 등록할 수 있습니다.",
          "suffixes": {
            "label": "이메일 접미사",
            "placeholder": "이메일 접미사를 한 줄에 하나씩 입력",
            "description": "허용된 이메일 접미사를 한 줄에 하나씩 입력하세요"
          }
        },
        "recaptcha": {
          "enable": {
            "label": "reCAPTCHA 활성화",
            "description": "활성화하면 사용자는 등록 시 reCAPTCHA 인증을 통과해야 합니다."
          },
          "key": {
            "label": "reCAPTCHA 키",
            "placeholder": "reCAPTCHA 키 입력",
            "description": "reCAPTCHA 키를 입력하세요"
          },
          "siteKey": {
            "label": "reCAPTCHA 사이트 키",
            "placeholder": "reCAPTCHA 사이트 키 입력",
            "description": "reCAPTCHA 사이트 키를 입력하세요"
          }
        },
        "registerLimit": {
          "enable": {
            "label": "IP 등록 제한",
            "description": "활성화하면 동일 IP에서의 등록 수가 제한됩니다."
          },
          "count": {
            "label": "등록 횟수",
            "placeholder": "최대 등록 횟수 입력",
            "description": "동일 IP에서 허용되는 최대 등록 횟수"
          },
          "expire": {
            "label": "제한 기간",
            "placeholder": "제한 기간을 시간 단위로 입력",
            "description": "등록 제한 기간(시간)"
          }
        },
        "passwordLimit": {
          "enable": {
            "label": "비밀번호 시도 제한",
            "description": "활성화하면 비밀번호 시도 횟수가 제한됩니다."
          },
          "count": {
            "label": "시도 횟수",
            "placeholder": "최대 시도 횟수 입력",
            "description": "허용되는 최대 비밀번호 시도 횟수"
          },
          "expire": {
            "label": "잠금 기간",
            "placeholder": "잠금 기간을 시간 단위로 입력",
            "description": "계정 잠금 기간(시간)"
          }
        }
      }
    },
    "subscribe": {
      "title": "구독 설정",
      "description": "구독 링크 형식, 업데이트 빈도, 트래픽 통계 및 기타 설정을 포함한 구독 관련 구성을 관리합니다.",
      "plan_change_enable": {
        "title": "구독 변경 허용",
        "description": "활성화하면 사용자가 구독 플랜을 변경할 수 있습니다."
      },
      "reset_traffic_method": {
        "title": "월간 트래픽 초기화 방식",
        "description": "전역 트래픽 초기화 방식으로, 기본값은 매월 1일입니다. 구독 관리에서 구독별로 개별 설정할 수 있습니다.",
        "options": {
          "monthly_first": "매월 1일",
          "monthly_reset": "월간 초기화",
          "no_reset": "초기화 없음",
          "yearly_first": "1월 1일",
          "yearly_reset": "연간 초기화"
        }
      },
      "surplus_enable": {
        "title": "공제 플랜 활성화",
        "description": "활성화하면 사용자가 구독을 변경할 때 시스템이 기존 구독에서 공제합니다. 자세한 내용은 문서를 참조하세요."
      },
      "new_order_event": {
        "title": "새 주문 이벤트",
        "description": "새 주문이 생성될 때 실행할 작업을 선택합니다."
      }
    }
  },
  "group": {
    "title": "권한 그룹",
    "description": "모든 권한 그룹을 관리하며, 추가, 삭제 및 편집 작업을 수행할 수 있습니다.",
    "columns": {
      "id": "그룹 ID",
      "name": "그룹 이름",
      "usersCount": "사용자 수",
      "serverCount": "노드 수",
      "actions": "작업"
    },
    "form": {
      "add": "그룹 추가",
      "edit": "그룹 편집",
      "create": "그룹 생성",
      "update": "업데이트",
      "name": "그룹 이름",
      "namePlaceholder": "그룹 이름을 입력해주세요",
      "nameDescription": "그룹 이름은 서로 다른 사용자 그룹을 구분하는 데 사용되며, 의미 있는 이름을 사용하는 것이 좋습니다.",
      "cancel": "취소",
      "editDescription": "그룹 정보를 수정하면 즉시 적용됩니다.",
      "createDescription": "새로운 권한 그룹을 생성하여 서로 다른 사용자에게 다른 권한을 할당합니다."
    },
    "toolbar": {
      "searchPlaceholder": "그룹 검색...",
      "reset": "초기화"
    },
    "messages": {
      "deleteConfirm": "삭제 확인",
      "deleteDescription": "이 작업은 이 권한 그룹을 영구적으로 삭제하며 복구할 수 없습니다. 계속하시겠습니까?",
      "deleteButton": "삭제",
      "createSuccess": "생성 완료",
      "updateSuccess": "업데이트 완료",
      "nameValidation": {
        "min": "그룹 이름은 최소 2자 이상이어야 합니다",
        "max": "그룹 이름은 50자를 초과할 수 없습니다",
        "pattern": "그룹 이름은 문자, 숫자, 한자, 밑줄 및 하이픈만 포함할 수 있습니다"
      }
    }
  },
  "traffic": {
    "trafficRecord": {
      "title": "트래픽 사용 기록",
      "time": "시간",
      "upload": "업로드",
      "download": "다운로드",
      "rate": "요금",
      "total": "총계",
      "noRecords": "기록이 없습니다",
      "perPage": "페이지당 표시",
      "records": "기록",
      "page": "페이지 {{current}} / {{total}}",
      "multiplier": "{{value}}배"
    }
  },
  "common": {
    "loading": "로딩 중...",
    "error": "오류",
    "success": "성공",
    "save": "저장",
    "cancel": "취소",
    "delete": "삭제",
    "edit": "편집",
    "view": "보기",
    "toggleNavigation": "내비게이션 전환",
    "toggleSidebar": "사이드바 전환",
    "search": "검색...",
    "theme": {
      "light": "라이트",
      "dark": "다크",
      "system": "시스템"
    },
    "user": "사용자",
    "defaultEmail": "user@example.com",
    "settings": "설정",
    "logout": "로그아웃",
    "copy": {
      "success": "복사 성공",
      "error": "복사 실패",
      "errorLog": "클립보드에 복사하는 중 오류 발생"
    }
  },
  "dashboard": {
    "title": "대시보드",
    "stats": {
      "newUsers": "신규 사용자",
      "totalScore": "총 점수",
      "monthlyUpload": "월간 업로드",
      "vsLastMonth": "전월 대비",
      "vsYesterday": "전일 대비",
      "todayIncome": "오늘의 수입",
      "monthlyIncome": "월간 수입",
      "totalIncome": "총 수입",
      "totalUsers": "총 사용자",
      "activeUsers": "활성 사용자: {{count}}",
      "totalOrders": "총 주문",
      "revenue": "매출",
      "todayRegistered": "오늘 등록",
      "monthlyRegistered": "월간 등록",
      "onlineUsers": "온라인 사용자",
      "pendingTickets": "대기 중인 티켓",
      "hasPendingTickets": "주의가 필요한 티켓이 있습니다",
      "noPendingTickets": "대기 중인 티켓 없음",
      "pendingCommission": "대기 중인 수수료",
      "hasPendingCommission": "확인이 필요한 수수료가 있습니다",
      "noPendingCommission": "대기 중인 수수료 없음",
      "monthlyNewUsers": "월간 신규 사용자",
      "monthlyDownload": "월간 다운로드",
      "todayTraffic": "오늘: {{value}}",
      "activeUserTrend": "활성 사용자 추세",
      "realtimeUsers": "실시간 사용자",
      "todayPeak": "오늘의 최고치",
      "vsLastWeek": "전주 대비"
    },
    "trafficRank": {
      "nodeTrafficRank": "노드 트래픽 순위",
      "userTrafficRank": "사용자 트래픽 순위",
      "today": "오늘",
      "last7days": "최근 7일",
      "last30days": "최근 30일",
      "customRange": "사용자 지정 기간",
      "selectTimeRange": "기간 선택",
      "selectDateRange": "날짜 범위 선택",
      "currentTraffic": "현재 트래픽",
      "previousTraffic": "이전 트래픽",
      "changeRate": "변화율",
      "recordTime": "기록 시간"
    },
    "overview": {
      "title": "매출 개요",
      "thisMonth": "이번 달",
      "lastMonth": "지난 달",
      "to": "부터",
      "selectTimeRange": "기간 선택",
      "selectDate": "날짜 선택",
      "last7Days": "최근 7일",
      "last30Days": "최근 30일",
      "last90Days": "최근 90일",
      "last180Days": "최근 180일",
      "lastYear": "작년",
      "customRange": "사용자 지정 기간",
      "amount": "금액",
      "count": "건수",
      "transactions": "{{count}}건의 거래",
      "orderAmount": "주문 금액",
      "commissionAmount": "수수료 금액",
      "orderCount": "주문 건수",
      "commissionCount": "수수료 건수",
      "totalIncome": "총 수입",
      "totalCommission": "총 수수료",
      "totalTransactions": "총: {{count}}건의 거래",
      "avgOrderAmount": "평균 주문 금액:",
      "commissionRate": "수수료율:"
    },
    "traffic": {
      "title": "트래픽 순위",
      "rank": "순위",
      "domain": "도메인",
      "todayTraffic": "오늘의 트래픽",
      "monthlyTraffic": "월간 트래픽"
    },
    "queue": {
      "title": "대기열 상태",
      "jobDetails": "작업 상세",
      "status": {
        "description": "현재 대기열 실행 상태",
        "running": "실행 상태",
        "normal": "정상",
        "abnormal": "비정상",
        "waitTime": "현재 대기 시간: {{seconds}}초",
        "pending": "대기 중",
        "processing": "처리 중",
        "completed": "완료됨",
        "failed": "실패",
        "cancelled": "취소됨"
      },
      "details": {
        "description": "대기열 처리 상세",
        "recentJobs": "최근 작업",
        "statisticsPeriod": "통계 기간: {{hours}}시간",
        "jobsPerMinute": "분당 작업 수",
        "maxThroughput": "최대 처리량: {{value}}",
        "failedJobs7Days": "실패한 작업 (7일)",
        "retentionPeriod": "보존 기간: {{hours}}시간",
        "longestRunningQueue": "가장 오래 실행 중인 대기열",
        "activeProcesses": "활성 프로세스",
        "id": "작업 ID",
        "type": "작업 유형",
        "status": "상태",
        "progress": "진행률",
        "createdAt": "생성 시간",
        "updatedAt": "업데이트 시간",
        "error": "오류 메시지",
        "data": "작업 데이터",
        "result": "결과",
        "duration": "소요 시간",
        "attempts": "시도 횟수",
        "nextRetry": "다음 재시도"
      },
      "actions": {
        "retry": "재시도",
        "cancel": "취소",
        "delete": "삭제",
        "viewDetails": "상세 보기"
      },
      "empty": "대기열에 작업 없음",
      "loading": "대기열 상태 로딩 중...",
      "error": "대기열 상태 로드 실패"
    },
    "search": {
      "placeholder": "메뉴 및 기능 검색...",
      "title": "메뉴 네비게이션",
      "noResults": "검색 결과 없음",
      "loading": "검색 중..."
    }
  },
  "route": {
    "title": "라우트 관리",
    "description": "모든 라우트 그룹을 관리하며, 추가, 삭제 및 편집 작업을 수행할 수 있습니다.",
    "columns": {
      "id": "그룹 ID",
      "remarks": "비고",
      "action": "동작",
      "actions": "작업",
      "matchRules": "{{count}}개 규칙 일치"
    },
    "actions": {
      "dns": "지정된 DNS 서버로 해석",
      "block": "접근 차단"
    },
    "form": {
      "add": "라우트 추가",
      "edit": "라우트 편집",
      "create": "라우트 생성",
      "remarks": "비고",
      "remarksPlaceholder": "비고를 입력해주세요",
      "match": "일치 규칙",
      "matchPlaceholder": "example.com\n*.example.com",
      "action": "동작",
      "actionPlaceholder": "동작을 선택해주세요",
      "dns": "DNS 서버",
      "dnsPlaceholder": "DNS 서버를 입력해주세요",
      "cancel": "취소",
      "submit": "제출",
      "validation": {
        "remarks": "올바른 비고를 입력해주세요"
      }
    },
    "toolbar": {
      "searchPlaceholder": "라우트 검색...",
      "reset": "초기화"
    },
    "messages": {
      "deleteConfirm": "삭제 확인",
      "deleteDescription": "이 작업은 이 라우트 그룹을 영구적으로 삭제하며 복구할 수 없습니다. 계속하시겠습니까?",
      "deleteButton": "삭제",
      "deleteSuccess": "삭제 완료",
      "createSuccess": "생성 완료",
      "updateSuccess": "업데이트 완료"
    }
  },
  "order": {
    "title": "주문 관리",
    "description": "여기에서 사용자 주문을 확인할 수 있으며, 할당, 조회, 삭제 등의 작업을 수행할 수 있습니다.",
    "table": {
      "columns": {
        "tradeNo": "주문 번호",
        "type": "유형",
        "plan": "구독 플랜",
        "period": "기간",
        "amount": "결제 금액",
        "status": "주문 상태",
        "commission": "수수료 금액",
        "commissionStatus": "수수료 상태",
        "createdAt": "생성 시간"
      }
    },
    "type": {
      "NEW": "신규 구매",
      "RENEWAL": "갱신",
      "UPGRADE": "업그레이드",
      "RESET_FLOW": "트래픽 초기화"
    },
    "period": {
      "month_price": "월간",
      "quarter_price": "분기",
      "half_year_price": "반기",
      "year_price": "연간",
      "two_year_price": "2년",
      "three_year_price": "3년",
      "onetime_price": "일회성",
      "reset_price": "초기화 패키지"
    },
    "status": {
      "PENDING": "대기 중",
      "PROCESSING": "처리 중",
      "CANCELLED": "취소됨",
      "COMPLETED": "완료됨",
      "DISCOUNTED": "할인 적용됨",
      "tooltip": "[결제 완료] 표시 후 시스템이 활성화 및 완료 처리를 진행합니다"
    },
    "commission": {
      "PENDING": "대기 중",
      "PROCESSING": "처리 중",
      "VALID": "유효",
      "INVALID": "무효"
    },
    "actions": {
      "markAsPaid": "결제 완료 표시",
      "cancel": "주문 취소",
      "openMenu": "메뉴 열기",
      "reset": "초기화"
    },
    "search": {
      "placeholder": "주문 검색..."
    },
    "dialog": {
      "title": "주문 정보",
      "basicInfo": "기본 정보",
      "amountInfo": "금액 정보",
      "timeInfo": "시간 정보",
      "addOrder": "주문 추가",
      "assignOrder": "주문 할당",
      "fields": {
        "userEmail": "사용자 이메일",
        "orderPeriod": "주문 기간",
        "subscriptionPlan": "구독 플랜",
        "callbackNo": "콜백 번호",
        "paymentAmount": "결제 금액",
        "balancePayment": "잔액 결제",
        "discountAmount": "할인 금액",
        "refundAmount": "환불 금액",
        "deductionAmount": "차감 금액",
        "createdAt": "생성 시간",
        "updatedAt": "업데이트 시간"
      },
      "placeholders": {
        "email": "사용자 이메일을 입력해주세요",
        "plan": "구독 플랜을 선택해주세요",
        "period": "구독 기간을 선택해주세요",
        "amount": "결제 금액을 입력해주세요"
      },
      "actions": {
        "cancel": "취소",
        "confirm": "확인"
      },
      "messages": {
        "addSuccess": "추가 완료"
      }
    }
  },
  "coupon": {
    "title": "쿠폰 관리",
    "description": "여기에서 쿠폰을 관리할 수 있으며, 추가, 조회 및 삭제 작업을 수행할 수 있습니다.",
    "table": {
      "columns": {
        "id": "ID",
        "show": "활성화",
        "name": "쿠폰 이름",
        "type": "유형",
        "code": "코드",
        "limitUse": "남은 사용 횟수",
        "limitUseWithUser": "사용자당 사용 횟수",
        "validity": "유효 기간",
        "actions": "작업"
      },
      "validity": {
        "expired": "{{days}}일 전 만료됨",
        "notStarted": "{{days}}일 후 시작",
        "remaining": "{{days}}일 남음",
        "startTime": "시작 시간",
        "endTime": "종료 시간",
        "unlimited": "무제한",
        "noLimit": "제한 없음"
      },
      "actions": {
        "edit": "편집",
        "delete": "삭제",
        "deleteConfirm": {
          "title": "삭제 확인",
          "description": "이 작업은 이 쿠폰을 영구적으로 삭제하며 취소할 수 없습니다. 계속하시겠습니까?",
          "confirmText": "삭제"
        }
      },
      "toolbar": {
        "search": "쿠폰 검색...",
        "type": "유형",
        "reset": "초기화",
        "types": {
          "1": "고정 금액",
          "2": "비율"
        }
      }
    },
    "form": {
      "add": "쿠폰 추가",
      "edit": "쿠폰 편집",
      "name": {
        "label": "쿠폰 이름",
        "placeholder": "쿠폰 이름 입력",
        "required": "쿠폰 이름을 입력해주세요"
      },
      "type": {
        "label": "쿠폰 유형 및 값",
        "placeholder": "쿠폰 유형 선택"
      },
      "value": {
        "placeholder": "값 입력"
      },
      "validity": {
        "label": "유효 기간",
        "to": "부터",
        "endTimeError": "종료 시간은 시작 시간보다 늦어야 합니다"
      },
      "limitUse": {
        "label": "최대 사용 횟수",
        "placeholder": "최대 사용 횟수 설정, 무제한은 비워두기",
        "description": "이 쿠폰의 총 사용 가능 횟수를 설정합니다. 무제한은 비워두세요"
      },
      "limitUseWithUser": {
        "label": "사용자당 사용 횟수",
        "placeholder": "사용자당 사용 횟수 설정, 무제한은 비워두기",
        "description": "각 사용자가 이 쿠폰을 사용할 수 있는 횟수를 제한합니다. 무제한은 비워두세요"
      },
      "limitPeriod": {
        "label": "구독 기간",
        "placeholder": "특정 구독 기간으로 제한, 제한 없음은 비워두기",
        "description": "이 쿠폰을 사용할 수 있는 구독 기간을 선택합니다. 제한이 없으면 비워두세요",
        "empty": "일치하는 기간이 없습니다"
      },
      "limitPlan": {
        "label": "구독 플랜",
        "placeholder": "특정 구독 플랜으로 제한, 제한 없음은 비워두기",
        "empty": "일치하는 플랜이 없습니다"
      },
      "code": {
        "label": "사용자 지정 쿠폰 코드",
        "placeholder": "사용자 지정 코드 입력, 자동 생성은 비워두기",
        "description": "쿠폰 코드를 사용자 지정합니다. 자동 생성하려면 비워두세요"
      },
      "generateCount": {
        "label": "일괄 생성 수량",
        "placeholder": "생성할 쿠폰 수량, 단일 쿠폰은 비워두기",
        "description": "여러 쿠폰 코드를 한 번에 생성합니다. 단일 코드 생성은 비워두세요"
      },
      "submit": {
        "saving": "저장 중...",
        "save": "저장"
      },
      "error": {
        "saveFailed": "쿠폰 저장 실패"
      }
    }
  },
  "notice": {
    "title": "공지사항 관리",
    "description": "여기에서 공지사항을 구성할 수 있으며, 추가, 삭제, 편집 등의 작업을 수행할 수 있습니다.",
    "table": {
      "columns": {
        "id": "ID",
        "show": "표시 상태",
        "title": "제목",
        "actions": "작업"
      },
      "toolbar": {
        "search": "공지사항 제목 검색...",
        "reset": "초기화",
        "sort": {
          "edit": "순서 편집",
          "save": "순서 저장"
        }
      },
      "actions": {
        "edit": "편집",
        "delete": {
          "title": "삭제 확인",
          "description": "이 공지사항을 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.",
          "success": "삭제 완료"
        }
      }
    },
    "form": {
      "add": {
        "title": "공지사항 추가",
        "button": "공지사항 추가"
      },
      "edit": {
        "title": "공지사항 편집"
      },
      "fields": {
        "title": {
          "label": "제목",
          "placeholder": "공지사항 제목을 입력해주세요"
        },
        "content": {
          "label": "내용"
        },
        "img_url": {
          "label": "배경 이미지",
          "placeholder": "공지사항 배경 이미지 URL을 입력해주세요"
        },
        "show": {
          "label": "표시"
        },
        "tags": {
          "label": "태그",
          "placeholder": "Enter를 눌러 태그 추가"
        }
      },
      "buttons": {
        "cancel": "취소",
        "submit": "제출",
        "success": "제출 완료"
      }
    }
  },
  "theme": {
    "title": "테마 설정",
    "description": "테마 색상, 글꼴 크기 등을 포함한 테마 설정입니다. V2board를 프론트엔드와 백엔드로 분리하여 배포하는 경우 테마 설정이 적용되지 않습니다.",
    "upload": {
      "button": "테마 업로드",
      "title": "테마 업로드",
      "description": "유효한 테마 패키지(.zip 형식)를 업로드해주세요. 테마 패키지는 완전한 테마 파일 구조를 포함해야 합니다.",
      "dragText": "테마 파일을 여기에 끌어다 놓거나",
      "clickText": "클릭하여 선택",
      "supportText": ".zip 형식의 테마 패키지 지원",
      "uploading": "업로드 중...",
      "error": {
        "format": "ZIP 형식의 테마 파일만 지원됩니다"
      }
    },
    "preview": {
      "title": "테마 미리보기",
      "imageCount": "{{current}} / {{total}}"
    },
    "card": {
      "version": "버전: {{version}}",
      "currentTheme": "현재 테마",
      "activateTheme": "테마 활성화",
      "configureTheme": "테마 설정",
      "preview": "미리보기",
      "delete": {
        "title": "테마 삭제",
        "description": "이 테마를 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.",
        "button": "삭제",
        "error": {
          "active": "현재 활성화된 테마는 삭제할 수 없습니다"
        }
      }
    },
    "config": {
      "title": "{{name}} 테마 구성",
      "description": "테마 스타일, 레이아웃 및 기타 표시 옵션을 수정합니다.",
      "cancel": "취소",
      "save": "저장",
      "success": "설정이 성공적으로 저장되었습니다"
    }
  },
  "ticket": {
    "title": "티켓 관리",
    "description": "여기에서 사용자 티켓을 확인할 수 있으며, 조회, 답변 및 종료 작업을 수행할 수 있습니다.",
    "columns": {
      "id": "티켓 ID",
      "subject": "제목",
      "level": "우선순위",
      "status": "상태",
      "updated_at": "최근 업데이트",
      "created_at": "생성 시간",
      "actions": "작업"
    },
    "status": {
      "closed": "종료됨",
      "replied": "답변됨",
      "pending": "대기 중",
      "processing": "처리 중"
    },
    "level": {
      "low": "낮음",
      "medium": "중간",
      "high": "높음"
    },
    "filter": {
      "placeholder": "{field} 검색...",
      "no_results": "검색 결과가 없습니다.",
      "selected": "{count}개 선택됨",
      "clear": "필터 초기화"
    },
    "actions": {
      "view_details": "상세 보기",
      "close_ticket": "티켓 종료",
      "close_confirm_title": "티켓 종료 확인",
      "close_confirm_description": "종료 후에는 답변할 수 없습니다. 이 티켓을 종료하시겠습니까?",
      "close_confirm_button": "티켓 종료",
      "close_success": "티켓이 성공적으로 종료되었습니다",
      "view_ticket": "티켓 보기"
    },
    "detail": {
      "no_messages": "메시지가 아직 없습니다",
      "created_at": "생성 시간",
      "user_info": "사용자 정보",
      "traffic_records": "트래픽 기록",
      "order_records": "주문 기록",
      "input": {
        "closed_placeholder": "티켓이 종료되었습니다",
        "reply_placeholder": "답변을 입력하세요...",
        "sending": "전송 중...",
        "send": "전송"
      }
    }
  },
  "server": {
    "title": "노드 설정",
    "description": "통신 키, 폴링 간격, 로드 밸런싱 및 기타 고급 옵션을 포함한 노드 통신 및 동기화 설정을 구성합니다.",
    "server_token": {
      "title": "통신 키",
      "description": "Xboard와 노드 간의 통신을 위한 키로, 무단 데이터 접근을 방지합니다.",
      "placeholder": "통신 키를 입력해주세요"
    },
    "server_pull_interval": {
      "title": "노드 풀 작업 폴링 간격",
      "description": "노드가 패널에서 데이터를 가져오는 빈도입니다.",
      "placeholder": "풀 간격을 입력해주세요"
    },
    "server_push_interval": {
      "title": "노드 푸시 작업 폴링 간격",
      "description": "노드가 패널로 데이터를 푸시하는 빈도입니다.",
      "placeholder": "푸시 간격을 입력해주세요"
    },
    "device_limit_mode": {
      "title": "기기 제한 모드",
      "description": "완화 모드에서는 동일한 IP 주소의 여러 노드가 하나의 기기로 계산됩니다.",
      "strict": "엄격 모드",
      "relaxed": "완화 모드",
      "placeholder": "기기 제한 모드를 선택해주세요"
    },
    "saving": "저장 중...",
    "manage": {
      "title": "노드 관리",
      "description": "모든 노드를 관리하며, 추가, 삭제, 편집 등의 작업을 수행할 수 있습니다."
    },
    "columns": {
      "sort": "정렬",
      "nodeId": "노드 ID",
      "show": "표시",
      "node": "노드",
      "address": "주소",
      "onlineUsers": {
        "title": "온라인 사용자",
        "tooltip": "서버 보고 빈도에 따른 온라인 사용자 수"
      },
      "rate": {
        "title": "요금",
        "tooltip": "트래픽 과금 요율"
      },
      "groups": {
        "title": "권한 그룹",
        "tooltip": "이 노드를 구독할 수 있는 그룹",
        "empty": "--"
      },
      "type": "유형",
      "actions": "작업",
      "copyAddress": "연결 주소 복사",
      "internalPort": "내부 포트",
      "status": {
        "0": "실행되지 않음",
        "1": "미사용 또는 비정상",
        "2": "정상 실행 중"
      },
      "actions_dropdown": {
        "edit": "편집",
        "copy": "복사",
        "delete": {
          "title": "삭제 확인",
          "description": "이 작업은 이 노드를 영구적으로 삭제하며 취소할 수 없습니다. 계속하시겠습니까?",
          "confirm": "삭제"
        },
        "copy_success": "복사 완료",
        "delete_success": "삭제 완료"
      }
    },
    "toolbar": {
      "search": "노드 검색...",
      "type": "유형",
      "reset": "초기화",
      "sort": {
        "tip": "노드를 드래그하여 정렬한 후 저장을 클릭하세요",
        "edit": "정렬 편집",
        "save": "정렬 저장"
      }
    },
    "form": {
      "add_node": "노드 추가",
      "edit_node": "노드 편집",
      "new_node": "새 노드",
      "name": {
        "label": "노드 이름",
        "placeholder": "노드 이름을 입력해주세요",
        "error": "올바른 이름을 입력해주세요"
      },
      "rate": {
        "label": "요금",
        "error": "올바른 요금을 입력해주세요"
      },
      "code": {
        "label": "사용자 지정 노드 ID",
        "optional": "(선택사항)",
        "placeholder": "사용자 지정 노드 ID를 입력해주세요"
      },
      "tags": {
        "label": "노드 태그",
        "placeholder": "Enter를 눌러 태그 추가"
      },
      "groups": {
        "label": "권한 그룹",
        "add": "그룹 추가",
        "placeholder": "권한 그룹을 선택해주세요",
        "empty": "검색 결과가 없습니다"
      },
      "host": {
        "label": "노드 주소",
        "placeholder": "도메인 또는 IP를 입력해주세요"
      },
      "port": {
        "label": "연결 포트",
        "placeholder": "사용자 연결 포트",
        "tooltip": "사용자가 실제로 연결하는 포트로, 클라이언트 설정에 입력해야 하는 포트 번호입니다. 중계 또는 터널을 사용하는 경우 서버가 실제로 수신하는 포트와 다를 수 있습니다.",
        "sync": "서버 포트와 동기화"
      },
      "server_port": {
        "label": "서버 포트",
        "placeholder": "서버 수신 포트",
        "tooltip": "서버가 실제로 수신하는 포트로, 서버에서 실제로 열린 포트입니다. 중계 또는 터널을 사용하는 경우 사용자 연결 포트와 다를 수 있습니다."
      },
      "parent": {
        "label": "상위 노드",
        "placeholder": "상위 노드 선택",
        "none": "없음"
      },
      "route": {
        "label": "라우트 그룹",
        "placeholder": "라우트 그룹 선택",
        "empty": "검색 결과가 없습니다"
      },
      "submit": "제출",
      "cancel": "취소",
      "success": "제출 완료"
    },
    "dynamic_form": {
      "shadowsocks": {
        "cipher": {
          "label": "암호화 방식",
          "placeholder": "암호화 방식 선택"
        },
        "obfs": {
          "label": "난독화",
          "placeholder": "난독화 방식 선택",
          "none": "없음",
          "http": "HTTP"
        },
        "obfs_settings": {
          "path": "경로",
          "host": "호스트"
        }
      },
      "vmess": {
        "tls": {
          "label": "TLS",
          "placeholder": "보안을 선택해주세요",
          "disabled": "비활성화",
          "enabled": "활성화"
        },
        "tls_settings": {
          "server_name": {
            "label": "서버 이름 표시(SNI)",
            "placeholder": "사용하지 않는 경우 비워두세요"
          },
          "allow_insecure": "안전하지 않은 연결 허용?"
        },
        "network": {
          "label": "전송 프로토콜",
          "placeholder": "전송 프로토콜 선택"
        }
      },
      "trojan": {
        "server_name": {
          "label": "서버 이름 표시(SNI)",
          "placeholder": "노드 주소가 인증서와 다른 경우 인증서 확인에 사용"
        },
        "allow_insecure": "안전하지 않은 연결 허용?",
        "network": {
          "label": "전송 프로토콜",
          "placeholder": "전송 프로토콜 선택"
        }
      },
      "hysteria": {
        "version": {
          "label": "프로토콜 버전",
          "placeholder": "프로토콜 버전"
        },
        "alpn": {
          "label": "ALPN",
          "placeholder": "ALPN"
        },
        "obfs": {
          "label": "난독화",
          "type": {
            "label": "난독화 구현",
            "placeholder": "난독화 구현 선택",
            "salamander": "Salamander"
          },
          "password": {
            "label": "난독화 비밀번호",
            "placeholder": "난독화 비밀번호를 입력해주세요",
            "generate_success": "난독화 비밀번호 생성 완료"
          }
        },
        "tls": {
          "server_name": {
            "label": "서버 이름 표시(SNI)",
            "placeholder": "노드 주소가 인증서와 다른 경우 인증서 확인에 사용"
          },
          "allow_insecure": "안전하지 않은 연결 허용?"
        },
        "bandwidth": {
          "up": {
            "label": "업로드 대역폭",
            "placeholder": "업로드 대역폭을 입력해주세요",
            "suffix": "Mbps",
            "bbr_tip": ", BBR 사용시 비워두세요"
          },
          "down": {
            "label": "다운로드 대역폭",
            "placeholder": "다운로드 대역폭을 입력해주세요",
            "suffix": "Mbps",
            "bbr_tip": ", BBR 사용시 비워두세요"
          }
        }
      },
      "vless": {
        "tls": {
          "label": "보안",
          "placeholder": "보안을 선택해주세요",
          "none": "없음",
          "tls": "TLS",
          "reality": "Reality"
        },
        "tls_settings": {
          "server_name": {
            "label": "서버 이름 표시(SNI)",
            "placeholder": "사용하지 않는 경우 비워두세요"
          },
          "allow_insecure": "안전하지 않은 연결 허용?"
        },
        "reality_settings": {
          "server_name": {
            "label": "대상 사이트(dest)",
            "placeholder": "예: example.com"
          },
          "server_port": {
            "label": "포트"
          }
        }
      }
    }
  },
  "user": {
    "manage": {
      "title": "사용자 관리",
      "description": "여기에서 사용자 추가, 삭제, 편집 및 조회 작업을 수행할 수 있습니다."
    },
    "columns": {
      "is_admin": "관리자",
      "is_staff": "스태프",
      "id": "ID",
      "email": "이메일",
      "online_count": "온라인 기기",
      "status": "상태",
      "subscription": "구독",
      "group": "그룹",
      "used_traffic": "사용된 트래픽",
      "total_traffic": "총 트래픽",
      "expire_time": "만료 시간",
      "balance": "잔액",
      "commission": "수수료",
      "register_time": "등록 시간",
      "actions": "작업",
      "device_limit": {
        "unlimited": "기기 제한 없음",
        "limited": "최대 {{count}}대의 기기 허용"
      },
      "status_text": {
        "normal": "정상",
        "banned": "차단됨"
      },
      "online_status": {
        "online": "현재 온라인",
        "never": "접속 기록 없음",
        "last_online": "마지막 접속: {{time}}",
        "offline_duration": {
          "days": "오프라인 기간: {{count}}일",
          "hours": "오프라인 기간: {{count}}시간",
          "minutes": "오프라인 기간: {{count}}분",
          "seconds": "오프라인 기간: {{count}}초"
        }
      },
      "expire_status": {
        "permanent": "영구",
        "expired": "{{days}}일 전 만료됨",
        "remaining": "{{days}}일 남음"
      },
      "actions_menu": {
        "edit": "편집",
        "assign_order": "주문 할당",
        "copy_url": "구독 URL 복사",
        "reset_secret": "UUID 및 URL 재설정",
        "orders": "주문",
        "invites": "초대",
        "traffic_records": "트래픽 기록"
      }
    },
    "filter": {
      "selected": "{{count}}개 선택됨",
      "no_results": "검색 결과가 없습니다.",
      "clear": "필터 초기화",
      "search_placeholder": "검색...",
      "email_search": "사용자 이메일 검색...",
      "advanced": "고급 필터",
      "reset": "필터 초기화",
      "sheet": {
        "title": "고급 필터",
        "description": "하나 이상의 필터 조건을 추가하여 사용자를 정확하게 찾기",
        "conditions": "필터 조건",
        "add": "조건 추가",
        "condition": "조건 {{number}}",
        "field": "필드 선택",
        "operator": "연산자 선택",
        "value": "값 입력",
        "value_number": "값 입력 ({{unit}})",
        "reset": "초기화",
        "apply": "필터 적용"
      },
      "fields": {
        "email": "이메일",
        "id": "사용자 ID",
        "plan_id": "구독",
        "transfer_enable": "트래픽",
        "total_used": "사용된 트래픽",
        "online_count": "온라인 기기",
        "expired_at": "만료 시간",
        "uuid": "UUID",
        "token": "토큰",
        "banned": "계정 상태",
        "remark": "비고",
        "inviter_email": "초대자 이메일",
        "invite_user_id": "초대자 ID",
        "is_admin": "관리자",
        "is_staff": "스태프"
      },
      "operators": {
        "contains": "포함",
        "eq": "일치",
        "gt": "초과",
        "lt": "미만"
      },
      "status": {
        "normal": "정상",
        "banned": "차단됨"
      },
      "boolean": {
        "true": "예",
        "false": "아니오"
      }
    },
    "generate": {
      "button": "사용자 생성",
      "title": "사용자 생성",
      "form": {
        "email": "이메일",
        "email_prefix": "계정 (일괄 생성시 비워두기)",
        "email_domain": "도메인",
        "password": "비밀번호",
        "password_placeholder": "비워두면 이메일을 비밀번호로 사용",
        "expire_time": "만료 시간",
        "expire_time_placeholder": "사용자 만료 날짜 선택, 영구는 비워두기",
        "permanent": "영구",
        "subscription": "구독 플랜",
        "subscription_none": "없음",
        "generate_count": "생성 수량",
        "generate_count_placeholder": "일괄 생성할 수량 입력",
        "cancel": "취소",
        "submit": "생성",
        "success": "생성 완료"
      }
    },
    "edit": {
      "button": "사용자 정보 편집",
      "title": "사용자 관리",
      "form": {
        "email": "이메일",
        "email_placeholder": "이메일을 입력해주세요",
        "inviter_email": "초대자 이메일",
        "inviter_email_placeholder": "이메일을 입력해주세요",
        "password": "비밀번호",
        "password_placeholder": "변경하려면 새 비밀번호 입력",
        "balance": "잔액",
        "balance_placeholder": "잔액을 입력해주세요",
        "commission_balance": "수수료 잔액",
        "commission_balance_placeholder": "수수료 잔액을 입력해주세요",
        "upload": "업로드 트래픽",
        "upload_placeholder": "업로드 트래픽",
        "download": "다운로드 트래픽",
        "download_placeholder": "다운로드 트래픽",
        "total_traffic": "총 트래픽",
        "total_traffic_placeholder": "트래픽을 입력해주세요",
        "expire_time": "만료 시간",
        "expire_time_placeholder": "사용자 만료 날짜 선택, 영구는 비워두기",
        "expire_time_specific": "특정 시간",
        "expire_time_today": "오늘 종료로 설정",
        "expire_time_permanent": "영구",
        "expire_time_1month": "1개월",
        "expire_time_3months": "3개월",
        "expire_time_confirm": "확인",
        "subscription": "구독 플랜",
        "subscription_none": "없음",
        "account_status": "계정 상태",
        "commission_type": "수수료 유형",
        "commission_type_system": "시스템 설정 따르기",
        "commission_type_cycle": "주기별 수수료",
        "commission_type_onetime": "일회성 수수료",
        "commission_rate": "수수료율",
        "commission_rate_placeholder": "사이트 수수료율을 따르려면 비워두기",
        "discount": "전용 할인",
        "discount_placeholder": "전용 할인이 없으면 비워두기",
        "speed_limit": "속도 제한",
        "speed_limit_placeholder": "속도 제한이 없으면 비워두기",
        "device_limit": "기기 제한",
        "device_limit_placeholder": "기기 제한이 없으면 비워두기",
        "is_admin": "관리자 여부",
        "is_staff": "스태프 여부",
        "remarks": "비고",
        "remarks_placeholder": "비고를 입력해주세요",
        "cancel": "취소",
        "submit": "제출",
        "success": "수정 완료"
      }
    }
  },
  "subscribe": {
    "plan": {
      "title": "구독 플랜",
      "add": "플랜 추가",
      "search": "플랜 검색...",
      "sort": {
        "edit": "정렬 편집",
        "save": "정렬 저장"
      },
      "columns": {
        "id": "ID",
        "show": "표시",
        "sell": "판매",
        "renew": "갱신",
        "renew_tooltip": "구독 판매가 중단된 후 기존 사용자의 갱신 가능 여부",
        "name": "이름",
        "stats": "통계",
        "group": "권한 그룹",
        "price": "가격",
        "actions": "작업",
        "edit": "편집",
        "delete": "삭제",
        "delete_confirm": {
          "title": "삭제 확인",
          "description": "이 작업은 이 구독을 영구적으로 삭제하며 취소할 수 없습니다. 계속하시겠습니까?",
          "success": "삭제 완료"
        },
        "price_period": {
          "monthly": "월간",
          "quarterly": "분기",
          "half_yearly": "반기",
          "yearly": "연간",
          "two_yearly": "2년",
          "three_yearly": "3년",
          "onetime": "일회성",
          "reset_traffic": "트래픽 초기화",
          "unit": {
            "month": "/월",
            "quarter": "/분기",
            "half_year": "/반기",
            "year": "/년",
            "two_year": "/2년",
            "three_year": "/3년",
            "times": "/회"
          }
        }
      },
      "form": {
        "add_title": "플랜 추가",
        "edit_title": "플랜 편집",
        "name": {
          "label": "플랜 이름",
          "placeholder": "플랜 이름 입력"
        },
        "group": {
          "label": "서버 그룹",
          "add": "그룹 추가",
          "placeholder": "서버 그룹 선택"
        },
        "transfer": {
          "label": "트래픽",
          "placeholder": "트래픽 제한 입력",
          "unit": "GB"
        },
        "speed": {
          "label": "속도 제한",
          "placeholder": "속도 제한 입력",
          "unit": "Mbps"
        },
        "price": {
          "title": "가격 설정",
          "base_price": "기본 가격",
          "clear": {
            "button": "초기화",
            "tooltip": "모든 가격 초기화"
          },
          "period": {
            "monthly": "월간",
            "months": "{{count}}개월"
          },
          "onetime_desc": "일회성 트래픽 패키지, 시간 제한 없음",
          "reset_desc": "트래픽 초기화 패키지, 여러 번 사용 가능"
        },
        "device": {
          "label": "기기 제한",
          "placeholder": "기기 제한 입력",
          "unit": "대"
        },
        "capacity": {
          "label": "용량 제한",
          "placeholder": "용량 제한 입력",
          "unit": "사용자"
        },
        "reset_method": {
          "label": "트래픽 초기화 방식",
          "placeholder": "초기화 방식 선택",
          "description": "트래픽 초기화 방식에 따라 트래픽이 초기화되는 방법이 결정됩니다",
          "options": {
            "follow_system": "시스템 설정 따르기",
            "monthly_first": "매월 1일",
            "monthly_reset": "매월 구매일",
            "no_reset": "초기화 없음",
            "yearly_first": "매년 1일",
            "yearly_reset": "매년 구매일"
          }
        },
        "content": {
          "label": "플랜 설명",
          "placeholder": "플랜 설명 입력",
          "description": "마크다운 형식 지원",
          "preview": "미리보기",
          "preview_button": {
            "show": "미리보기 표시",
            "hide": "미리보기 숨기기"
          },
          "template": {
            "button": "템플릿 사용",
            "tooltip": "기본 템플릿 사용",
            "content": "## 플랜 특징\n\n- 트래픽: {{transfer}} GB\n- 속도: {{speed}} Mbps\n- 기기: {{devices}}대\n\n## 사용 안내\n\n1. 플랜 유효 기간: {{validity}}일\n2. 트래픽 초기화: {{reset_method}}\n3. 최대 동시 접속자: {{capacity}}명"
          }
        },
        "force_update": {
          "label": "사용자 플랜 강제 업데이트"
        },
        "submit": {
          "cancel": "취소",
          "submit": "제출",
          "submitting": "제출 중...",
          "success": {
            "add": "플랜이 성공적으로 추가되었습니다",
            "update": "플랜이 성공적으로 업데이트되었습니다"
          }
        }
      },
      "page": {
        "description": "여기에서 구독 플랜을 구성할 수 있으며, 추가, 삭제 및 편집 작업을 수행할 수 있습니다."
      }
    }
  },
  "auth": {
    "signIn": {
      "title": "로그인",
      "description": "이메일과 비밀번호를 입력하여 로그인하세요",
      "email": "이메일",
      "emailPlaceholder": "name@example.com",
      "password": "비밀번호",
      "passwordPlaceholder": "비밀번호를 입력하세요",
      "forgotPassword": "비밀번호를 잊으셨나요?",
      "submit": "로그인",
      "rememberMe": "로그인 상태 유지",
      "resetPassword": {
        "title": "비밀번호 재설정",
        "description": "비밀번호를 재설정하려면 사이트 디렉토리에서 다음 명령을 실행하세요",
        "command": "php artisan reset:password 관리자-이메일"
      },
      "validation": {
        "emailRequired": "이메일을 입력해주세요",
        "emailInvalid": "올바른 이메일 주소를 입력해주세요",
        "passwordRequired": "비밀번호를 입력해주세요",
        "passwordLength": "비밀번호는 최소 7자 이상이어야 합니다"
      }
    }
  },
  "sidebar": {
    "dashboard": "대시보드",
    "systemManagement": "시스템 관리",
    "systemConfig": "시스템 설정",
    "themeConfig": "테마 설정",
    "noticeManagement": "공지사항 관리",
    "paymentConfig": "결제 설정",
    "knowledgeManagement": "지식 베이스",
    "nodeManagement": "노드 관리",
    "permissionGroupManagement": "권한 그룹",
    "routeManagement": "경로 관리",
    "subscriptionManagement": "구독 관리",
    "planManagement": "플랜 관리",
    "orderManagement": "주문 관리",
    "couponManagement": "쿠폰 관리",
    "userManagement": "사용자 관리",
    "ticketManagement": "티켓 관리"
  }
};