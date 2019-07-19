
var dd = parseInt(prompt("enter the day:"));
if ((dd < 0)||(dd > 31)){
    alert("This day is invalid");
}
var mm = parseInt(prompt("enter the month:"));
if ((mm < 0) || (mm > 12)) {
    alert("This month is invalid");
}
var yy = parseInt(prompt("enter the year:"));
if(yy < 1900){
    alert("you are older!");
}
var cc = parseInt(prompt("enter the century:"));
var gender = parseInt(prompt("enter your gender"));

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

if ((day ==0) || (gender == 'male')) {
    alert("your name is Kwasi");
}
else
if ((day ==1) || (gender == 'male')) {
    alert("your name is Kwadwo");
}
else
if ((day ==2) || (gender == 'male')) {
    alert("your name is Kwabena");
}
else
if ((day ==3) || (gender == 'male')) {
    alert("your name is Kwaku");
}
else
if ((day ==4) || (gender == 'male')) {
    alert("your name is Yaw");
}
else
if ((day ==5) || (gender == 'male')) {
    alert("your name is Kofi");
}
else
if ((day ==6) || (gender == 'male')) {
    alert("your name is Kwame");
}
else
if ((day ==0 && gender == 'female')){
    alert("your name is Akosua");
}
else
if ((day ==1) || (gender == 'female')) {
    alert("your name is Adwoa");
}
else
if ((day ==2) || (gender == 'female')) {
    alert("your name is Abenaa");
}
else
if ((day ==3) || (gender == 'female')) {
    alert("your name is Akua");
}
else
if ((day ==4) || (gender == 'female')) {
    alert("your name is Yaa");
}
else
if ((day ==5) || (gender == 'female')) {
    alert("your name is Afua");
}
else
if ((day ==6) || (gender == 'female')) {
    alert("your name is Ama");
}
else{
    alert("Oops!! This is invalid day");
}
