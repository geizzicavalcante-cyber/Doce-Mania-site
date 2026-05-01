document.addEventListener("DOMContentLoaded", function () {

    // TROCA DE IMAGENS (produtos)
    const imagens = document.querySelectorAll(".img-troca");

    imagens.forEach(function (img) {

        const original = img.getAttribute("data-original");
        const hover = img.getAttribute("data-hover");

        img.addEventListener("mouseover", function () {
            img.src = hover;
        });

        img.addEventListener("mouseout", function () {
            img.src = original;
        });

    });

    // CARROSSEL DO TOPO
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove("ativo"));
        slides[i].classList.add("ativo");
    }

    document.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
    });

});
console.log("Slides encontrados:", document.querySelectorAll(".slide").length);