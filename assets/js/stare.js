$(document).ready(function(){
  $("#stareEmails").click(function(){
 allEmails = JSON.parse(localStorage.getItem("emailTable"));
 var txt="",x;
 let temp1=[];
 for (let i = 0; i < allEmails.length; i++) {
  if (allEmails[i].stare == 1) {
      txt +='<a href="#" class="list-group-item">';
      txt +=  '<div class="checkbox"><label><input type="checkbox"></label></div>';
      txt += '<span style="color:#FFFF00;" class="glyphicon glyphicon-star"></span>';
      txt += '<span class="name" style="min-width: 120px;display:inline-block;">'+ allEmails[i].senderName +'</span>';
      txt += '<span class="">'+ allEmails[i].subject +'</span>';
      txt += '<span class="badge">'+allEmails[i].time + '</span>';
      txt += '<span class="pull-right">';
      txt += '<span class="glyphicon del glyphicon-trash"></span></span>';
      txt += '</a>';
    document.getElementById("inboxlisting").innerHTML = txt;
    temp1.push(allEmails[i]);
  }
  localStorage.setItem('staredata' , JSON.stringify(temp1));
 }
  });
});
