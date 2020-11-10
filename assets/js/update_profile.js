$(document).ready(function(){
$( window ).on("load", function() {
	var loginUser = [];
 loginUser = JSON.parse(localStorage.getItem("Logindata"));
    document.getElementById("fname").value = loginUser.firstName;
    document.getElementById("lname").value = loginUser.lastName;
    document.getElementById("email").value = loginUser.email;
    document.getElementById("phone").value = loginUser.phone;
    document.getElementById("dob").value = loginUser.dob;
    document.getElementById("gender").value = loginUser.gender;  
});
var loginUser =[];
  var allUser = [];
 $("#profile_update").click(function(e){
 e.preventDefault(); 
  allUser = JSON.parse(localStorage.getItem("userTable"));
  loginUser= JSON.parse(localStorage.getItem("Logindata"));
  for (var i = 0; i < allUser.length; i++) {
      if (loginUser.id === allUser[i].id) {
        allUser[i].firstName="";
        allUser[i].lastName="";
        allUser[i].email="";
        allUser[i].dob="";
        allUser[i].phone="";
        allUser[i].gender="";
        loginUser.firstName="";
        loginUser.lastName="";
        loginUser.email="";
        loginUser.dob="";
        loginUser.phone="";
        loginUser.gender="";

        allUser[i].firstName += $('#fname').val();
        allUser[i].lastName +=$('#lname').val();
        allUser[i].email +=$('#email').val();
         allUser[i].phone +=$('#phone').val();
          allUser[i].dob +=$('#dob').val();
          allUser[i].gender +=$('#gender').val();
        loginUser.firstName += $('#fname').val();
        loginUser.lastName +=$('#lname').val();
        loginUser.email += $('#email').val();
        loginUser.phone += $('#phone').val();
        loginUser.dob += $('#dob').val();
        loginUser.gender += $('#gender').val();
      }
  }
  localStorage.setItem('userTable' , JSON.stringify(allUser));
localStorage.setItem('Logindata' , JSON.stringify(loginUser));
 alert("profile updated successfully"); 
  // window.location = "file:///Users/zunairajaved/Desktop/projects/task3/signin.html";
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
});