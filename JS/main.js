
const imagens =document.querySelectorAll('.small_img')
const modal = document.querySelector('.modal')
const modalimg = document.querySelector('.modal-img')
const btClose = document.querySelector('.bt_close')
let srcVal = '';


for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){

        srcVal = imagens[i].getAttribute('src');
        modalimg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active')

    });
   
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active')
});


  

// Smooth Scrolling
/*

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
*/







/*let galeria1 = document.querySelector('#galeria1')
let sectionOne = document.querySelector('#gallery1')
let galeria2 = document.querySelector('#galeria2')
let sectionTwo = document.querySelector('#gallery2')
let galeria3 = document.querySelector('#galeria3')
let sectionThree = document.querySelector('#gallery3')


galeria1.addEventListener('click', function(){
    if(sectionOne.style.display === 'block'){
        sectionOne.style.display = 'none'
        galeria1.innerHTML= 'Especiais'
    }else{
        sectionOne.style.display = 'block'
        galeria1.innerHTML= 'fechar'
    }
})

galeria2.addEventListener('click', function(){
    if(sectionTwo.style.display === 'block'){
        sectionTwo.style.display = 'none'
        galeria2.innerHTML= 'Bentos'
    }else{
        sectionTwo.style.display = 'block'
        galeria2.innerHTML= 'fechar'
    }
})

galeria3.addEventListener('click', function(){
    if(sectionThree.style.display === 'block'){
        sectionThree.style.display = 'none'
        galeria3.innerHTML= 'Lembrancinhas'
    }else{
        sectionThree.style.display = 'block'
        galeria3.innerHTML= 'fechar'
    }
})

function topo(){ 
    scrollTo(0, 0)
}
*/



