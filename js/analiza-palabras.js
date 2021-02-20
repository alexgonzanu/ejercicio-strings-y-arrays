/* Crea tu función aquí */
const array = ["hola", "alejandro", "fusible", "amable"];

const analizaPalabras = (arrayPalabras) => {
  for (let contador in arrayPalabras) {
    /* Punto 1 */
    console.log(`Palabra ${contador}: ${arrayPalabras[contador]}`);
    /* Punto 2 */
    console.log(`Nº de caracteres: ${arrayPalabras[contador].length}`);
    /* Punto 3 */
    let deletreo = "";
    for (let i = 0; i < arrayPalabras[contador].length; i++) {
      if (i == 0) {
        deletreo = arrayPalabras[contador].charAt(i);
      } else {
        deletreo += "-" + arrayPalabras[contador].charAt(i);
      }
    }
    console.log(`Deletreo: ${deletreo}`);
    /* Punto 4 */
    let mayusculaOrNot = arrayPalabras[contador].charAt(0);
    if (array[contador].length % 2 === 0 && mayusculaOrNot !== mayusculaOrNot.toUpperCase()) {
      console.log("La palabra es par y no empieza por mayúscula");
    } else if (array[contador].length % 2 === 0 && mayusculaOrNot === mayusculaOrNot.toUpperCase()) {
      console.log("La palabra es par y empieza por mayúscula");
    } else if (array[contador].length % 2 !== 0 && mayusculaOrNot === mayusculaOrNot.toUpperCase()) {
      console.log("La palabra es impar y empieza por mayúscula");
    } else {
      console.log("La palabra es impar y no empieza por mayúscula");
    }
    /* Punto 5 */
    if (array[contador].substr(-3) == "ble") {
      console.log("La palabra contiene 'ble'");
    } else {
      console.log("La palabra no contiene 'ble'");
    }
  }
}
