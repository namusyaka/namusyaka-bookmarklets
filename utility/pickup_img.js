javascript:(function(){
  var _d = document;
  var array = _d.body.innerHTML.match(/("|')([^"']+?\.)(jpg|gif|png|bmp|jpeg)("|')/ig);
  if(!array)
    return alert('見つからなかった。');
  var exist = {};
  for(var i=0; i < array.length; i++) {
    if(!exist[array[i]]) {
      _d.write('<img src=' + array[i] + '>');
      exist[array[i]] = 1
    }
  }
  _d.close()
})()