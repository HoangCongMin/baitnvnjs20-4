var msg='<h2>brower window</h2><p>width:'+ window.innerwidth +'</p>';
msg +='<p>height:'+window.innerHeight+'</p>';
msg +='<h2>history</h2><p>items:'+window.history.length+'</p>';
msg +='<h2>screen</h2><p>width:'+window.screen.width+'</p>';
msg +='<p>height:'+window.screen.height+'</p>';

var el =document.getElementById('info');
el.innerHTML=msg;
aler('current page:'+ window.location);
