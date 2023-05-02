// Owl Carousel Script
$(document).ready(function(){
    $('.cardsCarousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots: false,
        center: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

// Owl Carousel Trigger Events Script
var owl = $('.owl-carousel');
// Go to the next item
$('.rightArrowdiv').on("click", function() {
    owl.trigger('next.owl.carousel', [800]);
});
// Go to the previous item
$('.leftArrowdiv').on("click", function() {
    owl.trigger('prev.owl.carousel', [800]);
});