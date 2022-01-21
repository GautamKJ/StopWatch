console.log('stopwatch');
const box = document.querySelector('.box');
let time = document.querySelector('#min');
const btn = document.querySelector('.btn');
const stop = document.querySelector('.stop');
const kitkat = document.querySelector('.break');
const lunch = document.querySelector('.lunch');
const breakfast = document.querySelector('.breakfast');
const exercise = document.querySelector('.exercise');



let isStop = false;
let html = '';
let second = 0;
var myVar;
let count = 0;
var waqt;
var pauseTime;

kitkat.addEventListener('click', () => {
    console.log('kitkat');
    waqt = 2;
    second = waqt * 60;
    clearInterval(myVar);
    myVar = setInterval(setTime, 1000);

});


lunch.addEventListener('click', () => {
    console.log('lunch')
    waqt = 30;
    second = waqt * 60;
    clearInterval(myVar);
    myVar = setInterval(setTime, 1000);

});


breakfast.addEventListener('click', () => {
    console.log('breakfast');
    waqt = 12;
    second = waqt * 60;
    clearInterval(myVar);
    myVar = setInterval(setTime, 1000);

});


exercise.addEventListener('click', () => {
    console.log('exercise');
    waqt = 20;
    second = waqt * 60;
    clearInterval(myVar);
    myVar = setInterval(setTime, 1000);


});


stop.addEventListener('click', (e) => {
    console.log(e);
    box.innerHTML = html;
    console.log("thml", second);
    pauseTime = second;
    clearInterval(myVar)
    isStop=true;


})
btn.addEventListener('click', () => {
    count++;
    console.log(count);
    second = time.value * 60 || waqt * 60;
    if(isStop){
    console.log('play')
    second=pauseTime;}
    console.log("after->", second);
    clearInterval(myVar)
    myVar = setInterval(setTime, 1000);



});
function setTime() {
    console.log("Adf");
    if (second <= 0)
        return;
    second--;
    let minute = Math.floor(second / 60);
    let sec = second % 60;
    if (sec == 60)
        minute--;


    if (minute > 9 && sec > 9) {
        html =
            `   ${minute}:${sec}
    `
    }
    if (minute < 10 && sec > 9) {
        html =
            `  
    0${minute}:${sec}

        `
    }

    if (minute > 9 && sec < 10) {
        html =
            `  
        ${minute}:0${sec}
    
            `
    }

    if (minute < 10 && sec < 10) {
        html =
            `  
   0${minute}:0${sec}

        `
    }
    box.innerHTML = html;
    if (second == 0)
        clearInterval(myVar)



}


