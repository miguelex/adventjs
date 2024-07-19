function revealSabotage(store) {
    const rows = store.length;
    const cols = store[0].length;
    
    
    function countAdjacentSabotaged(row, col) {
        let count = 0;
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],          [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];
        
        for (let [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                if (store[newRow][newCol] === '*') {
                    count++;
                }
            }
        }
        return count;
    }
    
    const result = Array.from({ length: rows }, () => Array(cols).fill(' '));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (store[i][j] === '*') {
                result[i][j] = '*';
            } else {
                const count = countAdjacentSabotaged(i, j);
                if (count > 0) {
                    result[i][j] = String(count);
                }
            }
        }
    }
    
    return result;
}