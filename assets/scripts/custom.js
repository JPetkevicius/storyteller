"use strict";

console.log("JS WORKS");
// BURGER MENU + NAVLIST
let navSlide = () => {
let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav-links");
let navLinks = document.querySelectorAll(".nav-links li")

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = ""

        } else {
            link.style.animation = `navLinkFade 0s ease forwards ${index / 7 + 0.8}s`; 
        }

    });
burger.classList.toggle("toggle");

});

    
}
navSlide();

// BURGER MENU + NAVLIST END

// FEATURED ARTICLES START
$(document).ready(function(){
    $(".owl-one").owlCarousel();
  });

  $('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
// FEATURED ARTICLES END

$(document).ready(function(){
    $(".owl-two").owlCarousel();
  });

  $('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:6,
            nav:true,
            loop:true,
            
        }
    }
})

// PORTFOLIO START

$('[data-fancybox="Art"]').fancybox({
    animationDuration: 700,
    loop: true,
    
   
});

$(document).ready(function(){
    $(".owl-three").owlCarousel();
  });

  $('.owl-three').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true,
            
        }
    }
})

$(document).ready(function(){
    $(".owl-four").owlCarousel();
  });

  $('.owl-four').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
            
        },
        600:{
            items:2,
            nav:true
            
        },
        1024:{
            items:3,
            nav:true,
            loop:true,
            center: true
            
        }
    }
})

