function cyberReindeer(road, time) {
  const result = [road];
  let roadSteps = road.split("");
  let openedDoor = false;
  let reindeerIndex = roadSteps.indexOf("S");

  for (let t = time; t > 1; t--) {
    if (t === time - 4) {
      roadSteps = roadSteps.map((step) => (step === "|" ? "*" : "."));
    }

    const nextIndex = reindeerIndex + 1;
    if (roadSteps[nextIndex] !== "|") {
      roadSteps[reindeerIndex] = openedDoor ? "*" : ".";
      reindeerIndex = nextIndex;
      openedDoor = roadSteps[reindeerIndex] !== ".";
      roadSteps[reindeerIndex] = "S";
    }

    result.push(roadSteps.join(""));
  }

  return result;
}
