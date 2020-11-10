$(document).ready(function(){
$( window ).on("load", function() {
var loginUser = JSON.parse(localStorage.getItem("Logindata"));
var allEmails = JSON.parse(localStorage.getItem("emailTable"));
 var txt="",x;
 let nex=[];
 let nex1=[];
 for (let i = 0; i < allEmails.length; i++) {
  if (allEmails[i].recieverId === loginUser.id) {
    nex.push(allEmails[i]);     
  }
      localStorage.setItem('recieveddata' , JSON.stringify(nex));
 }
 var inbox = JSON.parse(localStorage.getItem("recieveddata"));
 for (let i = 0; i < inbox.length; i++) {
   txt +='<div class="list-group-item view">';
      txt +=  '<div class="checkbox"><label><input type="checkbox"></label></div>';
      txt += '<span  class="glyphicon star glyphicon-star-empty"></span>';
      txt += '<span class="name" style="min-width: 120px;display:inline-block;">'+ inbox[i].senderName +'</span>';
      txt += '<span class="">'+ inbox[i].subject +'</span>';
      txt += '<span class="badge">'+inbox[i].time + '</span>';
      txt += '<span class="pull-right">';
      txt += '<p class="del glyphicon glyphicon-trash"></p></span>';
      txt += '</div>';
    document.getElementById("inboxlisting").innerHTML = txt;
}

$(".star").click(function(){
        let stored = [];
        let newinbox = [];
        var index = $(this).parent().index();
        var i = index;
        var recievedEmails = JSON.parse(localStorage.getItem("recieveddata"));
        console.log(recievedEmails);
        if(recievedEmails[i].stare == 0){
          $(this).css('color', '#FFFF00');
          recievedEmails[i].stare = 1;
          newinbox = recievedEmails[i];
          for(var i=0; i<allEmails.length; i++){
            if(allEmails[i].subject == newinbox.subject && allEmails[i].senderEmail == newinbox.senderEmail && allEmails[i].recieverEmail == newinbox.recieverEmail && allEmails[i].time == newinbox.time){
              allEmails[i].stare = newinbox.stare;
            }
          }
        }else{
          nexinbox[i].stare = 0;
          newinbox = recievedEmails[i];
          for(var i=0; i<allEmails.length; i++){
            if(allEmails[i].subject == newinbox.subject && allEmails[i].senderEmail == newinbox.senderEmail && allEmails[i].recieverEmail == newinbox.recieverEmail && allEmails[i].time == newinbox.time){
              allEmails[i].stare = newinbox.stare;
            }
          }
        }
        localStorage.setItem("emailTable", JSON.stringify (allEmails));
      });
$(".del").click(function(){
        let stored = [];
        let newinbox = [];
        var index = $(this).parent.index();
        var i = index;
        alert(i);
        // var recievedEmails = JSON.parse(localStorage.getItem("recieveddata"));
        // console.log(recievedEmails);
        // if(recievedEmails[i].del == 0){
        //   recievedEmails[i].del = 1;
        //   newinbox = recievedEmails[i];
        //   for(var i=0; i<allEmails.length; i++){
        //     if(allEmails[i].subject == newinbox.subject && allEmails[i].senderEmail == newinbox.senderEmail && allEmails[i].recieverEmail == newinbox.recieverEmail && allEmails[i].time == newinbox.time){
        //       allEmails[i].del = newinbox.del;
        //     }
        //   }
        // }else{
        //   nexinbox[i].del = 0;
        //   newinbox = recievedEmails[i];
        //   for(var i=0; i<allEmails.length; i++){
        //     if(allEmails[i].subject == newinbox.subject && allEmails[i].senderEmail == newinbox.senderEmail && allEmails[i].recieverEmail == newinbox.recieverEmail && allEmails[i].time == newinbox.time){
        //       allEmails[i].del = newinbox.del;
        //     }
        //   }
        // }
        // localStorage.setItem("emailTable", JSON.stringify (allEmails));
      });
$(".view").click(function(){
var recievedEmails = JSON.parse(localStorage.getItem("recieveddata"));
  let viewinbox = [];
  let viewboxnow=[];
      var index = $(this).index();
      var i = index;
      alert(i);
      viewinbox.push(recievedEmails[i]);
      localStorage.setItem("viewbox", JSON.stringify (viewinbox));
      viewboxnow = JSON.parse(localStorage.getItem("viewbox"));
var txt1 = "";
  txt1 += '<div class="col-sm-9 col-md-10"><form class="form-horizontal">';
  txt1 +='<div class="panel mail-wrapper rounded shadow"><div class="panel-heading">';
  txt1 += '<div class="pull-left"><h3 class="panel-title">View Mail</h3> </div>';
  txt1 +='<div class="clearfix"></div>  </div><div class="panel-sub-heading inner-all">';
  txt1 +=' <div class="clearfix"></div></div><div class="panel-sub-heading inner-all">';
  txt1 +='<div class="row"><div class="col-md-8 col-sm-8 col-xs-7"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." class="img-circle senden-img">&nbsp;&nbsp;';
  txt1 +='<span class="sender">'+ viewboxnow[i].senderEmail + '</span>&nbsp;&nbsp;to &nbsp;&nbsp;<strong>&nbsp;&nbsp;me&nbsp;&nbsp;</strong></div>';
  txt1 +='<div class="col-md-4 col-sm-4 col-xs-5"><p class="pull-right">' + viewboxnow[i].time+'</p> </div> </div> </div>';
  txt1 +='<div class="panel-body"><div class="view-mail"><p>'+ viewboxnow[i].message + '</p></div></div>';
  txt1 +='<div class="panel-footer"><div class="pull-right">';
  txt1 +='<a href="#" data-toggle="modal" data-target="#reply-modal" class="btn btn-success btn-sm"><i class="fa fa-reply"></i> Reply</a>';
  txt1 +='<button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-arrow-right"></i> Forward</button>';
  txt1 +='</div><div class="clearfix"></div></div></div></form></div>';
  document.getElementById("view_email").innerHTML = txt1;
  document.getElementById("to1").innerHTML = recievedEmails[0].senderEmail;
  document.getElementById("subject1").innerHTML = recievedEmails[i].subject;
  });
});
$('#signout').click(function() {
    sessionStorage.clear();
    localStorage.removeItem('Logindata');
    window.location = "signin.html";
});
  $("#filter").keyup(function() {
      var filter = $(this).val(),
      count = 0;
      $('#inboxlisting a').each(function() {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
          $(this).css({"visibility": "hidden", "position": "absolute"}); 
        } ela
          $(this).css({"visibility": "visible", "position": "relative"}); 
          count++;
        });
      });
    });
