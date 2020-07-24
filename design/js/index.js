const slide = document.querySelector('.overlay');
slide.style.animation = "unset";

setTimeout(function() {
    gsap.fromTo(slide, .35, { transform: "scaleX(1)" }, { transform: "scaleX(0)" })
}, 500);



const links = document.querySelectorAll("a");

links.forEach(function(current) {
    current.addEventListener('click', function(event) {
        const isTargetBlank = event.target.target === "_blank";
        event.preventDefault();
        var url = this.getAttribute("href");

        if (url != null && isTargetBlank == false) {
            gsap.fromTo(slide, 0.35, { transform: "scaleX(0)" }, { transform: "scaleX(1)" })
            setTimeout(function() {
                window.location = url;
            }, 350);
        } else if (url != null && isTargetBlank == true) {
            window.open(url)
        }
    })
})