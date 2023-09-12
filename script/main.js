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

// Swiper Projetos
var swiper = new Swiper('.projetos-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,		
    speed: 3500,
    loop: true,		
    breakpoints: {
        1300: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        990: {
            slidesPerView: 1,
            spaceBetween: 20,
        }   
    },
    autoplay: {
        delay: 1000,
    },
});