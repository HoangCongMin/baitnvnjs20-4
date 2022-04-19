var hotel={
    name: 'quay',
    rooms: 40,
    booked:25,
    checkavailability: function (){
        return this.rooms-this.booked;
    }
};
var elname=document.getElementById('hotelName');
elname.textContent=hotel.name;
var elrooms=document.getElementById('room');
elrooms.textContent=hotel.checkavailability()