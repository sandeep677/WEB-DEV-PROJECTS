let button=document.getElementById("btn");
let screen=document.getElementById("display");
let quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "It always seems impossible until it’s done.",
    "Believe in yourself, take on your challenges, and dig deep within yourself to conquer fears."
];

button.onclick=function(){
  let rndnum=Math.round(Math.random() * 10);
  let generatedquote=quotes[rndnum];
  screen.textContent=generatedquote;
}
