javascript:(function(s,e,i){
  while(i<e.length)if(e[i++].innerHTML.indexOf(s)<0)
    with(e[0].parentNode)
	  removeChild(e[--i].nextSibling),removeChild(e[i])
})(prompt("IDいれろ"),document.getElementsByTagName("dt"),0);