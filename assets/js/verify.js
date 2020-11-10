$(document).ready(function()
{
  var loginUser = JSON.parse(localStorage.getItem("Logindata"));
  var allUser = JSON.parse(localStorage.getItem("userTable"));
function code_check()
  {
    var code_val= $('#code').val();
    if (loginUser.verification_code != code_val ) {
      $('#code_check').show();
      $('#code_check').html("Please enter valid code ");
      $('#code_check').focus();
      $('#code_check').css("color","red");
      code_err=false;
      return false;
    }
    else{
      $('#code_check').hide();
      return true;
    }
  }
  $('#code_check').hide();
    var code_err = true;

    $('#code').focusout(function()
  {
    code_check();

  });
$("#submit").click(function(e){
 e.preventDefault(); 
  if (code_check()== true) {
    alert("verified successfully");
    window.location = "inbox.html";
  }
   for (var i = 0; i < allUser.length; i++) {
      if (loginUser.id === allUser[i].id) {
        allUser[i].status = "";
        loginUser.status = ""; 
        allUser[i].status += 1;
        loginUser.status += 1;
      }
    }
localStorage.setItem('userTable' , JSON.stringify(allUser));
localStorage.setItem('Logindata' , JSON.stringify(loginUser));
});
$("#resend").click(function(e){
 e.preventDefault(); 
  var code = (Math.floor(1000 + Math.random() * 9000));
  for (var i = 0; i < allUser.length; i++) {
      if (loginUser.id === allUser[i].id) {
        allUser[i].verification_code="";
        loginUser.verification_code="";
        allUser[i].verification_code += code;
        loginUser.verification_code += code;
      }
    }
localStorage.setItem('userTable' , JSON.stringify(allUser));
localStorage.setItem('Logindata' , JSON.stringify(loginUser));
 alert("Verification code : "+ " " + loginUser.verification_code + " " +"copy it somewhere before exit!! ");
});

});