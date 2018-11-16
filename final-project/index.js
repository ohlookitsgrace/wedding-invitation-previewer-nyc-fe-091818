document.addEventListener("DOMContentLoaded", e => {
const bride = document.getElementById("bride");
  bride.addEventListener("input", function(event){
  const bname = document.getElementById("bride").value;
  document.getElementById("bridename").innerHTML = bname;
});
 const groom = document.getElementById("groom");
  groom.addEventListener("input", function(event){
  const gname = document.getElementById("groom").value;
  document.getElementById("groomname").innerHTML = gname;
});
 const date = document.getElementById("date");
  date.addEventListener("input", function(event){
  const dname = document.getElementById("date").value;
  document.getElementById("datename").innerHTML = dname;
});

 const url = document.getElementById("url");
  url.addEventListener("input", function(event){
  const uname = document.getElementById("url").value;
  document.getElementById("urlname").innerHTML = uname;
});
 const style1 = document.getElementById("style1")
 style1.addEventListener("click", function(event){
  document.getElementById("firstbox").style.backgroundImage = 'url("https://i.pinimg.com/originals/45/b3/ef/45b3efeb3863aea9cee18e5242101e23.gif")';
  document.getElementById("firstbox").style.fontFamily = "'Alex Brush', cursive";
  document.getElementById("style1").style.fontFamily = "'Alex Brush', cursive";
  document.getElementById("styles").style.fontFamily = "'Alex Brush', cursive";
   document.getElementById("styles").style.color = "black";
  document.getElementById("styles").style.fontWeight = "bold";
  document.getElementById("secondcolor").style.color = "black";
  });
  
  const style2 = document.getElementById("style2")
 style2.addEventListener("click", function(event){
  document.getElementById("firstbox").style.backgroundImage = 'url("https://media.giphy.com/media/2wTahmbK632LnN7geD/giphy.gif")';
  document.getElementById("firstbox").style.fontFamily = "'Cutive Mono', monospace";
  document.getElementById("style2").style.fontFamily = "'Cutive Mono', monospace";
  document.getElementById("styles").style.fontFamily = "'Cutive Mono', monospace";
  document.getElementById("styles").style.color = "#00FFFF";
  document.getElementById("styles").style.fontWeight = "bold";
  document.getElementById("secondcolor").style.color = "#00FFFF";
  
});
 const style3 = document.getElementById("style3")
 style3.addEventListener("click", function(event){
  document.getElementById("firstbox").style.backgroundImage = 'url("https://images.unsplash.com/photo-1465147836063-7ca3784f01af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98e46bc6cbabea687ed463e5b78a398a&auto=format&fit=crop&w=650&q=80")';
  document.getElementById("firstbox").style.fontFamily = "'Ranga', cursive";
  document.getElementById("style3").style.fontFamily = "'Ranga', cursive";
  document.getElementById("styles").style.fontFamily = "'Ranga', cursive";
  document.getElementById("styles").style.color = "#08dd08";
  document.getElementById("styles").style.fontWeight = "bold";
  document.getElementById("secondcolor").style.color = "paleGreen";
});
 });