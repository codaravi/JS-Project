const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const timePeriod = document.getElementById('timePeriod')

const clock = () => {
    const date = new Date();
    console.log(date);

    let h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
      let timeP = "AM";
      if (h == 0 ) {
        h = 12;
      }


      if (h > 12) {
        h = h - 12;
        timeP = "PM";
      }


       hour.innerHTML = h > 9 ? h : `0${h}`
       min.innerHTML = m > 9 ? m : `0${m}`
       sec.innerHTML = s > 9 ? s : `0${s}`
       timePeriod.innerHTML = timeP
};

setInterval(() => {
    clock();
}, 1000);
