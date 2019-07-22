
function akanName(){
var names=document.getElementById("yourname").value;
var dd=document.getElementById("dday").value;
var mm=document.getElementById("mmonth").value;
var yy=document.getElementById("yyear").value;
var cc=document.getElementById("ccentury").value;
var gender=document.getElementById("yourgender").value;



if ((dd < 0)||(dd > 31)){
    document.getElementById("p1").innerHTML="This day is invalid";
}
if ((mm < 0) || (mm > 12)) {
    document.getElementById("p1").innerHTML="This month is invalid";
}
if(yy < 1900){
    document.getElementById("p1").innerHTML="you are older!";
}

var days = new Array(10);
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";

var dob=(((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)% 7;
var day = dob.toFixed(0);

if ((day ==0) && (gender == 'male')) {
    document.getElementById("p1").innerHTML="your name is Kwasi";
}
else
if ((day ==1) && (gender == 'male')) {
    document.getElementById("p1").innerHTML="your name is Kwadwo";
}
else
if ((day ==2) && (gender == 'male')) {
    document.getElementById("p1").innerHTML="your name is Kwabena";
}
else
if ((day ==3) && (gender == 'male')) {
    document.getElementById("p1").innerHTML="your name is Kwaku";
}
else
if ((day ==4) && (gender == 'male')) {
    document.getElementById("p1").innerHTML="your name is Yaw";
}
else
if ((day ==5) && (gender == 'male')) {
    document.getElementById("p1").innerHTML="your name is Kofi";
}
else
if ((day ==6) && (gender == 'male')) {
    document.getElementById("p1").innerHTML="your name is Kwame";
}
else
if ((day ==0 && gender == 'female')){
    document.getElementById("p1").innerHTML="your name is Akosua";
}
else
if ((day ==1) && (gender == 'female')) {
    document.getElementById("p1").innerHTML="your name is Adwoa";
}
else
if ((day ==2) && (gender == 'female')) {
    document.getElementById("p1").innerHTML="your name is Abenaa";
}
else
if ((day ==3) && (gender == 'female')) {
    document.getElementById("p1").innerHTML="your name is Akua";
}
else
if ((day ==4) && (gender == 'female')) {
    document.getElementById("p1").innerHTML="your name is Yaa";
}
else
if ((day ==5) && (gender == 'female')) {
    document.getElementById("p1").innerHTML="your name is Afua";
}
else
if ((day ==6) && (gender == 'female')) {
    document.getElementById("p1").innerHTML="your name is Ama";
}
else{
    document.getElementById("p1").innerHTML="Oops!! This is invalid day";
}


}