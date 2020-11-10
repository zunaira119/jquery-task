 $(document).ready(function(){
  var emails  = [];
  var loginUser =[];
  var allUsers = [];
  var recieverId;
 $("#send").click(function(e){
 e.preventDefault(); 
loginUser = JSON.parse(localStorage.getItem("Logindata"));
 allUsers = JSON.parse(localStorage.getItem("userTable"));
 var reciever = $('#to').val();
 var d = new Date();
var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email == reciever) {
       recieverId = allUsers[i].id;
       emails = {
        id: new Date().getUTCMilliseconds(),
        senderId:loginUser.id,
        senderName:loginUser.firstName,
        senderEmail:loginUser.email,
        recieverId:allUsers[i].id,
        recieverEmail:$('#to').val(),
        ccEmail:$('#cc').val(),
        bccEmail:$('#bcc').val(),
        subject:$('#subject').val(),
        message:$('#email_message').val(),
        file:$('#file').val(),
        time:strDate,
        del:0,
        stare:0
       }

      }
  }
  var oldemails = JSON.parse(localStorage.getItem("emailTable")) || [];
  oldemails.push(emails);
  localStorage.setItem('emailTable' , JSON.stringify(oldemails));
  alert("email sent"); 
  window.location = "inbox.html";
  });
$("#draft").click(function(e){
 e.preventDefault(); 
loginUser = JSON.parse(localStorage.getItem("Logindata"));
 allUsers = JSON.parse(localStorage.getItem("userTable"));
 var reciever = $('#to').val();
 var d = new Date();
var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email == reciever) {
       recieverId = allUsers[i].id;
       emails = {
        id: new Date().getUTCMilliseconds(),
        senderId:loginUser.id,
        senderName:loginUser.firstName,
        senderEmail:loginUser.email,
        recieverId:allUsers[i].id,
        recieverEmail:$('#to').val(),
        ccEmail:$('#cc').val(),
        bccEmail:$('#bcc').val(),
        subject:$('#subject').val(),
        message:$('#email_message').val(),
        file:$('#file').val(),
        time:strDate,
        del:0,
        stare:0
       }

      }
  }
  var draftemails = JSON.parse(localStorage.getItem("draftEmails")) || [];
  draftemails.push(emails);
  localStorage.setItem('draftEmails' , JSON.stringify(draftemails));
  alert("email sent to draft"); 
  window.location = "inbox.html";
  });
$('#file').bind('change', function() {
var file_size = (this.files[0].size/1024/1024).toFixed(2);
if (file_size > 5) {
  $(this).val("");
  alert("Max size exceeded");
  return false
}
// alert('This file size is: ' + (this.files[0].size/1024/1024).toFixed(2) + " MB");

});
});





