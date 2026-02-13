document.addEventListener("DOMContentLoaded", function () {

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

});
