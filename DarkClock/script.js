// const currentDate = new Date();
const transformOrigin = "50% 100%";
const transform = "translate(-50%, -100%)";

// setInterval(() => { moveArrow(hours, currentDate.getHours(), 12); });
// setInterval(() => { moveArrow(minutes, currentDate.getMinutes(), 60); });
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');
let seconds = document.querySelector('.second');
setInterval(moveArrow, 1000);

// hours

// let hours = document.querySelector('.hour');
// let hoursTransform = window.getComputedStyle(hours).transform;
// document.querySelector('.hour').style.transform =  hoursTransform + `rotate(${(360 / 12) * currentDate.getHours()}deg)`;

// minutes

// let minutes = document.querySelector('.minute');
// minutes.style.transformOrigin = transformOrigin;
// minutes.style.transform =  transform + `rotate(${(360 / 60) * currentDate.getMinutes()}deg)`;

// seconds

// let seconds = document.querySelector('.minute');
// seconds.style.transformOrigin = transformOrigin;
// seconds.style.transform =  transform + `rotate(${(360 / 360) * currentDate.getSeconds()}deg)`;



function moveArrow() {
    let currentDate = new Date();
    // arrow.style.transformOrigin = transformOrigin;
    hours.style.transform = transform + `rotate(${(360 / 12) * currentDate.getHours() }deg)`;
    minutes.style.transform = transform + `rotate(${(360 / 60) * currentDate.getMinutes() }deg)`;
    seconds.style.transform ="translate(-50%, -85%)" + `rotate(${(360 / 60) * currentDate.getSeconds() }deg)`;
}
