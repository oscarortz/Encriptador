const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const valueText = document.getElementById('textarea')
const mensajeEncriptado = document.querySelector('.mensaje')
const parrafo = document.querySelector('.parrafo')
const muñeco = document.getElementById('imagenMuñeco')
const copiar = document.getElementById('copiar')

let reemplazar = [
['e', 'enter'],
['o', 'ober'],
['i', 'imes'],
['a', 'ai'],
['u', 'ufat']
]

let matrizCodigo = [
  ["enter", "e"],
  ["imes", "i"],
  ["ai", "a"],
  ["ober", "o"],
  ["ufat", "u"]
];



encriptar.addEventListener('click', () => {
  const textoEntrante = valueText.value.toLowerCase()
  function encriptar (newTexto){
    for(let i = 0; i < reemplazar.length; i ++){
      if(newTexto.includes (reemplazar[i][0])){
        newTexto= newTexto.replaceAll(reemplazar[i][0], reemplazar[i][1])
    }
  }
    return newTexto
  }
  
  const textoEncriptado = encriptar(textoEntrante);
  mensajeEncriptado.innerHTML= textoEncriptado
  parrafo.style.display='none'
  muñeco.style.display='none'
  copiar.style.display='block'
  valueText.value=''
}) 

copiar.addEventListener('click', () => {
  const copia = mensajeEncriptado.textContent
  navigator.clipboard.writeText(copia)
  mensajeEncriptado.value=''
})

desencriptar.addEventListener('click', () => {
  const stringEncriptada = valueText.value.toLowerCase();

  function desencriptar(textoEncriptado) {

    for (let i = 0; i < matrizCodigo.length; i++) {
      const [reemplazo, letra] = matrizCodigo[i];
      const regex = new RegExp(reemplazo, "g");
      textoEncriptado = textoEncriptado.replace(regex, letra);
    }

    return textoEncriptado;
  }

  const textoDesencriptado = desencriptar(stringEncriptada);
  mensajeEncriptado.innerHTML= textoDesencriptado
  parrafo.style.display='none'
  muñeco.style.display='none'
  copiar.style.display='block'
  valueText.value=''
});
