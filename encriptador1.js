
function encriptar(){
    var texto = document.getElementById("texto").value;
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parrafo = document.getElementById("parrafo");

    var textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
    } else{
        alert("Debes ingresar un texto");
    }
}

function desencriptar(){
    var texto = document.getElementById("texto").value;
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parrafo = document.getElementById("parrafo");

    var textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        
    if(texto.lenght !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
    } else{
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        alert("Debes ingresar algún texto");
        }
}