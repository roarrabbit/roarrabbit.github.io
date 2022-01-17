(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1147:function(a,n,t){"use strict";t.r(n);var s=t(1),r=Object(s.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("二进制-八进制-十进制-十六进制")]),a._v(" "),t("h1",{attrs:{id:"二进制转十进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制转十进制"}},[a._v("#")]),a._v(" 二进制转十进制")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("- 使用加减法，对一个二进制的数进行换算加减\n- 二进制的 `11111111` 其实对应着十进制的 `128 64 32 16 8 4 2 1 0` 只需要按这个顺序依次加减去即可\n- `11000001` =128+64+1即十进制193\n")])])]),t("h1",{attrs:{id:"十进制转二进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十进制转二进制"}},[a._v("#")]),a._v(" 十进制转二进制")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("- 使用加减法，对一个十进制的数进行递减\n    - 二进制的 `11111111` 其实对应着十进制的 `128 64 32 16 8 4 2 1 0` 只需要按这个顺序依次加减去即可\n    - 129=128+1即二进制 `10000001`\n")])])]),t("h1",{attrs:{id:"二进制转八进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制转八进制"}},[a._v("#")]),a._v(" 二进制转八进制")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("- 从右往左，3个一组，不足3个补0，使用加减法，对一个二进制的数换算进行加减，然后将每组的数连接组合在一起\n- 三个一组的二进制的 `111` 其实对应着八进制的 `4 2 1` 只需要按照这个顺序依次加减法即可\n- `10111`\n    - `010` = $0*2^2+1*2^1+0*2^0$ = 2\n    - `111` = $1*2^2+1*2^1+1*2^0$ = 7\n    - 将两连接组组合在一起即 `10111` =27\n- 【方法2】计算方法\n    - 从右往左，3个一组，不足3个补0，将每组里的数的位置当作次方（从0开始），让每个数与2的次方相乘，然后将每个组得到的数将其合在一起即可（建议看示例）注意合起来的数，而不是相加\n    - `1011`\n        - `001` = $0*2^2+0*2^1+1*2^0$=0+0+1=1\n        - `011` = $0*2^2+1*2^1+1*2^0$=0+2+1=3\n        - 将两连接组组合在一起=13，即 `1011` =13\n")])])]),t("h1",{attrs:{id:"八进制转二进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八进制转二进制"}},[a._v("#")]),a._v(" 八进制转二进制")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("- 先将八进制拆分为每个数字，然后使用加减法，对八进制的数进行递减，然后连接组合起来\n- 三个一组的二进制的 `111` 其实对应着八进制的 `4 2 1` 只需要按照这个顺序依次加减法即可\n- 27\n    - 2 = $0*2^2+1*2^1+0*2^0$ = `010`\n    - 7 =4+2+1 = $1*2^2+1*2^1+1*2^0$ = `111`\n    - 将两连接组组合在一起即27= `10111`\n")])])]),t("h1",{attrs:{id:"二进制转十六进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制转十六进制"}},[a._v("#")]),a._v(" 二进制转十六进制")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("- 从右往左，4个一组，不足4个补0，使用加减法，对一个二进制的数换算进行加减，然后将每组的数连接组合在一起\n- 四个一组的二进制的 `1111` 其实对应着十六进制的 `8 4 2 1` 只需要按照这个顺序依次加减法即可\n- 9F\n    - 9 = 8+1 = $1*2^3+0*2^2+0*2^1+1*2^0$ = `1001`\n    - F = 8+4+2+1 = $1*2^3+1*2^2+1*2^1+1*2^0$ = `1111`\n    - 将两连接组组合在一起即 9F= `1001 1111`\n")])])]),t("h1",{attrs:{id:"十六进制转二进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十六进制转二进制"}},[a._v("#")]),a._v(" 十六进制转二进制")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("- 先将十六进制拆分为每个数字，然后使用加减法，对十六进制的数进行递减，然后连接组合起来\n- 四个一组的二进制的 `1111` 其实对应着十六进制的 `8 4 2 1` 只需要按照这个顺序依次加减法即可\n- `1001 1111`\n    - `1001` = 8+1 = $1*2^3+0*2^2+0*2^1+1*2^0$ = 9\n    - `1111` = 8+4+2+1 = $1*2^3+1*2^2+1*2^1+1*2^0$ =F\n    - 将两连接组组合在一起即 `1001 1111` = 9F\n")])])]),t("h1",{attrs:{id:"二进制、八进制、十六进制在赋值时的表示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制、八进制、十六进制在赋值时的表示"}},[a._v("#")]),a._v(" 二进制、八进制、十六进制在赋值时的表示")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('```c\n#include <stdio.h>\nint main()\n{\n    short a = 0b1010110;  //二进制数字\n    int b = 02713;  //八进制数字\n    long c = 0X1DAB83;  //十六进制数字\n   \n    printf("a=%ho, b=%o, c=%lo\\n", a, b, c);  //以八进制形似输出\n    printf("a=%hd, b=%d, c=%ld\\n", a, b, c);  //以十进制形式输出\n    printf("a=%hx, b=%x, c=%lx\\n", a, b, c);  //以十六进制形式输出（字母小写）\n    printf("a=%hX, b=%X, c=%lX\\n", a, b, c);  //以十六进制形式输出（字母大写）\n    return 0;\n}\n```')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);