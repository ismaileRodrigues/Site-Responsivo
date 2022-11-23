"use strict";
const galeria = document.querySelector('.galeria')
const button= document.querySelector('.button')
const buttonVoltar = document.querySelector('.button-voltar');

let arrayImg = [
    "./img/person.png","./img/donutrosa.png", "./img/ada2.PNG" ,  
    "./img/donutaoleite.png","./img/mordido.png",
    "./img/misto.png","./img/ninhocnute.png" ,"./img/ourobranco.png"
    
    
];
galeria.style.gridTemplateColumns = `repeat(${arrayImg.length}, 1fr)`;
const agregarFotos = (img)=>{
    for(let i = 0; i<img.length; i++){
        let newImg = `<img class = "foto" src="${arrayImg[i]}">`;
        galeria.innerHTML += newImg;
    }

}
agregarFotos(arrayImg);

const filhosElementos = galeria.children;
let contador = 0;
button.addEventListener("click", ()=>{
    filhosElementos[contador].classList.add("seguinte");
    filhosElementos[contador].classList.remove("voltar");
    contador++;
    buttonVoltar.style.display= `inline-block`;
   
    if(contador >= arrayImg.length -1){
        button.style.display = `none`;
        
    }



})

buttonVoltar.addEventListener("click", ()=>{
    if(contador <= arrayImg.length &&contador >=0){
        contador--
        button.style.display = `inline-block`;
        filhosElementos[contador].classList.add("voltar");
        filhosElementos[contador].classList.remove("seguinte");

        if(contador == 0){
            buttonVoltar.style.display ='none'
        }
    }
})


// Smooth Scrolling


$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background

window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

// relógio
setInterval(()=>{
    let novaHora= new Date();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundos = novaHora.getSeconds();
    //chamando a função zero para que ela retorne a concatenação
    //com minutos e segundos

    minuto = zero(minuto);
    segundos = zero(segundos);

    document.getElementById('hora').textContent=`${hora}:${minuto}:${segundos}`;
},1000);
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
