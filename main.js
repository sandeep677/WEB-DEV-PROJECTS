let increase=document.getElementById("increase");
let reset=document.getElementById("reset");
let decrease=document.getElementById("decrease");
let count=0;
increase.onclick=function(){
  count++;
  document.getElementById("counter").textContent=count;
}
reset.onclick=function(){
  count=0;
  document.getElementById("counter").textContent=count;
}
decrease.onclick=function(){
  count--;
  document.getElementById("counter").textContent=count;
}