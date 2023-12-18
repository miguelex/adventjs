function createChristmasTree(ornaments, height) {
  let tree = "";
  let ornamentIndex = 0;

  for (let i = 0; i < height; i++) {
    // Añadir espacios en blanco para centrar el árbol
    tree += " ".repeat(height - i - 1);

    // Añadir los adornos
    for (let j = 0; j <= i; j++) {
      tree += ornaments[ornamentIndex % ornaments.length] + " ";
      ornamentIndex++;
    }

    // Eliminar el último espacio en blanco y añadir un salto de línea
    tree = tree.slice(0, -1) + "\n";
  }

  // Añadir el tronco del árbol
  tree += " ".repeat(height - 1) + "|\n";

  return tree;
}
