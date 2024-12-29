function welcome() {
    console.log("Cześć! Miłego dnia. Niech się darzy");
}

welcome();

let button = document.querySelector(".button");
let image = document.querySelector(".image");
let section = document.querySelector("#strona-glowna");

button.addEventListener("click", () => {
    if (button.innerText === "Pokaż obrazek") {
        section.appendChild(image);
        button.innerText = "Usuń obrazek";
    } else {
        image.remove();
        button.innerText = "Pokaż obrazek";
    }
});