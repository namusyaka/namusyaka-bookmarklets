javascript:(function() {
  var w=window, d=document;
  var p=new RegExp(w.prompt("置換対象の文字列を入力してください。"),"g"),g=w.prompt("置換後の文字列を入力してください。");
  d.body.innerHTML=d.body.innerHTML.replace(p, g)
})()