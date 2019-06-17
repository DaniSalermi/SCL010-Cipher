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
  /*Input para ingresar mensaje a codificar*/
  startMessage = document.getElementById("messageStart").value.toUpperCase();
  /*Impresión del mensaje final en la textarea*/
  /*Llamado a la función para codificar el mensaje desde window*/
  document.getElementById("messageEnd").value = window.cipher.encode(
    startMessage,
    offsetNumber
  );
});

/*Función para decodificar mensaje*/
document.getElementById("decode").addEventListener("click", () => {
  /*Definir Offset*/
  let offsetNumber = parseInt(document.getElementById("offset").value);
  /*Input para ingresar mensaje a decodificar*/
  startMessage = document.getElementById("messageStart").value.toUpperCase();
  /*Impresión del mensaje final en la textarea*/
  /*Llamado a la función para decodificar el mensaje desde window*/
  document.getElementById("messageEnd").value = window.cipher.decode(
    startMessage,
    offsetNumber
  );
});
