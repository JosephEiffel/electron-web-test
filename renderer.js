const $ = require('jquery');
var webview = document.querySelector('webview');

aa = function() {
     var loadstart = function() {
       console.log("1");
     }
     var loadstop = function() {
       console.log("2");
     }
     webview.addEventListener("did-start-loading", loadstart);
     webview.addEventListener("did-stop-loading", loadstop);
}

webview.addEventListener("dom-ready", function() {
  webview.openDevTools();
});

//商议好互相传值的json字符串格式   '{"method": "add","param": 1}'
webview.addEventListener('console-message', function(e) {
  console.log('Number is received from the webpage:', e.message);
  var info = e.message;
  console.log(info);
  var infostr = JSON.parse(info); //由JSON字符串转换为JSON对象
  console.log(infostr);
  var method=infostr["method"];
  console.log(method);
  var param=infostr["param"];
  console.log(param);
  if(method==="add"){
    var num = param*1+20;
    console.log('Number is send from the webpage:'+num);
    var str = "hmptestReceive("+num+")";
    console.log('Number is send from the webpage:'+str);
    webview.executeJavaScript(str);
  }
});
