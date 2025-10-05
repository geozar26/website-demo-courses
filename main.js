

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: "1000",
};



ScrollReveal().reveal(".content h2", {
    ...scrollRevealOption,
    delay:500,
});


ScrollReveal().reveal(".content button", {
    ...scrollRevealOption,
      delay: 500,
      });

ScrollReveal().reveal(".navbar", {
    ...scrollRevealOption,
    delay:500,
});
    
var loadingScreen = document.querySelector(".loadingScreen");

window.addEventListener('load', function() {
  loadingScreen.style.display = 'none';
})

  
 


