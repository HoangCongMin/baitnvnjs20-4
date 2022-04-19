(function alo (){
    var hotel={
        name:'prak',
        roomRate:240,
        discount:15,
        offerprice: function(){
          var offerRate= this.roomRate*((100-this.discount)/100) ;
          return offerRate;
        }
    };
var hotelname,roomrate,specialRate;
hotelname=document.getElementById('hotelName');
roomrate=document.getElementById('roomRate');
specialrate=document.getElementById('specialRate');

hotelname.textContent=hotel.name;
roomrate.textContent='$'+hotel.roomRate.toFixed(2);
specialRate.textContent='$'+hotel.offerprice();


var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
    var weekFromToday, day, date,month,year,daynames,monthName;
    weedFromtoday= new Date(today. getime()+7*24*60*60*1000);
    daynames=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    monthName=['january','february','march','april','may','june','july','august','september','october','november','december'];
    day=daynames[weekFromToday.getDay()];
    date =weekFromToday.getDate();
    month=monthName[weekFromToday.getMonth()];
    year=weekFromToday.getFullYear();
    expiryMsg='offer expores next';
    expiryMsg+=day+'<br/>('+date+''+month+''+year+')';
    return expiryMsg;
}
today= new Date();
elEnds=document.getElementById('offerEnds');
elEnds.innerHTML=offerExpires(today);
}());
