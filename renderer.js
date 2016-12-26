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

webview.addEventListener('console-message', function(e) {
  console.log('Number is received from the webpage:', e.message);
  var num = e.message*1+20;
  console.log('Number is send from the webpage:'+num);
  var str = "hmptestReceive("+num+")";
  // console.log('Number is send from the webpage:'+str);
  webview.executeJavaScript(str);
});
