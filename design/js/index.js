const slide = document.querySelector('.overlay');
slide.style.animation = "unset";

setTimeout(function(){
    gsap.fromTo(slide, 0.45, {opacity: 1}, {opacity: 0})
    slide.style.display = "none";
}, 450);

window.onpageshow = function(event) {
    if (event.persisted) {
        slide.style.display = "none";
    }
};



const links = document.querySelectorAll("a");

links.forEach(function(current) {
    current.addEventListener('click', function(event) {
        const isTargetBlank = event.target.target === "_blank";
        event.preventDefault();
        var url = this.getAttribute("href");

        if (url != null && isTargetBlank == false) {
            gsap.fromTo(slide, 0.35,  {opacity: 0}, {opacity: 1})
            slide.style.display = "block";
            setTimeout(function() {
                window.location = url;
            }, 350);
        } else if (url != null && isTargetBlank == true) {
            window.open(url)
        }
    })
})