const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector("#clock").innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  })
};


export function alarm(sonido, playAlarm, stopAlarm) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sonido;
  d.addEventListener("click", e => {
    if (e.target.matches(playAlarm)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 2000);
      e.target.disabled = true;
    }

    if (e.target.matches(stopAlarm)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(playAlarm).disabled = false;
    }
  })
}
