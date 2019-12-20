jQuery(document).ready(function() {
  'use strict';
//***************************
// FlexSlider Function
//***************************
jQuery('.flexslider').flexslider({
    animation: "slide",
    prevText: "<i class='fa fa-arrow-left'></i>",
    nextText: "<i class='fa fa-arrow-right'></i>",
    start: function(slider) {
        jQuery('body').removeClass('loading');
    }
});

//***************************
// ProGress Function
//***************************
    jQuery('#as-goal').goalProgress({
        goalAmount: 600,
        currentAmount: 400,
        textBefore: 'Raised: $',
    });

//***************************
// Owl Carousel
//***************************
    var owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 5,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });

//***************************
// PrettyPhoto Function
//***************************
    jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();

    jQuery(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'light_square',
        slideshow: 3000,
        autoplay_slideshow: false
    });
    jQuery(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast',
        slideshow: 10000,
        hideflash: true
    });

    jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
        custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
        changepicturecallback: function() {
            initialize();
        }
    });



//***************************
// Event Toggle Function
//***************************
    jQuery('#btn-one').on("click", function() {
        jQuery("#map-one").slideToggle("slow");
    });

    jQuery('#btn-two').on("click", function() {
        jQuery("#map-two").slideToggle("slow");
    });

    jQuery('#btn-three').on("click", function() {
        jQuery("#map-three").slideToggle("slow");
    });

//***************************
// Click to Top Button
//***************************
  jQuery('.back-top-btn').on("click", function() {
      jQuery('html, body').animate({
          scrollTop: 0
      }, 800);
      return false;
  });

//***************************
// Donation Active Function
//***************************
  jQuery('.as-donation-section ul li').on('click', function() {
      jQuery('li.as-current').removeClass('as-current');
      jQuery(this).addClass('as-current');
  });

//***************************
// Countdown Function
//***************************
  jQuery(function() {
      var austDay = new Date();
      austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
      jQuery('#eventCountdown').countdown({
          until: austDay
      });
      jQuery('#year').text(austDay.getFullYear());
  });

//***************************
// WordCounter Function
//***************************
  jQuery(".word-count").counterUp({
      delay: 10,
      time: 1000
  });

//***************************
// Responsive Menu Function
//***************************
  jQuery(function() {
      jQuery('#tray-menu').asmenu();
  });

});

//***************************
// ContactForm Function
//***************************
$('.myform').on('submit',function(){
    // Add text 'loading...' right after clicking on the submit button. 
    $('.output_message').text('Loading...'); 
     
    var form = $(this);
    $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: form.serialize(),
        success: function(result){
            if (result == 'success'){
                $('.output_message').html('<span class="success-msg"><i class="fa fa-check-circle"></i> Message Sent successfully!</span>');
            } else if (result == 'validate'){
                $('.output_message').html('<span class="spam-error-msg"><i class="fa fa-warning"></i> You have already sent message. Try again after one hour.</span>');
            } else {
                $('.output_message').html('<span class="error-msg"><i class="fa fa-times-circle"></i> Error Sending email!</span>');
            }
        }
    });
     
    // Prevents default submission of the form after clicking on the submit button. 
    return false;   
});