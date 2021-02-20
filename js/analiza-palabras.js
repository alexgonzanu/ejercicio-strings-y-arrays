/* Crea tu función aquí */
const deletrearPalabra = (arrayPalabras, contador) => {
  let deletreo = "";
  for (let i = 0; i < arrayPalabras[contador].length; i++) {
    if (i == 0) {
      deletreo = arrayPalabras[contador].charAt(i);
    } else {
      deletreo += "-" + arrayPalabras[contador].charAt(i);
    }
  }
  return deletreo;
}

const mayusculaOrNotAndParOrNot = (arrayPalabras, contador) => {
  let mayusculaOrNot = arrayPalabras[contador].charAt(0);
  if (arrayPalabras[contador].length % 2 === 0 && mayusculaOrNot !== mayusculaOrNot.toUpperCase()) {
    console.log("La palabra es par y no empieza por mayúscula");
  } else if (arrayPalabras[contador].length % 2 === 0 && mayusculaOrNot === mayusculaOrNot.toUpperCase()) {
    console.log("La palabra es par y empieza por mayúscula");
  } else if (arrayPalabras[contador].length % 2 !== 0 && mayusculaOrNot === mayusculaOrNot.toUpperCase()) {
    console.log("La palabra es impar y empieza por mayúscula");
  } else {
    console.log("La palabra es impar y no empieza por mayúscula");
  }

}

const containsPalabra = (arrayPalabras, contador) => {
  if (arrayPalabras[contador].search("ble") !== -1) {
    console.log("La palabra contiene 'ble'");
  } else {
    console.log("La palabra no contiene 'ble'");
  }
}

const analizaPalabras = (arrayPalabras) => {
  for (let contador in arrayPalabras) {
    /* Punto 1 */
    console.log(`Palabra ${contador}: ${arrayPalabras[contador]}`);
    /* Punto 2 */
    console.log(`Nº de caracteres: ${arrayPalabras[contador].length}`);
    /* Punto 3 */
    console.log(`Deletreo: ${deletrearPalabra(arrayPalabras, contador)}`);
    /* Punto 4 */
    mayusculaOrNotAndParOrNot(arrayPalabras, contador);
    /* Punto 5 */
    containsPalabra(arrayPalabras, contador);
  }
}
