function autonomousDrive(store, movements) {
  const numRows = store.length;
  const numCols = store[0].length;

  let initRow, initCol;

  for (let i = 0; i < numRows; i++) {
    const colIndex = store[i].indexOf("!");
    if (colIndex !== -1) {
      initRow = i;
      initCol = colIndex;
      break;
    }
  }

  const isValidPosition = (row, col) =>
    row >= 0 && row < numRows && col >= 0 && col < numCols;

  const moveRobot = (direction) => {
    const directions = { R: [0, 1], L: [0, -1], U: [-1, 0], D: [1, 0] };
    const [rowChange, colChange] = directions[direction];

    const newRow = initRow + rowChange;
    const newCol = initCol + colChange;

    if (isValidPosition(newRow, newCol) && store[newRow][newCol] !== "*") {
      store[initRow] =
        store[initRow].substring(0, initCol) +
        "." +
        store[initRow].substring(initCol + 1);
      initRow = newRow;
      initCol = newCol;
      store[initRow] =
        store[initRow].substring(0, initCol) +
        "!" +
        store[initRow].substring(initCol + 1);
    }
  };

  for (const movement of movements) {
    moveRobot(movement);
  }

  return store;
}
