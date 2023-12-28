(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{571:function(v,_,t){v.exports=t.p+"assets/img/https.b951d89c.png"},998:function(v,_,t){"use strict";t.r(_);var l=t(41),i=Object(l.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"_1-http-和-tcp-协议"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-和-tcp-协议"}},[v._v("#")]),v._v(" 1.http 和 tcp 协议")]),v._v(" "),l("ul",[l("li",[v._v("TCP 链接")])]),v._v(" "),l("ol",[l("li",[v._v("手机能够使用联网功能是因为手机底层实现了 TCP/IP 协议，可以使手机终端通过无线网络建立 TCP 连接。TCP 协议可以对上层网络提供接口，使上层网络数据的传输建立在“无差别”的网络之上。"),l("br")]),v._v(" "),l("li",[v._v("建立 TCP 链接需要三次握手\n"),l("ol",[l("li",[v._v("客户端发送 syn 包(syn=j)到服务器，并进入 SYN_SEND 状态，等待服务器确认；")]),v._v(" "),l("li",[v._v("服务器收到 syn 包，必须确认客户的 SYN（ack=j+1），同时自己也发送一个 SYN 包（syn=k），即 SYN+ACK 包，此时服务器进入 SYN_RECV 状态；")]),v._v(" "),l("li",[v._v("客户端收到服务器的 SYN ＋ ACK 包，向服务器发送确认包 ACK(ack=k+1)，此包发送完毕，客户端和服务器进入 ESTABLISHED 状态，完成三次握手。")])])]),v._v(" "),l("li",[v._v("完成三次握手，客户端与服务器才正式开始传送数据")]),v._v(" "),l("li",[v._v("四次挥手\n"),l("ul",[l("li",[v._v("四次挥手的过程\n"),l("ul",[l("li",[v._v('当服务端收到客户端关闭报文时，并不会立即关闭，先回复一个报文，告诉客户端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送连接释放请求，因此不能一起发送。故需要四步挥手')])])]),v._v(" "),l("li",[v._v("举例："),l("br"),v._v(" "),l("ul",[l("li",[v._v("Browser:先告诉服务器 “我数据都发完了，你可以关闭连接了。”"),l("br")]),v._v(" "),l("li",[v._v("Server:回复浏览器 “关闭的请求我收到了，我先看看我这边还有没有数据没传完。”"),l("br")]),v._v(" "),l("li",[v._v("Server:确认过以后，再次回复浏览器 “我这边数据传输完成了，你可以关闭连接了。”"),l("br")]),v._v(" "),l("li",[v._v("Browser:告诉服务器 “好的，那我关闭了。不用回复了。”"),l("br")]),v._v(" "),l("li",[v._v("客户端又等了2MSL，确认确实没有再收到请求了，才会真的关闭TCP连接。"),l("br")])])]),v._v(" "),l("li",[v._v("为什么需要四次挥手？\n"),l("ul",[l("li",[v._v("TCP 使用四次挥手的原因，是因为 TCP 的连接是全双工的，所以需要双方分别释放掉对方的连接")]),v._v(" "),l("li",[v._v("单独一方的连接释放，只代 表不能再向对方发送数据，连接处于的是半释放的状态")]),v._v(" "),l("li",[v._v("最后一次挥手中，客户端会等待一段时间再关闭的原因，是为了防止客户端发送给服务器的确认报文段丢失或者出错，从而导致服务器端不能正常关闭")])])])])])]),v._v(" "),l("ul",[l("li",[v._v("HTTP 链接")])]),v._v(" "),l("ol",[l("li",[v._v("HTTP 协议即超文本传送协议(Hypertext Transfer Protocol )，是 Web 联网的基础，也是手机联网常用的协议之一，HTTP 协议是建立在 TCP 协议之上的一种应用。")]),v._v(" "),l("li",[v._v("特点：客户端发送的每次请求都需要服务器回送响应，在请求结束后，会主动释放连接\n"),l("ol",[l("li",[v._v("在 HTTP 1.0 中，客户端的每次请求都要求建立一次单独的连接，在处理完本次请求后，就自动释放连接。")]),v._v(" "),l("li",[v._v("在 HTTP 1.1 中则可以在一次连接中处理多个请求，并且多个请求可以重叠进行，不需要等待一个请求结束后再发送下一个请求。")])])]),v._v(" "),l("li",[v._v("由于 HTTP 在每次请求结束后都会主动释放连接，因此 HTTP 连接是一种“短连接”")])]),v._v(" "),l("ul",[l("li",[v._v("相互关系")])]),v._v(" "),l("ol",[l("li",[v._v("http 是要基于 TCP 连接基础上的\n"),l("ol",[l("li",[v._v("TCP 就是单纯建立连接，不涉及任何我们需要请求的实际数据，简单的传输。")]),v._v(" "),l("li",[v._v("http 是用来收发数据，即实际应用上来的。")]),v._v(" "),l("li",[v._v("过程：从传输层，先说下 TCP 连接，我们要和服务端连接 TCP 连接，需要通过三次连接，包括：请求，确认，建立连接。即传说中的“三次握手协议”。\n简单就是:请求，确认，连接")])])]),v._v(" "),l("li",[v._v("从实际上的数据应用来说 http\n在前面客户端和应用服务器建立 TCP 连接之后，就需要用 http 协议来传送数据了，HTTP 协议简单来说，还是请求，确认，连接。")]),v._v(" "),l("li",[v._v("TCP 是底层通讯协议，定义的是数据传输和连接方式的规范 1. HTTP 是应用层协议，定义的是传输数据的内容的规范 2. HTTP 协议中的数据是利用 TCP 协议传输的，所以支持 HTTP 也就一定支持 TCP\n3. HTTP 支持的是 www 服务,而 TCP/IP 是协议 4. 它是 Internet 国际互联网络的基础。TCP/IP 是网络中使用的基本的通信协议。 5. TCP/IP 实际上是一组协议，它包括上百个各种功能的协议，如：远程登录、文件传输和电子邮件等，而 TCP 协议和 IP 协议是保证数据完整传输的两个基本的重要协议。通常说 TCP/IP 是 Internet 协议族，而不单单是 TCP 和 IP。\n"),l("a",{attrs:{href:"https://www.cnblogs.com/wx-1996/p/10685576.html",target:"_blank"}},[v._v("HTTP 与 TCP 的区别和联系")])])]),v._v(" "),l("h2",{attrs:{id:"_2-http-状态码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-状态码"}},[v._v("#")]),v._v(" 2.HTTP 状态码")]),v._v(" "),l("p",[v._v("200 正常 "),l("br"),v._v("\n302 表示临时性重定向。访问一个 Url 时，被重定向到另一个 url 上。"),l("br"),v._v("\n401 请求需要认证"),l("br"),v._v("\n403 请求对应资源禁止访问"),l("br"),v._v("\n404 服务器无法找到对应资源"),l("br"),v._v("\n502 网关错误"),l("br"),v._v("\n504 网关超时"),l("br")]),v._v(" "),l("h2",{attrs:{id:"_3-http1-0-和-http1-1-的区别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-http1-0-和-http1-1-的区别"}},[v._v("#")]),v._v(" 3.HTTP1.0 和 HTTP1.1 的区别")]),v._v(" "),l("ul",[l("li",[v._v("1.0 存在的问题\n"),l("ul",[l("li",[v._v("无法复用连接，每次都需要建立 TCP 连接，而 TCP 连接释放过程又比较费时")]),v._v(" "),l("li",[v._v("队头阻塞，由于 HTTP1.0 规定下一个请求必须在前一个请求响应到达之前才能发送，假设前一个请求响应一直不到达，那么下一个请求就不发送，后面的请求就阻塞了。")])])]),v._v(" "),l("li",[v._v("缓存处理（cache-control）\n"),l("ul",[l("li",[v._v("强缓存")]),v._v(" "),l("li",[v._v("协商缓存")])])]),v._v(" "),l("li",[v._v("带宽优化及网络连接的使用")]),v._v(" "),l("li",[v._v("增加 host 字段，支持断点传输等")]),v._v(" "),l("li",[v._v("长连接\n"),l("ul",[l("li",[v._v("增加了 Connection 字段，通过设置 keep-alive 保持连接不断，避免每次客户端和服务端请求建立释放 TCP 链接，提高网络利用率")])])])]),v._v(" "),l("h2",{attrs:{id:"_4-http1-x-和-http2-0-的差别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-http1-x-和-http2-0-的差别"}},[v._v("#")]),v._v(" 4.Http1.x 和 http2.0 的差别")]),v._v(" "),l("ul",[l("li",[l("strong",[v._v("新的二进制格式")]),v._v("（Binary Format），HTTP1.x 的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认 0 和 1 的组合。基于这种考虑 HTTP2.0 的协议解析决定采用二进制格式，实现方便且健壮。")]),v._v(" "),l("li",[l("strong",[v._v("多路复用")]),v._v("（MultiPlexing），即连接共享，即每一个 request 都是是用作连接共享机制的。一个 request 对应一个 id，这样一个连接上可以有多个 request，每个连接的 request 可以随机的混杂在一起，接收方可以根据 request 的 id 将 request 再归属到各自不同的服务端请求里面。")]),v._v(" "),l("li",[l("strong",[v._v("header 压缩")]),v._v("，如上文中所言，对前面提到过 HTTP1.x 的 header 带有大量信息，而且每次都要重复发送，HTTP2.0 使用 encoder 来减少需要传输的 header 大小，通讯双方各自 cache 一份 header fields 表，既避免了重复 header 的传输，又减小了需要传输的大小。")]),v._v(" "),l("li",[l("strong",[v._v("服务端推送")]),v._v("（server push），同 SPDY 一样，HTTP2.0 也具有 server push 功能。")])]),v._v(" "),l("h2",{attrs:{id:"_5-https-和-http-的区别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-https-和-http-的区别"}},[v._v("#")]),v._v(" 5.https 和 http 的区别")]),v._v(" "),l("ul",[l("li",[v._v("HTTP\n超文本传输协议，明文传输，不安全")]),v._v(" "),l("li",[v._v("HTTPS")])]),v._v(" "),l("ol",[l("li",[v._v("https 在 http 的基础上加入了 SSL 协议，SSL 依靠证书来验证服务器的身份，并在浏览器和服务器之间加密"),l("br")]),v._v(" "),l("li",[v._v("https 是由 SSL+http 协议构建的可进行加密传输，身份认证的网络协议"),l("br")]),v._v(" "),l("li",[v._v("因为 http 是明文传输未加密，不安全，所以设计了 SSL 协议用于对 http 协议传输进行加密"),l("br")])]),v._v(" "),l("ul",[l("li",[v._v("HTTPS 工作流程\n"),l("img",{attrs:{src:t(571)}}),v._v(" "),l("br"),v._v(" "),l("br")])]),v._v(" "),l("ol",[l("li",[v._v("Client 发起一个 HTTPS（https:/demo.linianhui.dev）的请求，根据 RFC2818 的规定，Client 知道需要连接 Server 的 443（默认）端口。")]),v._v(" "),l("li",[v._v("Server 把事先配置好的公钥证书（public key certificate）返回给客户端。")]),v._v(" "),l("li",[v._v("Client 验证公钥证书：比如是否在有效期内，证书的用途是不是匹配 Client 请求的站点，是不是在 CRL 吊销列表里面，它的上一级证书是否有效，这是一个递归的过程，直到验证到根证书（操作系统内置的 Root 证书或者 Client 内置的 Root 证书）。如果验证通过则继续，不通过则显示警告信息。")]),v._v(" "),l("li",[v._v("Client 使用伪随机数生成器生成加密所使用的会话密钥，然后用证书的公钥加密这个会话密钥，发给 Server。")]),v._v(" "),l("li",[v._v("Server 使用自己的私钥（private key）解密这个消息，得到会话密钥。至此，Client 和 Server 双方都持有了相同的会话密钥。")]),v._v(" "),l("li",[v._v("Server 使用会话密钥加密“明文内容 A”，发送给 Client。")]),v._v(" "),l("li",[v._v("Client 使用会话密钥解密响应的密文，得到“明文内容 A”。")]),v._v(" "),l("li",[v._v("Client 再次发起 HTTPS 的请求，使用会话密钥加密请求的“明文内容 B”，然后 Server 使用会话密钥解密密文，得到“明文内容 B”。")])]),v._v(" "),l("ul",[l("li",[v._v("HTTPS 优点")])]),v._v(" "),l("ol",[l("li",[v._v("使用 https 可以认证用户和服务器，确保数据发送到正确的客户机和服务器")]),v._v(" "),l("li",[v._v("https 使用 SSL+http 构建的可加密传输、身份认证的网络协议，比 http 更加安全")]),v._v(" "),l("li",[v._v("https 是现行最安全的解决方案，增加了中间人的盗取成本")])]),v._v(" "),l("ul",[l("li",[v._v("HTTPS 缺点")])]),v._v(" "),l("ol",[l("li",[v._v("https 协议握手比较费时，会使页面加载时间延长")]),v._v(" "),l("li",[v._v("https 的缓存不如 http 高效，增加数据开销")]),v._v(" "),l("li",[v._v("SSL 协议需要成本费用")]),v._v(" "),l("li",[v._v("SSL 需要绑定 IP，不能在同一个 IP 绑定多个域名")]),v._v(" "),l("li",[v._v("https 加密范围有限")])]),v._v(" "),l("ul",[l("li",[v._v("HTTP 和 HTTPS 区别")])]),v._v(" "),l("ol",[l("li",[v._v("https 协议需要 ca 申请证书")]),v._v(" "),l("li",[v._v("http 是超文本传输协议，是明文传输，https 是具有安全性 SSL 加密传输协议，可进行加密传输，身份认证的网络协议，比 http 更安全")]),v._v(" "),l("li",[v._v("http 和 https 使用的不同的连接方式，用的端口也不一样，http 默认端口是 80,https 默认端口是 443")])]),v._v(" "),l("p",[l("a",{attrs:{href:"https://www.jianshu.com/p/97af35e81912",target:"_blank"}},[v._v("HTTP 与 HTPPS 的区别")])]),v._v(" "),l("h2",{attrs:{id:"_6-ws-和-ajax-的区别。"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_6-ws-和-ajax-的区别。"}},[v._v("#")]),v._v(" 6.ws 和 ajax 的区别。")]),v._v(" "),l("ul",[l("li",[v._v("本质不同，ajax 是调用浏览器的 xmlhttprequest，是一种创建交互式网页应用的网页开发技术")]),v._v(" "),l("li",[v._v("ws 是 THML5 的一种新的协议，实现了浏览器与服务器全双工通信，其本质是通过 HTTP/HTTPS 协议进行握手后创立于一个用于交换数据的 TCP 链接，服务端与客户端通过 TCP 链接进行通信")]),v._v(" "),l("li",[v._v("声明周期，ajax 是短连接，数据发送完和接收完会断开链接，ws 是长链接，会在一个会话中一直保存连接")]),v._v(" "),l("li",[v._v("websocket 一般用于前后端实时数据交互，而 ajax 前后端非实时数据交互")]),v._v(" "),l("li",[v._v("Ajax 技术需要客户端发起请求，而 WebSocket 服务器和客户端可以相互推送信息。")])]),v._v(" "),l("h2",{attrs:{id:"_7-ws-的长链接-和-http-的长链接-是一个东西吗"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_7-ws-的长链接-和-http-的长链接-是一个东西吗"}},[v._v("#")]),v._v(" 7.ws 的长链接 和 http 的长链接 是一个东西吗")]),v._v(" "),l("ul",[l("li",[v._v("HTTP1.1 通过使用 Connection:keep-alive 进行长连接，HTTP 1.1 默认进行持久连接。在一次 TCP 连接中可以完成多个 HTTP 请求，但是对每个请求仍然要单独发 header，Keep-Alive 不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如 Apache）中设定这个时间。这种长连接是一种“伪链接”")]),v._v(" "),l("li",[v._v("websocket 的长连接，是一个真的全双工。长连接第一次 tcp 链路建立之后，后续数据可以双方都进行发送，不需要发送请求头。")]),v._v(" "),l("li",[v._v("keep-alive 双方并没有建立正真的连接会话，服务端可以在任何一次请求完成后关闭。WebSocket 它本身就规定了是正真的、双工的长连接，两边都必须要维持住连接的状态")])]),v._v(" "),l("h2",{attrs:{id:"_8-keep-alive-是什么"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_8-keep-alive-是什么"}},[v._v("#")]),v._v(" 8.keep-alive 是什么")]),v._v(" "),l("ul",[l("li",[v._v("开启 HTTP Keep-Alive 之后，能复用已有的 TCP 链接，当前一个请求已经响应完毕，服务器端没有立即关闭- TCP 链接，而是等待一段时间接收浏览器端可能发送过来的第二个请求，通常浏览器在第一个请求返回之后会立即发送第二个请求，如果某一时刻只能有一个链接，同一个 TCP 链接处理的请求越多，开启 KeepAlive 能节省的 TCP 建立和关闭的消耗就越多。")]),v._v(" "),l("li",[v._v("当然通常会启用多个链接去从服务器器上请求资源，但是开启了 Keep-Alive 之后，仍然能加快资源的加载速度。HTTP/1.1 之后默认开启 Keep-Alive, 在 HTTP 的头域中增加 Connection 选项。当设置为"),l("code",[v._v("Connection:keep-alive")]),v._v("表示开启，设置为"),l("code",[v._v("Connection:close")]),v._v("表示关闭。")])]),v._v(" "),l("h2",{attrs:{id:"_9-dns解析"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_9-dns解析"}},[v._v("#")]),v._v(" 9. DNS解析")]),v._v(" "),l("ul",[l("li",[v._v("DNS 解析过程:将域名解析成 IP 地址\n"),l("ul",[l("li",[v._v("DNS叫做域名系统，是域名和对应ip地址的分布式数据库。有了它，就可以用域名来访问对应的服务器")])])]),v._v(" "),l("li",[v._v("过程：\n"),l("ul",[l("li",[v._v("在浏览器中输入后url后，会优先在浏览器dns缓存中查找，如果有缓存，则直接响应用户的请求")]),v._v(" "),l("li",[v._v("如果没有要访问的域名，就继续在操作系统的dns缓存中查找，如果也没有，最后通过本地的dns服务器查到对应的ip地址")]),v._v(" "),l("li",[v._v("DNS服务器完整的查询过程\n"),l("ul",[l("li",[v._v("本地DNS服务器向根域名服务器发送请求，根域名服务器会返回一个所查询域的顶级域名服务器地址")]),v._v(" "),l("li",[v._v("本地DNS服务器向顶级域名服务器发送请求，接受请求的服务器查询自己的缓存，如果有记录，就返回查询结果，如果没有就返回相关的下一级的权威域名服务器的地址")]),v._v(" "),l("li",[v._v("本地DNS服务器向权威域名服务器发送请求，权威域名服务器返回对应的结果")]),v._v(" "),l("li",[v._v("本地DNS服务器将返回结果保存在缓存中，便于下次使用")])])]),v._v(" "),l("li",[v._v("本地DNS服务器将返回结果返回给浏览器")])])]),v._v(" "),l("li",[v._v("DNS预解析\n"),l("ul",[l("li",[v._v("DNS Prefetch 是一种DNS 预解析技术，当你浏览网页时，浏览器会在对网页中的域名进行解析缓存，这样当页面中需要加载该域名的资源时就无需解析，减少用户等待时间，提高用户体验")])])])]),v._v(" "),l("h2",{attrs:{id:"_10-网络安全"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_10-网络安全"}},[v._v("#")]),v._v(" 10. 网络安全")]),v._v(" "),l("ul",[l("li",[v._v("XSS(跨站脚本攻击)\n"),l("ul",[l("li",[v._v("XSS攻击介绍： 攻击者通过在页面注入恶意脚本，使之在用户的浏览器上运行")]),v._v(" "),l("li",[v._v("XSS 攻击的几种方式\n"),l("ul",[l("li",[v._v("常见于带有用户提交数据的网站功能，如填写基本信息、论坛发帖、商品评论等；在可输入内容的地方提交如"),l("script",[v._v("alert('XSS')")]),v._v("之类的代码\n"),l("ul",[l("li",[v._v("XSS 的恶意代码存在数据库里，浏览器接收到响应后解析执行，混在其中的恶意代码也被执行")])])]),v._v(" "),l("li",[v._v('用户点击http://xxx/search?keyword=">'),l("code",[v._v("<script>alert('XSS');<\/script>")]),v._v("，前端直接从url中将keyword后的参数取出来，并显示到页面上，但是没有做转义，就造成了XSS攻击。")])])]),v._v(" "),l("li",[v._v("XSS攻击的防范\n"),l("ul",[l("li",[v._v("前端尽量对用户输入内容长度控制、输入内容限制（比如电话号码、邮箱、包括特殊字符的限制）")]),v._v(" "),l("li",[v._v("服务器对前端提交的内容做好必要的转义，避免将恶意代码存储到数据库中，造成存储性xss攻击")]),v._v(" "),l("li",[v._v("前端对服务器返回的数据做好必要的转义，保证显示到页面的内容正常")])])])])]),v._v(" "),l("li",[v._v("csrf 跨站请求伪造\n"),l("ul",[l("li",[v._v("csrf的攻击原理：\n"),l("ul",[l("li",[v._v("诱导受害者进入钓鱼网站，在钓鱼网站中利用你在被攻击网站已登录的凭证（凭证存在cookie中），冒充用户发送恶意请求，这些请求因为携带有用户的登录信息，会被服务器当做正常的请求处理，从而使你的个人隐私泄露或财产损失")])])]),v._v(" "),l("li",[v._v("csrf的攻击过程：\n"),l("ul",[l("li",[v._v("受害者登录A站点，并保留了登录凭证（Cookie）")]),v._v(" "),l("li",[v._v("攻击者诱导受害者访问了站点B")]),v._v(" "),l("li",[v._v("站点B向站点A发送了一个请求，浏览器会默认携带站点A的Cookie信息")]),v._v(" "),l("li",[v._v("站点A接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者发送的请求")]),v._v(" "),l("li",[v._v("站点A以受害者的名义执行了站点B的请求，攻击完成，攻击者在受害者不知情的情况下，冒充受害者完成了攻击")])])]),v._v(" "),l("li",[v._v("csrf的攻击的必要条件：\n"),l("ul",[l("li",[v._v("用户已登录过某网站，并且没有退出，登录信息存储在cookie中（发送请求时，浏览器会自动在请求头上带上要请求域名的cookie）")]),v._v(" "),l("li",[v._v("在不登出A的情况下，访问危险网站B")])])]),v._v(" "),l("li",[v._v("CSRF如何防御\n"),l("ul",[l("li",[v._v("根据攻击的原理可以看出，csrf通常是跨域请求（从钓鱼网站B发送请求网站A的请求），请求头上的Referer或origin字段可以判断请求的来源，如果服务器判断请求的域名不在白名单中，就拒绝对应的请求")]),v._v(" "),l("li",[v._v("添加token验证\n"),l("ul",[l("li",[v._v("CSRF攻击之所以能够成功，是因为用户验证信息都存在cookie中，攻击者可以完全伪造用户的请求。从请求头或请求参数中添加用户的token用来验证用户，如果请求没有或token不对，就拒绝对应的请求")])])]),v._v(" "),l("li",[v._v("验证码\n"),l("ul",[l("li",[v._v("对于转账或支付的环节，强制用户必须与应用进行交互，才能完成最终请求")])])])])])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);