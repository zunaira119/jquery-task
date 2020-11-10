function fname_check()
  {
    var fname_val = $('#fname').val();
    if (fname_val.length == '') {
      $('#fname_check').show();
      $('#fname_check').html("Please enter first name");
      $('#fname_check').focus();
      $('#fname_check').css("color","red");
      fname_err=false;
      return false;
    }
    else{
      $('#fname_check').hide();
      return true;
    }
  }
  function lname_check()
  {
    var lname_val = $('#lname').val();
    if (lname_val.length == '') {
      $('#lname_check').show();
      $('#lname_check').html("Please enter last name");
      $('#lname_check').focus();
      $('#lname_check').css("color","red");
      lname_err=false;
      return false;
    }
    else{
      $('#lname_check').hide();
      return true;
    }
  }
  function email_check()
  {
    var email_val = $('#email').val();
    if(IsEmail(email_val)==false || email_val.length == ''){
                $('#email_check').show();
                $('#email_check').html("Please enter valid email");
                 $('#email_check').focus();
                $('#email_check').css("color","red");
                 email_err=false;
                return false;
            }
            else{
               $('#email_check').hide();
               return true;

            }
  }
  function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
           return false;
        }else{
           return true;
        }
      }

  function password_check()
  {
    var password_val= $('#password').val();
    if (password_val.length == '' || password_val.length < 5 ) {
      $('#password_check').show();
      $('#password_check').html("Please enter password ");
      $('#password_check').focus();
      $('#password_check').css("color","red");
      password_err=false;
      return false;
    }
    else{
      $('#password_check').hide();
      return true;
    }
  }
  function confirm_password_check()
  {
    var confirm_password_val= $('#confirm_password').val();
        var password_val= $('#password').val();
    if (confirm_password_val != password_val ) {

      $('#confirm_password_check').show();
      $('#confirm_password_check').html("password mismatch ");
      $('#confirm_password_check').focus();
      $('#confirm_password_check').css("color","red");
      confirm_password_err=false;
      return false;
    }
    else{
      $('#confirm_password_check').hide();
      return true;
    }
  }


$(document).ready(function()
{
  $('#fname_check').hide();
  $('#lname_check').hide();
  $('#email_check').hide();
  $('#password_check').hide();
  $('#confirm_password_check').hide();

  var fname_err = true;
  var lname_err = true;
  var email_err= true;
  var password_err = true;
  var confirm_password_err= true;

  $('#fname').focusout(function()
  {
    fname_check();

  });
  $('#lname').focusout(function()
  {
    lname_check();

  });
  $('#email').focusout(function()
  {
    email_check();

  });
  $('#password').focusout(function()
  {
    password_check();

  });
  $('#confirm_password').focusout(function()
  {
    confirm_password_check();

  });
});

$(document).ready(function(){
  var olddata=[];
 $("#submit").click(function(e){
 e.preventDefault(); 
let myarray = {
        id: new Date().getUTCMilliseconds(),
        firstName:$('#fname').val(),
        lastName:$('#lname').val(),
        email:$('#email').val(),
        password:$('#password').val(),
        confirm_password:$('#confirm_password').val(),
        verification_code:(Math.floor(1000 + Math.random() * 9000)),
        status:0

    }
    fname_check();
    lname_check();
    email_check();
    password_check();
    confirm_password_check();
    if ((fname_check() == true) && (lname_check() == true) && (email_check() == true) && (password_check() == true) && (confirm_password_check() == true) ) {
  var olddata = JSON.parse(localStorage.getItem("userTable")) || [];
  olddata.push(myarray);
  console.log(olddata);
  localStorage.setItem('userTable' , JSON.stringify(olddata));
 alert("register successfully"); 
  window.location = "signin.html";
}
else{
  return false;
}
  });
});