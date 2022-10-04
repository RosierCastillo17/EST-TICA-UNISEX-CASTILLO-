const cosa = document.querySelector(".cosa");
const menu = document.querySelector(".menu-navegacion");

console.log(menu)
console.log(cosa)


cosa.addEventListener("click", () => {
    menu.classList.toggle("spread")
})

window.addEventListener("click", e => {
    if (menu.classList.contains("spread") && e.target != menu && e.target != cosa) {
        menu.classList.toggle("spread")
    }
})