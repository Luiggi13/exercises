function cifrarConAlfabeto(texto, clave) {
    const alfabetoMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const alfabetoMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let textoCifrado = '';
  
    for (let i = 0; i < texto.length; i++) {
      const letra = texto[i];
      let esMayuscula = false;
  
      if (alfabetoMinusculas.includes(letra)) {
        esMayuscula = false;
      } else if (alfabetoMayusculas.includes(letra)) {
        esMayuscula = true;
      } else {
        textoCifrado += letra;
        continue;
      }
  
      const alfabeto = esMayuscula ? alfabetoMayusculas : alfabetoMinusculas;
      const indiceOriginal = alfabeto.indexOf(letra);
      let indiceCifrado = (indiceOriginal + clave) % alfabeto.length;
  
      if (indiceCifrado < 0) {
        indiceCifrado += alfabeto.length;
      }
  
      textoCifrado += alfabeto[indiceCifrado];
    }
  
    return textoCifrado;
  }