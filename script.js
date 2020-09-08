var dropmenu = document.querySelector('#dropmenu');
var selection = document.querySelector('#selection');

var mainspace = document.querySelector('#mainspace')

dropmenu.addEventListener('click',function(){
    // var x = menu.style.display = 'initial';
    var x = document.getElementById("selection");
  if (x.style.display === "none") {
    // x.style.display = "block";
    dropmenu.style.marginTop ="-10%";
    selection.style.height = "85%";
  } else {
    // x.style.display = "none";
    selection.style.height = "initial";
    dropmenu.style.marginTop ="initial";
  }
})


dropmenu.addEventListener('click',function(){
    var x = document.getElementById("selection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
})













