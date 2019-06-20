window.cipher = {
  /*Función para codificar*/
  encode: (startMessage, offsetNumber) => {
    //Si se ingresa un mensaje correcto: Se inicializa la variable donde guardaré el mensaje final//
    let finalMessage = "";
    //Se recorre todo el mensaje//
    for (let i = 0; i < startMessage.length; i++) {
      //Encuentro cada char code de cada letra//
      let codeAscii = startMessage.charCodeAt(i);
      //Operador ternario: si es un espacio, me deja el espacio, sino encuentra el nuevo ASCII//
      //Nuevo ASCII se consigue con la fórmula de Michelle//
      let newCodeAscii =
        codeAscii === 32
          ? codeAscii
          : codeAscii >= 65 && codeAscii <= 90
          ? ((codeAscii - 65 + offsetNumber) % 26) + 65
          : codeAscii >= 97 && codeAscii <= 122
          ? ((codeAscii - 97 + offsetNumber) % 26) + 97
          : codeAscii;

      //Encuentro el nuevo char asociado al nuevo ASCII//
      let endChar = String.fromCharCode(newCodeAscii);

      //concatenando los Char uno a uno para obtener el mensaje//
      finalMessage = finalMessage.concat(endChar);
    }

    return finalMessage; //La función retorna el nuevo mensaje//
  },

  /*Función para decodificar*/
  decode: (startMessage, offsetNumber) => {
    //   console.log(startMessage);
    //Si se ingresa un mensaje correcto: Se inicializa la variable donde guardaré el mensaje final//
    let finalMessage = "";
    //Se recorre todo el mensaje//
    for (let i = 0; i < startMessage.length; i++) {
      //Encuentro cada char code de cada letra//

      let codeAscii = startMessage.charCodeAt(i);

      //Operador ternario: si es un espacio, me deja el espacio, sino encuentra el nuevo ASCII//
      //Nuevo ASCII se consigue con la fórmula//

      let newCodeAscii =
        codeAscii === 32
          ? codeAscii
          : codeAscii >= 65 && codeAscii <= 90
          ? ((codeAscii + 65 - offsetNumber) % 26) + 65
          : codeAscii >= 97 && codeAscii <= 122
          ? ((codeAscii + 111 - offsetNumber) % 26) + 97
          : codeAscii;

      //Encuentro el nuevo char asociado al nuevo ASCII//
      let endChar = String.fromCharCode(newCodeAscii);

      //concatenando los Char 2 maneras//
      //finalMessage = finalMessage + endChar;//
      finalMessage = finalMessage.concat(endChar);
    }
    return finalMessage; //La función retorna el nuevo mensaje//
  }
};
