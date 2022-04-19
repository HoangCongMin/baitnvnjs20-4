var hotel={
    name: 'park',
    rooms:120,
    booked:70
};
hotel.gym =true;
hotel.pool=false;
delete hotel.booked;

var elname =document.getElementById('hotelName');
elname.textContent=hotel.name;
var elpool=document.getElementById('pool');
elpool.textContent=hotel.pool;

var elgym=document.getElementById('gym');
elgym.textContent=hotel.gym;