function Dic(val) {
    var display = document.getElementById('display');
    if (display.value == '0') {
        display.value = val;
    } else {
        display.value += val;
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0";
}

function equal() {
    var a = document.getElementById('display').value;
    var b = eval(a);
    document.getElementById('display').value = b;
}

function back() {
    var text = document.getElementById('display');
    if (text.value) {
        text.value = text.value.substring(0, text.value.length - 1);
    }
}
function square(){
    display.value=eval(display.value)*eval(display.value);
}
function cube(){
    display.value=eval(display.value)*eval(display.value)*eval(display.value);
}
function sin(){
    display.value = Math.sin(display.value);
}
function cos(){
    display.value = Math.cos(display.value);
}
function tan(){
    display.value = Math.tan(display.value);
}
function log(){
    display.value = Math.log(display.value);
}
function sqrt(){
    display.value = Math.sqrt(display.value);
}
function pi() {
    // var display = document.getElementById('display');
    display.value = Math.PI;
}
function factorial(){
   var f=1;
   var num = display.value;
   var i;
   for(i=1; i<=num; i++){
    f = f*i;
   }
   display.value=f;

}