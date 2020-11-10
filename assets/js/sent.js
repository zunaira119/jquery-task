$(document).ready(function(){
  $("#sentEmails").click(function(){
  loginUser = JSON.parse(localStorage.getItem("Logindata"));
 allEmails = JSON.parse(localStorage.getItem("emailTable"));
 var txt="",x;
 let temp=[];
 for (let i = 0; i < allEmails.length; i++) {
  if (allEmails[i].senderId == loginUser.id) {
      txt +='<a href="#" class="list-group-item">';
      txt +=  '<div class="checkbox"><label><input type="checkbox"></label></div>';
      txt += '<span class="glyphicon glyphicon-star-empty"></span>';
      txt += '<span class="name" style="min-width: 120px;display:inline-block;">'+ allEmails[i].recieverEmail +'</span>&nbsp;&nbsp;';
      txt += '<span class="">'+ allEmails[i].subject +'</span>';
      txt += '<span class="badge">'+allEmails[i].time + '</span>';
      txt += '<span class="pull-right">';
      txt += '<span class="glyphicon del glyphicon-trash"></span></span>';
      txt += '</a>';
    document.getElementById("inboxlisting").innerHTML = txt;
    temp.push(allEmails[i]);
  }
  localStorage.setItem('sentdata' , JSON.stringify(temp));
 }
  });
});
