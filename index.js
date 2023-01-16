const textArea = document.getElementById("text-area");
textArea.innerHTML = "Ingrese el texto aqui";

let estado = false;
const encripta = document.getElementById("encripta");
const desencripta = document.getElementById("desencripta");
const panel = document.getElementById("panel");

let encriptedText = "";
let isPosibleCopy = false;

const contentNoFound = `
<img
          class="imagen"
          src="https://thumbs.dreamstime.com/b/hombre-d-con-la-lupa-61024683.jpg"
          alt=""
        />
        <p class="no-encontrado">Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
`;

const procesado = `
<div class="data-processed">
<p id="textobienprocesado"></p>
        <button id="copiar">Copiar</button>
        </div>
`;

verifyStatus();

function verifyStatus() {
  if (estado == false) {
    panel.innerHTML = contentNoFound;
  } else {
    panel.innerHTML = procesado;
  }
}

function changeStatus(texto) {
  if (texto.length == 0) {
    estado = false;
  } else {
    estado = true;
  }
}

function encriptar(texto) {
  let data = texto.replaceAll("e", "enter");
  data = data.replaceAll("i", "imes");
  data = data.replaceAll("a", "ai");
  data = data.replaceAll("o", "ober");
  data = data.replaceAll("u", "ufat");
  return data;
}

function insertarTextoProcesado(contenido, callBack) {
  if (estado) {
    let textoBienProcesado = document.getElementById("textobienprocesado");
    textoBienProcesado.innerHTML = callBack(contenido);
  }
}

function desencriptar(texto) {
  let data = texto.replaceAll("ufat", "u");
  data = data.replaceAll("ober", "o");
  data = data.replaceAll("ai", "a");
  data = data.replaceAll("imes", "i");
  data = data.replaceAll("enter", "e");
  return data;
}

encripta.addEventListener("click", () => {
  let contenido = textArea.value;
  changeStatus(contenido);
  verifyStatus();
  insertarTextoProcesado(contenido, encriptar);
  handleCopiarBtn();
});

desencripta.addEventListener("click", () => {
  let contenido = textArea.value;
  changeStatus(contenido);
  verifyStatus();
  insertarTextoProcesado(contenido, desencriptar);
  handleCopiarBtn();
});

const q = document.getElementById("asd");

function handleCopiarBtn() {
  let isThereContent = document.getElementById("copiar");
  if (isThereContent === null) {
    isPosibleCopy = false;
  } else {
    isPosibleCopy = true;
  }
  if (isPosibleCopy) {
    isThereContent.addEventListener("click", CopiarTextoEnPortapapeles);
  }
}

function CopiarTextoEnPortapapeles() {
  let textoBienProcesado = document.getElementById("textobienprocesado");
  let seleccion = document.createRange();
  seleccion.selectNodeContents(textoBienProcesado);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  let resultado = document.execCommand("copy");
  window.getSelection().removeRange(seleccion);
}
