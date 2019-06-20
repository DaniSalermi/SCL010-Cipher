/* eslint-disable no-console */
/*Acá va tu código*/

/*Variables*/
let startMessage = "";

/*Botón Ver más*/
document.getElementById("verMasButton").addEventListener("click", () => {
  document.getElementById("instructions").style = "display: grid";
  document.getElementById("verMasSection").style = "display: none";
  document.getElementById("verMenosSection").style = "display: grid";
});

/*Botón Ver menos*/
document.getElementById("verMenosButton").addEventListener("click", () => {
  document.getElementById("instructions").style = "display: none";
  document.getElementById("verMasSection").style = "display: grid";
  document.getElementById("verMenosSection").style = "display: none";
});

/*Botón continuar*/
document.getElementById("continueButton").addEventListener("click", () => {
  document.getElementById("heroBanner").style = "display: none";
  document.getElementById("instructions").style = "display: none";
  document.getElementById("verMasSection").style = "display: none";
  document.getElementById("verMenosSection").style = "display: none";
  document.getElementById("continueButton").style = "display: none";
  document.getElementById("welcomeMessage").style = "display: block";
  document.getElementById("cipher").style = "display: block";
});

/*Función para codificar mensaje*/
document.getElementById("code").addEventListener("click", () => {
  /*Definir Offset*/
  let offsetNumber = parseInt(document.getElementById("offset").value);
  /*Input para ingresar mensaje a codificar*/
  startMessage = document.getElementById("messageStart").value;
  if (startMessage == "") {
    document.getElementById("errorMessageEncode").style = "display: block";
  } else {
    /*Impresión del mensaje final en la textarea*/
    /*Llamado a la función para codificar el mensaje desde window*/
    document.getElementById("messageEnd").value = window.cipher.encode(
      startMessage,
      offsetNumber
    );
  }
});

/*Función para decodificar mensaje*/
document.getElementById("decode").addEventListener("click", () => {
  /*Definir Offset*/
  let offsetNumber = parseInt(document.getElementById("offset").value);
  /*Input para ingresar mensaje a decodificar*/
  startMessage = document.getElementById("messageStart").value;

  if (startMessage == "") {
    //Alerta para ingresar un mensaje a decodificar//
    document.getElementById("errorMessageDecode").style = "display: block";
  } else {
    /*Impresión del mensaje final en la textarea*/
    /*Llamado a la función para decodificar el mensaje desde window*/
    document.getElementById("messageEnd").value = window.cipher.decode(
      startMessage,
      offsetNumber
    );
  }
});

document.getElementById("copyButton").addEventListener("click", () => {
  document.getElementById("messageEnd").select();
  document.execCommand("copy");
});

document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("messageEnd").value = "";
  document.getElementById("messageStart").value = "";
  document.getElementById("errorMessageEncode").style = "display: none";
  document.getElementById("errorMessageDecode").style = "display: none";
});
