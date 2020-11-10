$(document).ready(function()
{
 var  allUser = JSON.parse(localStorage.getItem("userTable"));
 var loginUser= JSON.parse(localStorage.getItem("Logindata"));
 var password = loginUser.password;
  function old_password_check()
  {
     // alert(password);
    var password_val = $('#opassword').val();
    if (password != password_val) {
      $('#oldpassword_check').show();
      $('#oldpassword_check').html("mismatch old password ");
      $('#oldpassword_check').focus();
      $('#oldpassword_check').css("color","red");
      oldpassword_err=false;
      return false;
    }
    else{
      $('#oldpassword_check').hide();
      return true;
    }
  }
   function new_password_check()
  {
    var password_val= $('#npassword').val();
    if (password_val.length == '' || password_val.length < 5 ) {
      $('#newpassword_check').show();
      $('#newpassword_check').html("Please enter password ");
      $('#newpassword_check').focus();
      $('#newpassword_check').css("color","red");
      newpassword_err=false;
      return false;
    }
    else{
      $('#newpassword_check').hide();
      return true;
    }
  }
  function confirm_password_check()
  {
    var confirm_password_val= $('#cpassword').val();
        var password_val= $('#npassword').val();
    if (confirm_password_val != password_val ) {

      $('#confirmpassword_check').show();
      $('#confirmpassword_check').html("password mismatch ");
      $('#confirmpassword_check').focus();
      $('#confirmpassword_check').css("color","red");
      confirmpassword_err=false;
      return false;
    }
    else{
      $('#confirmpassword_check').hide();
      return true;
    }
  }
  $('#oldpassword_check').hide();
  $('#newpassword_check').hide();
  $('#confirmpassword_check').hide();

  
  var oldpassword_err = true;
   var newpassword_err = true;
  var confirmpassword_err= true;
  $('#opassword').focusout(function()
  {
    old_password_check();

  });
  $('#npassword').focusout(function()
  {
    new_password_check();

  });
  $('#cpassword').focusout(function()
  {
    confirm_password_check();

  });
 $("#update").click(function(e){
  // alert('hello');
 e.preventDefault(); 
    old_password_check();
    new_password_check();
    confirm_password_check();
    if ((old_password_check() == true) || (new_password_check() == true)|| (confirm_password_check() == true)) {
  
  for (var i = 0; i < allUser.length; i++) {
      if (loginUser.id === allUser[i].id) {
        allUser[i].password="";
        allUser[i].confirm_password="";
        loginUser.password="";
        loginUser.confirm_password="";
        allUser[i].password += $('#npassword').val();
        allUser[i].confirm_password +=$('#cpassword').val();
        loginUser.password += $('#npassword').val();
        loginUser.confirm_password +=$('#cpassword').val();
      }
  }
  localStorage.setItem('userTable' , JSON.stringify(allUser));
localStorage.setItem('Logindata' , JSON.stringify(loginUser));

 alert("password updated successfully"); 
  // window.location = "file:///Users/zunairajaved/Desktop/projects/task3/signin.html";
}
else{
  return false;
}
  });
 $('#signout').click(function() {
    sessionStorage.clear();
    localStorage.removeItem('Logindata');
    window.location = "signin.html";
});
});