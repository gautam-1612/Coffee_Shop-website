const menuButton = document.querySelector(".hamburger");
const menuBar = document.querySelector(".menubar");

menuButton.addEventListener("click", () => {
    menuBar.classList.toggle("active");
});

let counter = 0;

const slider = document.querySelectorAll(".slide");

slider.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; // Positions each slide horizontally
});

const next = () => {
    counter++;
    slideFunction();
}
const prev = () => {
    counter--;
    slideFunction();
}
const img2 = document.querySelector(".prev");
if (counter == 0) {
    img2.style.visibility = "hidden";
}


const slideFunction = () => {
    const img = document.querySelector(".next");
    if (counter == slider.length - 1) {
        img.style.visibility = "hidden";
    }
    else {
        img.style.visibility = "visible";
    }

    const img2 = document.querySelector(".prev");
    if (counter == 0) {
    img2.style.visibility = "hidden";
    }
    else{
        img2.style.visibility = "visible";
    }

    slider.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`; // Moves the slides horizontally
    });
}