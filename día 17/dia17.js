function optimizeIntervals(intervals) {
  return intervals
    .sort((a, b) => a[0] - b[0])
    .reduce(
      (optimized, current) => {
        const last = optimized[optimized.length - 1];
        if (current[0] <= last[1]) {
          last[1] = Math.max(last[1], current[1]);
        } else {
          optimized.push(current);
        }
        return optimized;
      },
      [intervals[0]]
    );
}
