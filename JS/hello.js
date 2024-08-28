var num = 10;
console.log(num);

// alert("弹出框");
document.write("输出到页面<br>");

console.log(10, typeof 10);
console.log("123", typeof "123");
console.log("true", typeof true);

console.log("==", 10 == "10");
console.log("===", 10 === "10");
console.log("!=", 10 != "10");
console.log("!==", 10 !== "10");

var day = 3;
switch (day) {
  case 1:
    console.log("周一");
    break;
  case 2:
    console.log("周二");
    break;
  case 3:
    console.log("周三");
    break;
  case 4:
    console.log("周四");
    break;
  case 5:
    console.log("周五");
    break;
  case 6:
    console.log("周六");
    break;
  default:
    console.log("周日");
    break;
}

var x = 11;
if (x % 2 === 0) {
  console.log("偶数");
} else {
  console.log("奇数");
}

var result = x % 2 === 0 ? console.log("偶数") : console.log("奇数");
console.log(result);

var j = 0;
for (var i = 1; i <= 10; i++) {
  j += i;
  console.log(i);
}
console.log(j);

for (var i = 1; i < 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(i, "*", j, "=", i * j, "\t", " ");
  }
  document.write("<br>");
}

var str1 = '双引号嵌套"双引号"';
var str2 = '单引号嵌套"单引号"';
document.write(str1, "<br>", str1.length, "<br>", str2, "<br>");

// 返回第i个字符
document.write(str1.charAt(3), "<br>");
//如果值为负数，或者超出长度charAt()返回空字符串

//字符串连接
var result = str1.concat(str2);
document.write(result, "<br>");

//字符串截取
result = str1.substring(0, 5);
document.write(result, "<br>");

result = str1.substr(3, str1.length - 3);
document.write(result, "<br>");
result = str1.substr(-5);
document.write(result, "<br>");

//字符串匹配
document.write(str1.indexOf("引"), "<br>");
document.write(str1.indexOf("引", 2), "<br>");

//字符串去除空格
str3 = "  \ttrim\n  ";
console.log(str3.trim(), "<br>");
console.log(str3.trimStart(), "<br>");
console.log(str3.trimEnd(), "<br>");

//字符串分割
console.log(str1.split("引"));
console.log(str1.split(""));
console.log(str1.split("", 5));

//数组
var arr = ["11", "22", "33"];
console.log(arr);
arr[0] = 111;
arr[1] = 222;
arr[2] = 333;
console.log(arr, arr.length);
arr = [
  [111, 111],
  [222, 222],
];
console.log(arr);
console.log(arr[0][0], arr[1]);

var arr = ["11", "22", "33"];
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i], "<br>");
}

//判断数组
console.log(Array.isArray(arr));

//数组(尾删、尾插)
arr.push("444", 100, true);
console.log(arr);

arr.pop();
console.log(arr);

//数组头删/头插
arr.shift();
console.log(arr);
var item;
while ((item = arr.shift())) {}
console.log(arr);

var arr = ["11", "22", "33"];
arr.unshift("00");
console.log(arr);

console.log(arr.join()); //00,11,22,33
console.log(arr.join("")); //00112233
console.log(arr.join("|")); //00|11|22|33

//数组合并
console.log(arr.concat(arr));

//数组倒置
console.log(arr.reverse());

//数组查找
console.log(arr.indexOf("22"));
console.log(arr.indexOf("22", 2));

function firster() {
  console.log("first function");
}
firster();

//对象
var usr = {
  age: 18,
  name: "wei",
  job: ["txt", "doc", null],
  flag: true,
  getname: function () {
    console.log("wei");
  },
  container: {
    start: "web",
    end: ["java", "python"],
  },
};

//Math
console.log(Math.abs(-100));

console.log(Math.max(-100, 1, 4, 345, 53, 3));
console.log(Math.min(-100, 4, 54, 23, 5, 34));

console.log(Math.floor(10.3)); //向下取整
console.log(Math.ceil(10.3)); //向上取整

//随机数0~1
console.log(Math.random());

//时间
console.log(Date.now());

console.log(new Date(1721612426606));
console.log(new Date());
console.log(new Date().getDate());          //一个日期
console.log(new Date().getDay());           //星期
console.log(new Date().getFullYear());      //年份
console.log(new Date().getMonth() + 1);         //月份
console.log(new Date().getHours());         //小时


function time() {
  var today = new Date();
  var endday = new Date(today.getFullYear(),12,15,23,59,59,999);
  var msper = 24*60*60*1000
  var yuday = (endday.getTime()-today.getTime())/msper
  console.log(yuday);
}
time()


console.log(document);


