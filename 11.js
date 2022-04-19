var originalnumber=10.23456;
var msg='<h2>original number</h2><p>'+originalnumber+'</>p>';
msg+='<h2>3 decimal places</h2><p>'+originalnumber.toFixed(3)+'</p>';
msg+='<h2>3 digit</h2><p>'+originalnumber.toPrecision(3)+'</p>';
var el=document.getElementById('info');
el.innerHTML=msg;