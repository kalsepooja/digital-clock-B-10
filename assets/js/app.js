const cl = console.log;

const setZero = (num) => {
    return (num < 10) ? "0" + num : num
}

const creatClock = () => {
    const digital_clock = document.getElementById('digital_clock');
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";
    session = (hr > 12) ? "PM" : "AM";
    hours = (hr >= 12) ? hr - 12 : hr

    let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`;
    digital_clock.innerHTML = result;

    setTimeout(creatClock, 1000);

};
creatClock()

