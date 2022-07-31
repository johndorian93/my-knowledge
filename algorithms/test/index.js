
function timeConversion(s) {
  if (s.includes('AM')) {
    const [timeAM] = s.split('AM');

    const [hoursAMRaw, minutesAMRaw, secondsAMRaw] = timeAM.split(':');

    const hourAM = parseInt(hoursAMRaw);

    return `0${hourAM % 12}:${minutesAMRaw}:${secondsAMRaw}`;
  }

  const [timePM] = s.split('PM');

  const [hoursPMRaw, minutesPMRaw, secondsPMRaw] = timePM.split(':');

  const hourPM = parseInt(hoursPMRaw);

  const hourPMFinal = hourPM === 12
    ? hourPM
    : (hourPM + 12) % 24

  return `${hourPMFinal}:${minutesPMRaw}:${secondsPMRaw}`;
}

console.log(timeConversion('12:45:54PM'))