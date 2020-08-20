const slide = document.querySelector('.overlay');

/* iOS Detection 
function isIOSDevice(){
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}
if(isIOSDevice()){
    slide.setAttribute.display = "";
    console.log("I am an IOS device!");
    alert("IOS");
} else {
    console.log("I am NOT an IOS device!");
    alert("NOT IOS");
}



if(!isIOSDevice()){*/
    const slide = document.querySelector('.overlay');
    slide.style.animation = "unset";

    setTimeout(function(){
        gsap.fromTo(slide, .35, {transform: "scaleX(1)"}, {transform: "scaleX(0)"})
    }, 500);

    const links = document.querySelectorAll("a");

    links.forEach(function(current){
        current.addEventListener('click', function(event) {
          const isTargetBlank = event.target.target === "_blank";
          event.preventDefault();
          var url = this.getAttribute("href");
          
          if (url != null && isTargetBlank == false)
          {
            gsap.fromTo(slide, 0.35,  {transform: "scaleX(0)"}, {transform: "scaleX(1)"})
            setTimeout(function(){
                window.location = url;
            }, 350);
          } else if (url != null && isTargetBlank == true) {
            window.open(url)
          }
        })
    })
/*}*/











// Minor Improvments bug brings in other bugs

/*function adjustCSS(screenWidth) {
    screenWidth = parseInt(screenWidth);
    if (screenWidth < 500) {
        $("#size-stylesheet").attr("href", "css/mobile.css");
    } 
    else if (screenWidth > 500 && screenWidth < 991) {
        $("#size-stylesheet").attr("href", "css/tabelt.css");
    }
    else if (screenWidth > 991) {
        $("#size-stylesheet").attr("href", "css/desktop.css");
    }
    
}*/

/*$(function() {
    adjustCSS($(this).width());

    $(window).resize(function() {
        adjustCSS($(this).width());
    });
});*/

/*window.addEventListener('resize', function() {
    adjustCSS($(this).width());

    $(window).resize(function() {
        adjustCSS($(this).width());
    });
});

window.addEventListener('load', (event) => {
    adjustCSS($(this).width());

    $(window).resize(function() {
        adjustCSS($(this).width());
    });
  });*/




/* window.onbeforeunload = function(event)
{
    const isTargetBlank = event.target.target === "_blank";
    event.preventDefault();
    var url = this.getAttribute("href");
    
    if (url != null && isTargetBlank == false)
    {
      gsap.fromTo(slide, 0.5,  {transform: "scaleX(0)"}, {transform: "scaleX(1)"})
      setTimeout(function(){
          window.location = url;
      }, 500);
    } else if (url != null && isTargetBlank == true) {
      window.open(url)
    }
    return;
}; */


 
/*
$(window).bind('beforeunload', function() {

    gsap.fromTo(slide, 0.5,  {transform: "scaleX(0)"}, {transform: "scaleX(1)"})     

    return ("Don't leave yet!");  
});
function bye() {
    gsap.fromTo(slide, 0.5,  {transform: "scaleX(0)"}, {transform: "scaleX(1)"})
    setTimeo
    
    
    ut(function(){
        
    }, 500);
}





event.currentTarget.performance.navigation.type.addEventListener()

if (event.currentTarget.performance.navigation.type == 2) {
    alert("back button is clicked");
}
if (event.currentTarget.performance.navigation.type == 1) {
    alert("refresh button is clicked");
}   
$(window).unload(function () {
    gsap.fromTo(slide, 0.5,  {transform: "scaleX(0)"}, {transform: "scaleX(1)"})
    setTimeout(function(){
        
    }, 500);
});*/




/*window.addEventListener('beforeunload', (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = '';

    const isTargetBlank = event.target.target === "_blank";
    event.preventDefault();
    var url = this.getAttribute("href");
    
    if (url != null && isTargetBlank == false)
    {
      gsap.fromTo(slide, 0.5,  {transform: "scaleX(0)"}, {transform: "scaleX(1)"})
      setTimeout(function(){
          window.location = url;
      }, 500);
    } else if (url != null && isTargetBlank == true) {
      window.open(url)
    }
    
  });*/




/*document.querySelector("#ggg3").addEventListener("click", function(event) {
    event.preventDefault();
    var url = this.getAttribute("href");
    gsap.fromTo(slide, 0.5,  {transform: "scaleX(0)"}, {transform: "scaleX(1)"})
    setTimeout(function(){
        window.location = url;
    }, 1000);
});*/