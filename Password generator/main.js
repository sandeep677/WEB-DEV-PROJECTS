let chars = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
let symbols = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
    "[", "]", "{", "}", ";", ":", "'", ",", ".", "<", ">", "/", "?", "|", "`", "~"
];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let passlength=15;
let meter=document.getElementById("strength");
let button=document.getElementById("btn");
button.onclick=function(){
  let password="";
  for(let i=0; i<=5; i++){
  let charsrnd=Math.round(Math.random()*51);
  password+=chars[charsrnd];
  let symbolsrnd=Math.round(Math.random()*29);
  password+=symbols[symbolsrnd];
  let numrnd=Math.round(Math.random()*8);
  password+=num[numrnd];
  
}
document.getElementById("display").textContent=password;
meter.value=100;
}