function hotel(name, rooms, booked) {
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkValidity= function(){
        return this.rooms-this.booked;
    };

};
var quayhotel= new hotel('quay',40,25);
var parkhotel= new hotel('prack',120 ,77);

var details1 =quayhotel.name+'rooms';
details1+= quayhotel.checkValidity();
var elhotel1=document.getElementById('hotel1');
elhotel1.textContent=details1;

var details2=parkhotel.name+'rooms:';
details2+=parkhotel.checkValidity();
var elhotel2=document.getElementById('hotel2');
elhotel2.textContent=details2;