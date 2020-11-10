$(document).ready(function(){
  $("#draftEmails").click(function(){
  draftEmails = JSON.parse(localStorage.getItem("draftEmails"));
  loginUser = JSON.parse(localStorage.getItem("Logindata"));
 var txt="",x;
 let temp=[];
 for (let i = 0; i < draftEmails.length; i++) {
  if (draftEmails[i].senderId == loginUser.id) {
      txt +='<a href="#" class="list-group-item">';
      txt +=  '<div class="checkbox"><label><input type="checkbox"></label></div>';
      txt += '<span class="glyphicon glyphicon-star-empty"></span>';
      txt += '<span class="name" style="min-width: 120px;display:inline-block;">'+ draftEmails[i].senderName +'</span>';
      txt += '<span class="">'+ draftEmails[i].subject +'</span>';
      txt += '<span class="badge">'+draftEmails[i].time + '</span>';
      txt += '<span class="pull-right">';
      txt += '<span class="glyphicon del glyphicon-trash"></span></span>';
      txt += '</a>';
    document.getElementById("inboxlisting").innerHTML = txt;
  }
 }
  });
});
