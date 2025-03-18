document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            nav.classList.remove("active");
            burger.classList.remove("active");
        }
    });
});
