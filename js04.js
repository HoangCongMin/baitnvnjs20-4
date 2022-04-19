var hotel={
    name :'park',
    rooms:120,
    booked: 77,
    checkavailability: function () {
        return this.rooms-this.booked;

    }
};
var elname=document.getElementById('hotelName');
elname.textContent=hotel.name;
var elrooms=document.getElementById('rooms');
elrooms.textContent=hotel.checkavailability();
