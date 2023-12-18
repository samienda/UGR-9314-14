document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.querySelector("#navbarMenu");

    burger.addEventListener("click", () => {
        menu.classList.toggle("is-active");
    });
});
