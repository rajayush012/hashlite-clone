// (function ($) {
//   $(document).ready(function(){
    
// 	// hide .navbar first
// 	$(".navbar").hide();
	
// 	// fade in .navbar
// 	$(function () {
// 		$(window).scroll(function () {
//             // set distance user needs to scroll before we fadeIn navbar
// 			if ($(this).scrollTop() > 100) {
// 				$('.navbar').fadeIn();
// 			} else {
// 				$('.navbar').fadeOut();
// 			}
// 		});

	
// 	});

// });
//   }(jQuery));


// $(document).on("scroll", function () {
//     if
//             ($(document).scrollTop() > 150) {
//         $(".navbar-sticky").addClass("fixed-top");
//     } else
//     {
//         $(".navbar-sticky").removeClass("fixed-top");
//     }
// });



// $(document).ready(function () {
//     $("#navB li a").on("click", navbarBtnClick);
//     $(document).on("click", closeToggle);
//   });
  
//   /* close toggle if it's open and clicked outside toggle */
//   function closeToggle(event) {
//     var clickover = $(event.target);
//     var _opened = $(".navbar-collapse").hasClass("in");
//     if (_opened === true && !clickover.hasClass("navbar-toggle")) {
//         $("button.navbar-toggle").click();
//     }
//   }
  
//   function navbarBtnClick(event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
  
//       // Prevent default anchor click behavior
//       event.preventDefault();
  
//       // Store hash (#)
//       var hash = this.hash;
  
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
  
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if statement
//     $(".navbar-collapse").collapse('hide');

//     (function($) {          
//       $(document).ready(function(){                    
//           $(window).scroll(function(){                          
//               if ($(this).scrollTop() > 200) {
//                   $('#nbar').fadeIn(500);
//               } else {
//                   $('#nbar').fadeOut(500);
//               }
//           });
//       });
//   })(jQuery);
//   }