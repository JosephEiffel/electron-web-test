# webview  webpage 互相传值
*http://localhost:8080/login.jsp*

写以下js

****

	<a onclick="hmptestSend(11">test</a>
	<script>
	function hmptestSend(num){
      alert('Number is send from the webview:'+num);
	    console.log(num);
	}
	function hmptestReceive(num){
	    alert('Number is received from the webview:'+num);
	}
	</script>


webpage 将 11打印到控制台，webview监听到控制台的11   
将11 + 20  ，返回给webpage
