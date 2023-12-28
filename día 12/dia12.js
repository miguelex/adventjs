function checkIsValidCopy(original, copy) {
  let i = -1;
  let isCopy = true;

  for (let letter of [...original]) {
    i++;

    if (letter.toLowerCase() == copy[i]) continue;

    let simbolos = [letter, letter.toLowerCase(), "#", "+", ":", ".", " ", ""];

    isCopy = [
      false,
      [false, true][
        +simbolos
          .slice(
            (/([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g
              .exec(letter)
              ?.lastIndexOf(letter) ?? 1) - 1
          )
          .includes(copy[i])
      ],
    ][+isCopy];
  }

  return isCopy;
}
