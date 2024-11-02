 let LIGHTMODE = false;

function darkmode(){ 
    let element = document.body;
    let texto = document.querySelector("#btn")
    if(LIGHTMODE){
        LIGHTMODE = false;
        element.className = 'whitemode'
        texto.innerHTML = 'dark'

    }else{
        LIGHTMODE = true;
        element.className = 'darkmode'
        texto.innerHTML = 'light'

    }
}
 




// texto efeito


function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  const titulo = document.querySelector('.e');
  typeWriter(titulo);



