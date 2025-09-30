

const scrollRevealOption = {
    distance:"50px",
    origin:"botton",
    duration: "1000",
};



ScrollReveal().reveal(".content p", {
    ...scrollRevealOption,
    origin:"bottom",
    delay:500,
});

ScrollReveal().reveal(".content h2", {
    ...scrollRevealOption,
    origin:"bottom",
    delay:500,
});


ScrollReveal().reveal(".content button", {
    ...scrollRevealOption,
      origin:"bottom",
      delay: 500,
      });

ScrollReveal().reveal(".navbar", {
    ...scrollRevealOption,
     origin: "bottom",
     
     delay: 500,
})
    
var loadingScreen = document.querySelector(".loadingScreen");

window.addEventListener('load', function() {
  loadingScreen.style.display = 'none';
})

  
 

