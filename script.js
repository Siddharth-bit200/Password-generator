const slider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

slider.oninput = function(){

lengthValue.innerText = this.value;

}

function generatePassword(){

let length = slider.value;

let upper = document.getElementById("uppercase").checked;
let lower = document.getElementById("lowercase").checked;
let number = document.getElementById("numbers").checked;
let symbol = document.getElementById("symbols").checked;

let chars = "";

if(upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(lower) chars += "abcdefghijklmnopqrstuvwxyz";
if(number) chars += "0123456789";
if(symbol) chars += "!@#$%^&*()_+";

let password = "";

for(let i=0;i<length;i++){

let random = Math.floor(Math.random()*chars.length);

password += chars[random];

}

document.getElementById("password").value = password;

checkStrength(password);

}

function copyPassword(){

let text = document.getElementById("password");

text.select();

document.execCommand("copy");

alert("Password Copied!");

}

function checkStrength(password){

let strengthFill = document.getElementById("strengthFill");
let strengthText = document.getElementById("strengthText");

let strength = 0;

if(password.length > 8) strength++;

if(/[A-Z]/.test(password)) strength++;

if(/[0-9]/.test(password)) strength++;

if(/[!@#$%^&*]/.test(password)) strength++;

if(strength <=1){

strengthFill.style.width="25%";
strengthFill.style.background="red";
strengthText.innerText="Weak";

}

else if(strength==2){

strengthFill.style.width="50%";
strengthFill.style.background="orange";
strengthText.innerText="Medium";

}

else if(strength==3){

strengthFill.style.width="75%";
strengthFill.style.background="yellow";
strengthText.innerText="Strong";

}

else{

strengthFill.style.width="100%";
strengthFill.style.background="green";
strengthText.innerText="Very Strong";

}

}

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")

.then(()=>console.log("Service Worker Registered"))

}