$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

// Slider owl carousel 
$('.cusom-slider').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    margin:0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// Service owl carousel
$('.service-wrapper').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        567:{
            items: 2
        },
        768: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});
// Deals owl carousel
$('.deal-left-slider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// Offer owl carousel
$('.offer-slider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 2
        },
        1000: {
            items: 1
        }
    }
});
// Apple
$('.apple').owlCarousel({
    loop: false,
    nav: false,
    margin: 10,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
// Blog
$('.blog').owlCarousel({
    loop: false,
    nav: false,
    margin: 30,
    responsive: {
        0: {
            items: 2
        },
        567:{
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
// Client slider
$('.client-slider').owlCarousel({
    loop: false,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 8
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop: false,
    nav: false,
    margin: 30,
    responsive: {
        0: {
            items: 2
        },
        567:{
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});

// Mobile menu 
function openNav() {
    document.getElementById("mobile-nav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
  }