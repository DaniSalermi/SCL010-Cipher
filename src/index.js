/* eslint-disable no-console */
/*Acá va tu código*/

/*Variables*/
let startMessage = "";

/*Botón continuar*/
document.getElementById("continueButton").addEventListener("click", () => {
  document.getElementById("heroBanner").style = "display: none";
  document.getElementById("instructions").style = "display: none";
  document.getElementById("continueButton").style = "display: none";
  document.getElementById("welcomeMessage").style = "display: block";
  document.getElementById("cipher").style = "display: block";
});

/*Función para codificar mensaje*/

document.getElementById("code").addEventListener("click", () => {
  /*Definir Offset*/
  let offsetNumber = parseInt(document.getElementById("offset").value);
  console.log(offsetNumber);

  /*Input para ingresar mensaje a codificar*/
  startMessage = document.getElementById("messageStart").value.toUpperCase();
  if (startMessage == "") {
    alert("Debes ingresar un mensaje a codificar");
  } else {
    console.log(startMessage);
    let finalMessage = "";

    for (let i = 0; i < startMessage.length; i++) {
      console.log(startMessage[i]);

      let codeAscii = startMessage.charCodeAt(i);
      console.log(codeAscii);
      let newCodeAscii = ((codeAscii - 65 + offsetNumber) % 26) + 65;
      console.log(newCodeAscii);
      let endChar = String.fromCharCode(newCodeAscii);
      console.log(endChar);
      //concatenando los Char 2 maneras//
      //finalMessage = finalMessage + endChar;//
      finalMessage = finalMessage.concat(endChar);
    }

    console.log(finalMessage);

    document.getElementById("messageEnd").value = finalMessage;
  }
});

/*Función para decodificar mensaje*/
document.getElementById("decode").addEventListener("click", () => {
  /*Definir Offset*/
  let offsetNumber = parseInt(document.getElementById("offset").value);
  console.log(offsetNumber);

  /*Input para ingresar mensaje a decodificar*/
  startMessage = document.getElementById("messageStart").value.toUpperCase();
  if (startMessage == "") {
    alert("Debes ingresar un mensaje a decodificar");
  } else {
    console.log(startMessage);
    let finalMessage = "";

    for (let i = 0; i < startMessage.length; i++) {
      console.log(startMessage[i]);

      let codeAscii = startMessage.charCodeAt(i);
      console.log(codeAscii);
      let newCodeAscii = ((codeAscii + 65 - offsetNumber) % 26) + 65;
      console.log(newCodeAscii);
      let endChar = String.fromCharCode(newCodeAscii);
      console.log(endChar);
      //concatenando los Char 2 maneras//
      //finalMessage = finalMessage + endChar;//
      finalMessage = finalMessage.concat(endChar);
    }

    console.log(finalMessage);

    document.getElementById("messageEnd").value = finalMessage;
  }
});
