/*const slide = document.querySelector('.overlay');*/

/* Relevant for iOS backpress - instead of force reload I just remove the overlay element again 
window.onpageshow = function(event) {
    if (event.persisted) {
        gsap.fromTo(slide, 0.45, {opacity: 1}, {opacity: 0})
        slide.style.display = "none";
    }
};*/

/* Overlay trigger 
const links = document.querySelectorAll("a");

links.forEach(function(current){
    current.addEventListener('click', function(event) {
        const isTargetBlank = event.target.target === "_blank";
        var url = this.getAttribute("href");

        if (!url.startsWith("#")) {
            event.preventDefault();
        } 
        
       
        
        if (url != null && isTargetBlank == false && url != "#carouselExampleIndicators")
        {
            slide.style.animation = "unset";
            gsap.fromTo(slide, 0.45, {opacity: 0}, {opacity: 1})
            slide.style.display = "block";
            setTimeout(function() {
                window.location = url;
            }, 450);
        } else if (url != null && isTargetBlank == true && url == "#carouselExampleIndicators") {
            window.open(url)
        }
    })
})*/