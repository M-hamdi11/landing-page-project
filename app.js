// ===== Testimonials Slider =====
const track   = document.getElementById("sliderTrack");
const slides  = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsBox = document.getElementById("dots");
const navmenu=document.getElementById("navmenu")
const hamburger=document.getElementById("hamburger")


let current = 0;   

slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.addEventListener("click", () => goTo(i));
    dotsBox.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function goTo(index) {
   
    current = (index + slides.length) % slides.length;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
}
nextBtn.addEventListener("click", () => goTo(current + 1));
prevBtn.addEventListener("click", () => goTo(current - 1));

let autoPlay = setInterval(() => goTo(current + 1), 5000);

const slider = document.querySelector(".slider");
slider.addEventListener("mouseenter", () => clearInterval(autoPlay));
slider.addEventListener("mouseleave", () => {
    autoPlay = setInterval(() => goTo(current + 1), 5000);
});
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
});
document.querySelectorAll(".navmenu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
    });
});


goTo(0);   