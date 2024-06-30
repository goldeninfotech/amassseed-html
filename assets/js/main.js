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


  //Video Popup
//   $(".modal_video_btn").modalVideo({
//     youtube: {
//       controls: 1,
//       nocookie: true,
//     },
//   });