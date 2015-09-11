var findReplace = function(str, find, replace) {
  if (!(str) || !(find) || !(replace)) {
    return null;
  }
  var re = new RegExp(find,'g');
  var i = 0;
  var resultArr;
  while ((resultArr = re.exec(str))  !== null) {
    i++;
  }
  var newStr = str.replace(re, replace);
  return [i, newStr];
};

$(document).ready(function() {

  $("form#find-replace").submit(function(event){
    var str = $("#sentence").val();
    var find = $("#find").val();
    var replace = $("#replace").val();
    var result = findReplace(str, find, replace);
    if (result !== null) {
      document.getElementById('sentence').value = result[1];
      var msg = result[0];
      if (result[0] == 1) {
        msg += " instance found";
        } else {
        msg += " instances found";
      }
    } else {
      msg = "You must fill in all fields";
    }
    $("#found").text(msg);
    $("#result").show();
    event.preventDefault();
  });

});
