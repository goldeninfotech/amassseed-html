$(document).ready(function(){
    // Initialize the first carousel
    $("#videos-view").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: false,
        navText: [
            '<img src="assets/images/icons/curosel_arrow_left.png" alt="arrow-left">', '<img src="assets/images/icons/curosel_arrow_right.png" alt="arrow-right">'
        ],
        navContainer: '.home_videos_slider .custom-nav',
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Initialize the second carousel
    $("#clint-testimony").owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },

        }
    });
});
