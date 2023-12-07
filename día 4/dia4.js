function decode(message) {
  let result = message;

  // Función para invertir una cadena de texto
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Iteramos hasta que no haya paréntesis anidados
  while (result.includes("(")) {
    // Encuentra el par más interno de paréntesis y lo invierte
    result = result.replace(/\(([^()]+)\)/g, (_, content) =>
      reverseString(content)
    );
  }

  return result;
}
