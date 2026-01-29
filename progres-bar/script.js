const btnRight = document.getElementById("btnRight");
const btnLeft = document.getElementById("btnLeft");
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

let currentIndex = 0;

window.onload = function () {
    circles[currentIndex].classList.add("circle-active");
};

btnRight.addEventListener("click", function () {
    if (currentIndex < circles.length - 1) {
         // Highlight the current line
        currentIndex++;
        circles[currentIndex].classList.add("circle-active"); 
        lines[currentIndex-1].classList.add("line-active");
    }
});


btnLeft.addEventListener("click", function () {
    if (currentIndex+1 >= 1 ) {
         // Highlight the current line
       
        circles[currentIndex].classList.remove("circle-active"); 
        lines[currentIndex-1].classList.remove("line-active");
     currentIndex--;}
});
