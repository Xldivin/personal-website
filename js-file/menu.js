const side = document.getElementById("side");
const menu = document.getElementById("menu-icon");

menu.addEventListener("click", () => {
    side.classList.toggle("active");
})
document.querySelectorAll("side-bar").forEach(n => n.addEventListener("click", () => {
    side.classList.remove("active")
}))