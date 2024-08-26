{
  "remarks": "AlirzzaBPB",
  "log": {
    "loglevel": "warning"
  },
  "dns": {
    "hosts": {},
    "servers": [
      "tcp://94.140.14.14"
    ],
    "tag": "dns"
  },
  "inbounds": [
    {
      "port": 10808,
      "protocol": "socks",
      "settings": {
        "auth": "noauth",
        "udp": true,
        "userLevel": 8
      },
      "sniffing": {
        "destOverride": [
          "http",
          "tls"
        ],
        "enabled": true,
        "routeOnly": true
      },
      "tag": "socks-in"
    },
    {
      "port": 10809,
      "protocol": "http",
      "settings": {
        "auth": "noauth",
        "udp": true,
        "userLevel": 8
      },
      "sniffing": {
        "destOverride": [
          "http",
          "tls"
        ],
        "enabled": true,
        "routeOnly": true
      },
      "tag": "http-in"
    },
    {
      "listen": "127.0.0.1",
      "port": 10853,
      "protocol": "dokodemo-door",
      "settings": {
        "address": "1.1.1.1",
        "network": "tcp,udp",
        "port": 53
      },
      "tag": "dns-in"
    }
  ],
  "outbounds": [
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.speedtest.net",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-Pain-BachE-e0j.PAGEs.DEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "Bia-PaiN-BacHE-E0j.PageS.dEV"
          },
          "path": "/ZiIMemTxspPURfyV/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_1"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "bia-pain-bache-e0j.pages.dev",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bia-PAiN-bACHe-E0J.PaGeS.DEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "biA-Pain-baChE-e0j.pAgES.deV"
          },
          "path": "/75p148WKrXiYmimw/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_2"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "172.66.44.85",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIA-PaiN-Bache-e0J.pAges.dEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "biA-pAin-BAche-e0J.paGeS.Dev"
          },
          "path": "/APJkJAEEEtuh1oJ9/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_3"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "172.66.47.171",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-pAIN-BAcHe-e0J.pagES.deV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-PaIN-baCHE-E0j.pAgEs.DEv"
          },
          "path": "/a0D9IJaecTYlUSQH/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_4"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "[2606:4700:310c::ac42:2c55]",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-PaIn-bAchE-e0J.paGES.dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIa-paiN-BAcHe-e0j.pAGEs.dEv"
          },
          "path": "/YGaQ81LWKUYf7u29/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_5"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "[2606:4700:310c::ac42:2fab]",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-PAiN-bAChe-E0J.paGes.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIa-pain-bacHE-E0j.paGES.deV"
          },
          "path": "/y1LY5y2xIuMo0nuu/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_6"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "213.176.120.98",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-pAIN-BACHE-E0J.PaGEs.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "Bia-PaIN-baChE-E0j.pagEs.Dev"
          },
          "path": "/aps5JfCy2EDHbk4i/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_7"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "188.114.98.124",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "biA-pAIN-BaCHE-E0j.PAges.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "Bia-pAin-bacHE-E0J.PAgeS.Dev"
          },
          "path": "/UqiSq8EGIGH5Jyg0/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_8"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.198.18",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIA-pain-bAchE-e0j.paGeS.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-pAIN-bacHe-e0j.PaGES.DEV"
          },
          "path": "/BSfE2jGbsFLvZxtM/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_9"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.133.133",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-PaIn-BAChE-E0j.PaGES.DEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "biA-pAiN-BaChe-E0J.pagES.DEv"
          },
          "path": "/2lC9qSdJ2AtVbeIl/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_10"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.176.15",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-paIn-bAche-e0J.pAGes.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIa-PaIn-bAchE-e0j.Pages.dEv"
          },
          "path": "/NmBS0tEKoI5heWAe/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_11"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.3.25",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-pAin-BAchE-E0J.Pages.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "bia-pAIN-baChE-E0J.PagES.DEv"
          },
          "path": "/L1gNsOgZUm5lytsJ/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_12"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.1.107",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BiA-PaIn-baChe-e0J.pagES.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "bia-PaiN-bacHE-e0J.pagEs.DEV"
          },
          "path": "/s0rpp3JhoUihTAKE/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_13"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.69.87",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "biA-paiN-BaCHE-e0j.pAgES.deV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIA-Pain-BachE-e0J.pagES.dev"
          },
          "path": "/uC44axQ72RvDQRMT/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_14"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.133.4",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIA-PaIN-bache-E0j.PAges.dEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIA-PAiN-bACHe-E0J.pAgES.deV"
          },
          "path": "/UH2baGd81SzKUNDM/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_15"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.85.87",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-PAIN-BACHe-e0j.pAgeS.dEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bia-paIN-BAChE-E0j.paGeS.DeV"
          },
          "path": "/yQUjipMa6tGXMkIQ/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_16"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.34.218",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-PaIN-BaChE-E0j.PAgeS.deV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-pAIN-bAcHE-E0J.PaGeS.DEv"
          },
          "path": "/OlNVuG6f08tZQdJy/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_17"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.18.127.200",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-PAiN-Bache-E0j.PAGES.dEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-PaiN-BACHe-E0j.PaGes.DEV"
          },
          "path": "/2IvMEaY6I9U5r9BP/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_18"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.27.73",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bia-PAIn-BAche-E0J.pAGES.dEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIa-pAiN-bACHE-e0J.pageS.deV"
          },
          "path": "/zXU5fc9wHFL90NF4/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_19"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.87.19",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-Pain-BachE-E0j.pAGeS.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-PaIn-bacHE-E0j.pages.dEv"
          },
          "path": "/9P4bQS2N3cFNRcNd/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_20"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.128.177",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bia-PAIn-BacHE-e0J.paGes.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "Bia-PAIN-bAcHe-e0j.pAGEs.DEV"
          },
          "path": "/CUfzOfiVkJVSwADS/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_21"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.79.184",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIA-PaiN-bACHE-e0J.PaGeS.dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "Bia-PaIN-BaCHe-E0j.PAgeS.dEV"
          },
          "path": "/X8YLGqLUkHpzZMng/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_22"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.50.29",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BiA-PAiN-BACHe-e0j.PAGes.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-PAiN-BachE-e0J.pAgEs.DeV"
          },
          "path": "/2NXHB1ovN4mfbH9L/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_23"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "103.184.45.92",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIa-paIn-BAcHE-E0j.paGeS.DEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "biA-pAin-bacHe-E0J.PageS.dEv"
          },
          "path": "/BrGSZSAkCr9RBueZ/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_24"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.219.8",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "biA-PAin-BAChE-e0J.PAgeS.deV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-pAIn-BaChe-e0J.pAGES.DEV"
          },
          "path": "/QN2J7AIHie5O3Gjg/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_25"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.196.43",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIa-pAin-baChe-E0J.PAGEs.DEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "Bia-PAiN-bAChE-E0J.PAGEs.DeV"
          },
          "path": "/Fnt1RHg9G8f1irAC/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_26"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.179.255",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BiA-pAIN-baChE-e0j.PaGes.dEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIA-pAIn-BAChe-e0J.PAGes.DeV"
          },
          "path": "/LcfswqdrNaymruJs/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_27"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.4.225",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIa-pAIN-baChE-e0j.PaGeS.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bia-paIN-BAche-E0J.paGes.DEV"
          },
          "path": "/6BMT6kqV4JOoJPEw/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_28"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.137.249",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-PAiN-BAcHe-E0j.PAgeS.DEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "biA-PAiN-bache-E0j.PageS.dev"
          },
          "path": "/eVWOF6RJ2isOppIy/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_29"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.70.215",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIa-PAiN-BAche-E0j.pAgeS.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "bia-PAIN-BAcHe-e0J.PAgES.dev"
          },
          "path": "/MtLe1ITUhSnPWPML/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_30"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.74.243",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-pain-BacHe-e0j.PagES.dEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIa-pain-BACHE-E0j.PaGEs.DEv"
          },
          "path": "/h5Syn8ppOSqkGjbJ/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_31"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.50.202",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BiA-PaiN-baChe-E0J.pAgEs.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIa-PAin-bacHE-e0j.PAgeS.dEv"
          },
          "path": "/2A4saWZAXxJqP5Kr/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_32"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.196.223",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-pAin-BACHe-E0j.paGes.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-PAiN-BaCHE-e0j.paGes.DEv"
          },
          "path": "/xKxzH130ppYJz16N/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_33"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.198.139",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bia-PAIn-bAcHE-e0j.pAges.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "bia-pAiN-BaChE-E0j.Pages.deV"
          },
          "path": "/4YI36KFXDYg7XKMf/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_34"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.72.69",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIa-Pain-BAChE-E0j.PAgEs.deV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-PAin-bAcHE-e0j.Pages.deV"
          },
          "path": "/I9xdQbPyHrYJx4Tw/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_35"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.78.91",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIA-pAIn-BacHe-E0j.pagES.dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIa-PaIn-BAche-e0J.PAGEs.DEV"
          },
          "path": "/N1sSZdxqjJjwXV05/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_36"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.32.254",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-PaIN-BaChE-E0j.PaGEs.dEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-PAIn-baCHE-E0j.pAgeS.Dev"
          },
          "path": "/N7OpO0sv6F02f3iA/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_37"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.20.176.122",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-PAin-bACHe-E0j.PAGes.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "Bia-PAIN-BACHe-E0j.pAgEs.Dev"
          },
          "path": "/zBvC9Iuqk6nFcGlh/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_38"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.131.187",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-paIN-bacHe-E0J.pageS.DEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-PAIn-BAcHe-e0J.pagES.dev"
          },
          "path": "/w9Z8zujJDNffFeki/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_39"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.148.66",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "biA-paIn-baChE-E0J.pAGES.dEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-pain-bACHe-e0j.pAGeS.dEV"
          },
          "path": "/wgussLf2NOFWgCXP/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_40"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.77.49",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-pAiN-BacHe-e0J.pages.DEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIa-pAIn-bAcHE-E0j.PAgEs.Dev"
          },
          "path": "/NNdfDBXbWwkWCfVf/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_41"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.61.140",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-paIN-bAChE-E0J.pagEs.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIA-PAiN-BAcHE-e0J.pAgES.dEV"
          },
          "path": "/I9VdRupo50RAiWn2/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_42"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.140.98",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIA-PAIN-baChe-e0J.pAgES.dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-paIN-bACHE-E0J.PAGES.dev"
          },
          "path": "/atxvDqHKZabdnEAU/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_43"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.132.196",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-PaIn-BaCHe-e0J.PaGES.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-PAIn-bacHe-E0j.pAgeS.DEv"
          },
          "path": "/HCdqLqWOOnCck7xh/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_44"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.133.202",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-PaiN-bAcHe-E0J.paGEs.dEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bia-pAin-bAcHe-e0j.PAgES.Dev"
          },
          "path": "/FRP1xvCu56EG97ji/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_45"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.55.68",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIa-PaiN-BaChE-E0J.pAgES.DEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-PaIn-BAchE-e0j.paGeS.Dev"
          },
          "path": "/AeLiZOgMSNyNME8i/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_46"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.51.234",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIa-pAIN-BacHE-e0j.pageS.deV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIa-PaIN-BaChE-E0j.PAgES.deV"
          },
          "path": "/xVwQYFvJv1xQ8o4t/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_47"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.65.251",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-pAIn-BaChE-e0J.PAges.dEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-pAIN-bacHE-e0j.PAGES.DEV"
          },
          "path": "/RHBdP2GEGPmtBtTf/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_48"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.137.28",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "biA-Pain-bAchE-E0J.PAges.DEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "BiA-paIn-bAche-e0J.PAGes.DEv"
          },
          "path": "/6DQZPPM76EOKOXdB/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_49"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.32.25",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-PAin-BaChE-E0j.PaGeS.DeV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIa-pain-bACHE-e0j.pages.dEv"
          },
          "path": "/K8SzYhWQeDcQ2DSt/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_50"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.60.198",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "bIA-PaIn-baCHE-E0j.paGEs.dEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIA-PAIn-Bache-E0j.pAGEs.DeV"
          },
          "path": "/1scitmt3hPkYJZeX/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_51"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.75.20",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIa-PaIn-BACHe-E0J.paGeS.dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIA-PAiN-baChE-E0J.pAGES.DEV"
          },
          "path": "/s4yt8JcnxBDekEwX/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_52"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.199.172",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "Bia-paIn-BaCHE-E0J.pagEs.dEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bia-pain-bACHE-E0j.paGes.dev"
          },
          "path": "/61aZFe8Q8uuNXvTN/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_53"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.16.130.185",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-Pain-baChE-e0j.paGeS.dEv"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-pAIn-BAChE-E0J.pAgES.DeV"
          },
          "path": "/DxxgLJea2wPBCjc2/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_54"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.134.56",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-pAin-bAche-E0J.paGeS.Dev"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIa-pAiN-BaChE-e0J.PAGes.dEv"
          },
          "path": "/cpatSI1NmcpwqThQ/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_55"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "104.17.132.150",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BIA-pAin-bacHE-E0j.pAgEs.DEV"
        },
        "wsSettings": {
          "headers": {
            "Host": "BIA-PAin-bAChe-E0J.PaGeS.DEv"
          },
          "path": "/2dd9bhzurZQ5dRxr/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_56"
    },
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "66.81.247.220",
            "port": 443,
            "users": [
              {
                "encryption": "none",
                "flow": "",
                "id": "89b3cbba-e6ac-485a-9481-976a0415eab9",
                "level": 8,
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "security": "tls",
        "sockopt": {
          "dialerProxy": "fragment",
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        },
        "tlsSettings": {
          "allowInsecure": false,
          "fingerprint": "chrome",
          "alpn": [
            "h2",
            "http/1.1"
          ],
          "serverName": "BiA-pAIn-bAcHe-e0J.PAgEs.deV"
        },
        "wsSettings": {
          "headers": {
            "Host": "bIa-pAIN-BaCHe-E0j.pAGEs.dEv"
          },
          "path": "/efD4LjwlHfjmORGX/Mi41OS4xMTcuMjE3?ed=2560"
        }
      },
      "tag": "prox_57"
    },
    {
      "tag": "fragment",
      "protocol": "freedom",
      "settings": {
        "fragment": {
          "packets": "tlshello",
          "length": "10-200",
          "interval": "1-1"
        }
      },
      "streamSettings": {
        "sockopt": {
          "tcpKeepAliveIdle": 100,
          "tcpNoDelay": true
        }
      }
    },
    {
      "protocol": "dns",
      "tag": "dns-out"
    },
    {
      "protocol": "freedom",
      "settings": {},
      "tag": "direct"
    },
    {
      "protocol": "blackhole",
      "settings": {
        "response": {
          "type": "http"
        }
      },
      "tag": "block"
    }
  ],
  "policy": {
    "levels": {
      "8": {
        "connIdle": 300,
        "downlinkOnly": 1,
        "handshake": 4,
        "uplinkOnly": 1
      }
    },
    "system": {
      "statsOutboundUplink": true,
      "statsOutboundDownlink": true
    }
  },
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "inboundTag": [
          "dns-in"
        ],
        "outboundTag": "dns-out",
        "type": "field"
      },
      {
        "ip": [
          "94.140.14.14"
        ],
        "outboundTag": "direct",
        "port": "53",
        "type": "field"
      },
      {
        "balancerTag": "all",
        "type": "field",
        "network": "tcp,udp"
      }
    ],
    "balancers": [
      {
        "tag": "all",
        "selector": [
          "prox"
        ],
        "strategy": {
          "type": "leastPing"
        }
      }
    ]
  },
  "observatory": {
    "probeInterval": "30s",
    "probeURL": "https://api.github.com/_private/browser/stats",
    "subjectSelector": [
      "prox"
    ],
    "EnableConcurrency": true
  },
  "stats": {}
}
