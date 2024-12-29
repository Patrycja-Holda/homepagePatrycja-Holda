{
    const welcome = () => {
        console.log("Cześć! Miłego dnia. Niech się darzy");
    }
    
    welcome();
    
    const button = document.querySelector(".button");
    const image = document.querySelector(".image");
    const section = document.querySelector("#strona-glowna");
    
   const showHideImage = button.addEventListener("click", () => {
        if (button.innerText === "Pokaż obrazek") {
            section.appendChild(image);
            button.innerText = "Usuń obrazek";
        } else {
            image.remove();
            button.innerText = "Pokaż obrazek";
        }
    });

init ();

}