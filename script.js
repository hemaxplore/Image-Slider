document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelector(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotscontainer = document.querySelector(".dots-container");

    let  currentSlide = 0;
    const slideCount = slides.length;   //3

    slides.foreach((_, index) => {   //0,1,2
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotscontainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateDots() {
        dots.foreach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        slider.Style.transform = `translatex(-${currentSlide * 33.3333}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = ( currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = ( currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    }

    //Event listeners
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    //Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
});