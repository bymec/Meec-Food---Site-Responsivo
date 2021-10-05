function myCV() {
    alert ("Em breve!")
}

const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
  });

 sr.reveal('#inicio-page',{
    origin:'left',
    delay:300
 })

 sr.reveal('#ofertas-page',{
    origin:'left',
    delay:300
})

sr.reveal('#sobre-page',{
    origin:'right',
    delay:300
})

sr.reveal('#menu-page',{
    origin:'top',
    delay:300
})

sr.reveal('#app-page',{
    origin:'right',
    delay:300
})

sr.reveal('header',{
    origin:'top',
    delay:300
})

sr.reveal('#contato-page',{
    origin:'top',
    delay:300
})

sr.reveal('#final-page',{
    origin:'left',
    delay:300
})

sr.reveal('#copy',{
    origin:'top',
    delay:300
})


function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.text-js');
typeWrite(titulo);