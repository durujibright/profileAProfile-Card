let check = 0;
carousel()

function carousel() {

    let slider = document.querySelectorAll(".about-img");

    for (let i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
    }
    check++;
    if (check > slider.length) {
        check = 1;
    }
    slider[check -1].style.display = "block"
    setTimeout(carousel, 3000);
}
