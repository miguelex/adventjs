function calculateTime(deliveries) {
  const limitTime = 7 * 60 * 60 * 1000;

  const totalTime = deliveries.reduce((total, duration) => {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    return total + (hours * 60 * 60 + minutes * 60 + seconds) * 1000;
  }, 0);

  const diffTime = limitTime - totalTime;

  const date = new Date(Math.abs(diffTime));

  const formattedTime = date.toISOString().substr(11, 8);

  return (diffTime > 0 ? "-" : "") + formattedTime;
}
