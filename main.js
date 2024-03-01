

const objmain = {
    search_box : document.getElementById("search_box"),
    search_div : document.getElementById("search_div"),

    header_container:document.getElementById("header_container"),
    // btn mobile
    btn_for_moblie : document.getElementById("btn_for_moblie"),
    moblie : document.getElementById("moblie"),
    close_mobile : document.getElementById("close_mobile")

}


objmain.search_box.addEventListener("mouseover",()=>{
    objmain.search_div.classList.add("show")
})

objmain.search_div.addEventListener("mouseleave",()=>{
    objmain.search_div.classList.remove("show")
})


objmain.btn_for_moblie.addEventListener("click",()=>{
    objmain.moblie.classList.add("showno")

})
objmain.close_mobile.addEventListener("click",()=>{
    objmain.moblie.classList.remove("showno")
})



//slide show
const slides = document.querySelectorAll(".slide2");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

