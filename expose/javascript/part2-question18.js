function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printTime, 1000); //1000ms = 1s