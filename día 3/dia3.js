function findNaughtyStep(original, modified) {
  for (let i = 0; i < Math.max(original.length, modified.length); i++) {
    if (original.charAt(i) !== modified.charAt(i)) {
      return original.length > modified.length
        ? original.charAt(i)
        : modified.charAt(i);
    }
  }
  return "";
}
