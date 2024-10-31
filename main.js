let text;
let number;
let btn=document.getElementById("repeatbtn");
let btn2=document.getElementById("clearbtn");  
btn.onclick=function(){
  text=document.getElementById("repeattext").value;
  number=Number(document.getElementById("repeattime").value);
  for(let i=0; i<=number; i++){
    document.getElementById("output").innerHTML+=i +" " + text+"<br>";
}
}
btn2.onclick=function(){
  document.getElementById("output").textContent="";
}

