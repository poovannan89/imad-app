console.log('Loaded!');

//Change text
var element=document.getElementById('main-text');
element.innerHTML ='new Value'

var img=document.getElementById('madi');
marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
  var interval = setInterval(moveRight, 100);
};
