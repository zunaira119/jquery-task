$(document).ready(function(){
var loginUser = [];
 loginUser = JSON.parse(localStorage.getItem("Logindata"));
$( window ).on("load", function() {
var txt=""; 
txt += '<div class="profile-info">'
txt += '<div class="photo"><p>PHOTO</p><p class="text1">A photo helps to personalize your account</p>';
txt += '<img src="assets/images/1.jpg" class="img2"> </div><hr>';
txt += '<div class="photo"><p>NAME</p><p class="text1">' + loginUser.firstName + " " + loginUser.lastName + '</p>';
txt += '</div><hr>';
txt += '<div class="photo"><p>BIRTHDAY</p><p class="text1">' + loginUser.dob+ '</p>';
txt += '</div><hr>';
txt += '<div class="photo"><p>GENDER</p><p class="text1">' + loginUser.gender+ '</p>';
txt += '</div><hr>';
txt += '<div class="photo"><p>PASSWORD</p><p class="text1">' + loginUser.password+ '</p>';
txt += '</div></div>';
txt += '<div class="profile-info"><h3 class="p1">Contact Info</h3>';
txt += '<div class="photo"><p>EMAIL</p><p class="text1">' + loginUser.email + '</p>';
txt += '</div><hr>';
txt += '<div class="photo"><p>PHONE</p><p class="text1">' + loginUser.phone + '</p>';
txt += '</div></div>';
  document.getElementById("profile-info").innerHTML = txt;   
});
$('#profile_image').click(function() {
var loginUser = [];
loginUser = JSON.parse(localStorage.getItem("Logindata"));
var txt=""; 
console.log(loginUser.id);
txt += '<img src="assets/images/1.jpg" class="img1">';
txt += '<h3  class="h">' +loginUser.firstName + " " + loginUser.lastName+'</h3>';
txt +=' <p class="h">' + loginUser.email + '</p>';

document.getElementById("profile").innerHTML = txt;
});

$('#signout').click(function() {
    sessionStorage.clear();
    localStorage.removeItem('Logindata');
    window.location = "signin.html";
});

$('#profile').click(function() {

    window.location = "profile.html";

});

});