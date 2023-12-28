function organizeGifts(gifts) {
  let warehouse = {};
  let numberString = "";

  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    if (gift.toLowerCase() !== gift.toUpperCase()) {
      warehouse = {
        ...warehouse,
        [gift]: Number(numberString),
      };
      numberString = "";
    } else {
      numberString += gift;
    }
  }
  let result = "";
  for (const key in warehouse) {
    const element = warehouse[key];
    let boxes = Math.floor(element / 10);
    const pallets = Math.floor(boxes / 5);
    boxes = Math.floor(boxes % 5);
    const bags = Math.floor(element % 10);
    pallets && (result += `[${key}]`.repeat(pallets));
    boxes && (result += `{${key}}`.repeat(boxes));
    bags && (result += `(${key.repeat(bags)})`);
  }
  return result;
}
