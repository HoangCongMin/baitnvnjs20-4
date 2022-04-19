var saying='home sweet home';
var msg='<h2>length</h2><p>'+saying.length+'</p>';
msg+='<h2>uppercase</h2><p>'+saying.toUpperCase()+'</P>';
msg+='<h2>lowcase</h2><p>'+saying.toLowerCase()+'</P>';
msg+='<h2>character index:12</h2><p>'+saying.charAt(12)+'</P>';
msg+='<h2>first ee</h2><p>'+saying.indexOf('ee')+'</P>';
msg+='<h2>last e</h2><p>'+saying.lastIndexOf('e')+'</P>';
msg+='<h2>character index:8-14</h2><p>'+saying.substring(8,14)+'</P>';
msg+='<h2>replace</h2><p>'+saying.replace('me','w')+'</P>';

var el=document.getElementById('info');
el.innerHTML=msg;