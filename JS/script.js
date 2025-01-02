{
    const welcome = () => {
        console.log("Cześć! Miłego dnia. Niech się darzy");
    }

    const showHideImage = () => {
        const button = document.querySelector(".button");
        const image = document.querySelector(".image");
        const section = document.querySelector("#strona-glowna");

        welcome();

        button.addEventListener("click", () => {
            if (button.innerText === "Pokaż obrazek") {
                section.appendChild(image);
                button.innerText = "Usuń obrazek";
            } else {
                image.remove();
                button.innerText = "Pokaż obrazek";
            }
        });

    }

    showHideImage();

}