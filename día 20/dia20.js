function distributeGifts(weights) {
    let rows = weights.length;
    let cols = weights[0].length;

    // Function to calculate the average of valid neighbors
    function calculateAverage(i, j) {
        let sum = 0;
        let count = 0;
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1]
        ];

        if (weights[i][j] !== null) {
            sum += weights[i][j];
            count++;
        }

        for (let k = 0; k < directions.length; k++) {
            let newRow = i + directions[k][0];
            let newCol = j + directions[k][1];

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && 
              weights[newRow][newCol] !== null) {
                sum += weights[newRow][newCol];
                count++;
            }
        }

        return count > 0 ? Math.round(sum / count) : null;
    }

    let result = [];
    for (let i = 0; i < rows; i++) {
        let newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(calculateAverage(i, j));
        }
        result.push(newRow);
    }

    return result;
}