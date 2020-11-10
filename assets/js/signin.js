$(document).ready(function(){
  var myarray = [];
  var olddata =[];
 $("#submit").click(function(e){
 e.preventDefault(); 
 var email= $('#email').val();
 var password=$('#password').val();
  olddata = JSON.parse(localStorage.getItem("userTable"));
  for(var i=0; i<olddata.length; i++)
  {
    if (email == olddata[i].email && password == olddata[i].password) {
        localStorage.setItem('Logindata' , JSON.stringify(olddata[i]));
        sessionStorage.setItem(olddata[i].email,olddata[i].password );
        if (olddata[i].status == 0) {
        alert("Verification code : "+ " " + olddata[i].verification_code + " " +"copy it somewhere before exit!! ");
        window.location = "verify.html";
      }
      else
      {
        window.location = "inbox.html";

      }
    }
  }
  console.log(olddata);
  });
});