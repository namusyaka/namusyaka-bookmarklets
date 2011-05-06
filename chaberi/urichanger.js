javascript:
var t=setInterval("asdf",10000);
while(t){clearInterval(--t)}
location.href='javascript:'+function outprint(a, place, getmsg) {
 if (place != "") {
  _element = UseById(place);
  if (a == 0) {
   _element.innerHTML = getmsg;
  } else {
   var element = document.createElement("div");
   element.style.margin = "0px";
   element.style.padding = "0px";
   element.innerHTML = getmsg.replace(/([^"])(https?\:\/\/[^ <]*)/,'$1<a target="_blank" href="$2">$2</a>');
   _element.appendChild(element);
  }
 }
};

setTimeout("setenter()",700);
setTimeout("win_resize()",800);
setInterval( "reload_ajbnr3()", 1000 * 60 * 60 );
setInterval("reload_overture_all()", 1000 * 60 * 60 );
setInterval("ChangeAdvAvatar()",1000 * 60 * 3);