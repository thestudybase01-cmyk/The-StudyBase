// The StudyBase Website Script


// Smooth scrolling effect

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});




// Simple scroll animation

window.addEventListener("scroll", function(){

    const cards = document.querySelectorAll(".card, .features div");


    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.2;


        if(position < screenPosition){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });


});




// Welcome message in browser console

console.log(
"The StudyBase | Study here. Succeed everywhere."
);