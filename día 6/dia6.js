function maxDistance(movements) {
  let distance = 0;
  let potential = 0;

  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case ">":
        distance++;
        break;
      case "<":
        distance--;
        break;
      case "*":
        potential++;
        break;
    }
  }

  let maxDistance = Math.max(
    distance + potential,
    Math.abs(distance - potential)
  );

  return maxDistance;
}
