const slides = document.querySelectorAll(".main")
const nextbtn = document.getElementById('right-arrow')
const prevbtn = document.getElementById('left-arrow')

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
})

let counter = 0;

nextbtn.addEventListener("click", function () {
    counter++;
    corousel()
});

prevbtn.addEventListener("click",function () {
    counter--;
    corousel();
})


function corousel(){
    if (counter < slides.length - 1){
        nextbtn.style.display = "block"

    }else {
        nextbtn.style.display = "none"
    }
    if(counter > 0 ){
        prevbtn.style.display = "block"
    }
    else {
        prevbtn.style.display = "none"
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;

    });
}



    const intervalId = setInterval(function () {
        counter++;
        corousel();
        }, 5000);
    