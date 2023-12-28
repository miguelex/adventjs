function drawGift(size, symbol) {
  let result = "";
  const store = [];
  const cubeSize = 2 * size;
  const isBorder = (i, j, limit) => {
    return (
      i === 1 ||
      i === cubeSize - 1 ||
      j === 1 ||
      j === size ||
      j === size + i - 1 ||
      (i === size && j <= size) ||
      (j === limit - 1 && i !== size)
    );
  };
  let limitBottom = cubeSize - 1;
  for (let i = 1; i <= cubeSize - 1; i++) {
    const limit = i <= size ? cubeSize - size + i : limitBottom;
    for (let j = 1; j < limit; j++) {
      result += isBorder(i, j, limitBottom) ? "#" : symbol;
    }
    if (i <= size) {
      result = result.padStart(cubeSize - 1, " ");
    } else {
      limitBottom--;
    }
    store.push(result);
    result = "";
  }
  result = store.join("\n");
  return result + "\n";
}
