let entradaTexto = document.getElementById("entrada");
let saidaTexto = document.getElementById("saida");
let copiarTexto = document.getElementById("copiararea")

let botaoCriptografar = document.getElementById("botaof");
let botaoDescriptografar = document.getElementById("botaos"); 
let botaoCopiar = document.getElementById("botaocopy")

 botaoCriptografar.onclick = criptografa;
 botaoDescriptografar.onclick = descriptografa;
 botaoCopiar.onclick = copiar;


function criptografa(){
    let textoCriptografado = entrada.value;
    
    let result = textoCriptografado

    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("á", "lo")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    copiararea.value = result;
}


function descriptografa(){
let textoDescriptografado = saida.value;

let result = textoDescriptografado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("á", "lo")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    copiararea.value = result;
}

function copiar(){
    resultado = document.getElementById("copiararea")
    resultado.select();
    document.execCommand("cut") 
    setTimeout(alert('Texto copiado para área de transferência ' ), 100)
    
}
 
