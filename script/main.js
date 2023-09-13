// Scroll de sections
var scrollElements = document.querySelectorAll(".scroll");

function scrollToSection(event) {
    event.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
        var targetOffset = targetElement.offsetTop - 100;

        window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
        });
    }
}

scrollElements.forEach(function(element) {
    element.addEventListener("click", scrollToSection);
});

// Mudar title
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volte aqui :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

//Dinamic Slide
document.addEventListener('DOMContentLoaded', function() {
var slides = [
    {
      href: 'https://gabrielacontesini.com.br/',
      src: 'images/projects/mockup-gabriela.png',
      titulo: 'Gabriela Contesini',
      conteudo: 'Projeto desenvolvido para a psicóloga Gabriela Contesini. Com este auxílio, espero contribuir indiretamente para o bem-estar do próximo.',
    },
    {
      href: 'https://imobiliariaportaldeminas.com.br/',
      src: 'images/projects/mockup-portal-minas.png',
      titulo: 'Imobiliaria Portal de Minas',
      conteudo: 'Conteúdo 2',
    },
    {
      href: 'https://extremaforte.com.br/',
      src: 'images/projects/mockup-extremaforte.png',
      titulo: 'Extrema Forte',
      conteudo: 'Conteúdo 2',
    },
    {
      href: 'https://exemplo.com',
      src: 'images/projects/mockup-feira-de-extrema.png',
      titulo: 'Feira de Extrema',
      conteudo: 'Conteúdo 2',
    },
];
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 80,
  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
  },
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
});

slides.forEach(function (slideData) {
    var slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'align');
  
    var link = document.createElement('a');
    link.href = slideData.href;
    link.target = '_blank';
  
    var image = document.createElement('img');
    image.src = slideData.src;
    image.alt = '';
  
    var content = document.createElement('div');
    content.classList.add('align');
  
    var titulo = document.createElement('h3');
    titulo.textContent = slideData.titulo;
  
    var conteudo = document.createElement('p');
    conteudo.textContent = slideData.conteudo;
  
    content.appendChild(titulo);
    content.appendChild(conteudo);
  
    link.appendChild(image);
    link.appendChild(content);
  
    slide.appendChild(link);
  
    swiper.appendSlide(slide);
  });
  
  swiper.update();
});
