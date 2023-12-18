function adjustLights(lights) {
  let o1 = 0;
  let o2 = 0;

  for (let i = 0; i < lights.length; i++) {
    const isOddIndex = i % 2 !== 0;
    const light = lights[i];

    o1 += +(light !== "🟢") * +isOddIndex;
    o2 += +(light !== "🔴") * +isOddIndex;
    o1 += +(light !== "🔴") * +!isOddIndex;
    o2 += +(light !== "🟢") * +!isOddIndex;
  }

  const x = o1 - o2;
  return (x + 2 * o2 - ((x + (x >> 31)) ^ (x >> 31))) / 2;
}
