const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".textomostrado");
const copia = document.querySelector(".copiartexto");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function bottonEncript(){
    const textoEncript = encriptar(textarea.value);
    mensaje.value = textoEncript
    textarea.value = "";
}

function encriptar(stringEncript){
    let mcodigo = [["e", "enter"], ["i", "imes"], ["a" , "ai"], ["o" , "ober"], ["u", "ufat"]];
    stringEncript = stringEncript.toLowerCase();

    for(let i=0; i < mcodigo.length; i++){
        if(stringEncript.includes(mcodigo[i][0])){
            stringEncript = stringEncript.replaceAll(mcodigo[i][0], mcodigo[i][1]);
        }
    }
    return stringEncript;
}


function bottonDesencript(){
    const textoEncript = desencriptar(textarea.value);
    mensaje.value = textoEncript
    textarea.value = "";
}

function desencriptar(stringDesencript){
    let mcodigo = [["e", "enter"], ["i", "imes"], ["a" , "ai"], ["o" , "ober"], ["u", "ufat"]];
    stringDesencript = stringDesencript.toLowerCase();

    for(let i=0; i < mcodigo.length; i++){
        if(stringDesencript.includes(mcodigo[i][1])){
            stringDesencript = stringDesencript.replaceAll(mcodigo[i][1], mcodigo[i][0]);
        }
    }
    return stringDesencript;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}