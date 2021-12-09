let deg = 6;
let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");


setInterval(() => {
    let date = new Date();
let hour = date.getHours() * 30;
let minute = date.getMinutes() * deg;
let second = date.getSeconds() * deg;


hr.style.transform = `rotateZ(${(hour)+(minute/12)}deg)`;
mn.style.transform = `rotateZ(${minute}deg)`;
sc.style.transform = `rotateZ(${second}deg)`;
})
