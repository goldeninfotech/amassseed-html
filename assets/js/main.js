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
    // Initialize the Third carousel
    $("#product-details").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: false,
      navText: [
        '<img src="assets/images/icons/curosel_arrow_left.png" alt="arrow-left">', '<img src="assets/images/icons/curosel_arrow_right.png" alt="arrow-right">'
      ],
      navContainer: '.additional_products_slider .custom-nav',
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

    // Initialize the fourth carousel
    $("#news_slider_view").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: true,
        autoplay: false,
        navText: [
            '<img src="assets/images/icons/curosel_arrow_left.png" alt="arrow-left">', '<img src="assets/images/icons/curosel_arrow_right.png" alt="arrow-right">'
        ],
        navContainer: '.news_slider .custom-nav',
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
      });

    // Initialize the fifth carousel
    $("#others_products_view").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: true,
        autoplay: false,
        navText: [
            '<img src="assets/images/icons/curosel_arrow_left.png" alt="arrow-left">', '<img src="assets/images/icons/curosel_arrow_right.png" alt="arrow-right">'
        ],
        navContainer: '.others_products .custom-nav',
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
      });

    //   Initialize the sixth carousel
    $("#clint-partners").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        navText: [
            '<img src="assets/images/icons/curosel_arrow_left.png" alt="arrow-left">', '<img src="assets/images/icons/curosel_arrow_right.png" alt="arrow-right">'
        ],
        navContainer: '.others_products .custom-nav',
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
      });
});

  //Gallery
  $(".popup_gallery").magnificPopup({
    type: "image",
    delegate: "a",
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    callbacks: {
        elementParse: function(item) {
          console.log(item.el);
            // Check if the clicked element has the 'video_popup' class
            if ($(item.el).hasClass("video_popup")) {
                // Set type to iframe for video popups
                item.type = "iframe";
                item.iframe = {
                    patterns: {
                        youtube: {
                            index: "youtube.com/",
                            id: "v=",
                            src: "//www.youtube.com/embed/%id%?autoplay=1",
                        },
                        vimeo: {
                            index: "vimeo.com/",
                            id: "/",
                            src: "//player.vimeo.com/video/%id%?autoplay=1",
                        },
                        gmaps: {
                            index: "//maps.google.",
                            src: "%id%&output=embed",
                        },
                    },
                };
            } else {
                // Default type is image for non-video popups
                item.type = "image";
                item.tLoading = "Loading image #%curr%...";
                item.mainClass = "mfp-img-mobile";
                item.image = {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                };
            }
        },
    },
});

// Sticky Header
// Get the elements
var navbar = document.getElementById("navbar");
var mybutton = document.getElementById("top_button");
var sticky = navbar.offsetTop;

// When the user scrolls the page, execute both functions
window.onscroll = function() {
  scrollFunction();
  stickyHeader();
};

function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky-nav");
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




$(document).ready(function(){
    $("#searchButton").click(function(){
        $("#searchContainer").toggle();
        $("#searchInput").focus(); // Focus on the input field when it appears
        $("#close-toggle").toggle(); // Toggle close button along with content
    });

    $("#close-toggle").click(function(){
        $("#searchContainer").toggle();
        $("#close-toggle").toggle(); // Hide the close button itself
    });
});

