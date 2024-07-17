// Scrolling Animation
$(document).ready(function(){
   $('a[href^="#"]').bind('click.smoothscroll', function (e) {
       e.preventDefault();
       var target = this.hash,
       $target = $(target);
       $('html, body').stop().animate({
         'scrollTop': $target.offset().top-40
       }, 900, 'swing', function () {
           window.location.hash = target;
       });
   });
});

// Animation for Contact Buttons
$("#mailLogo").hover(function(){
   $(this).css("width", "170px");
   $(this).css("position", "relative");
   $(this).css("bottom", "20px");
}, function(){
   $(this).css("width", "150px");
   $(this).css("position", "static")
});

$("#linkLogo").hover(function(){
   $(this).css("width", "170px");
   $(this).css("position", "relative");
   $(this).css("bottom", "20px");
}, function(){
   $(this).css("width", "150px");
   $(this).css("position", "static")
});

$("#gitLogo").hover(function(){
   $(this).css("width", "170px");
   $(this).css("position", "relative");
   $(this).css("bottom", "20px");
}, function(){
   $(this).css("width", "150px");
   $(this).css("position", "static")
});

// Projects Hover turning them B&W
$(".p1").hover(function(){
  $("#project1").css("webkit-filter", "grayscale(100%)");
  $("#project1").css("filter", "grayscale(100%)");
  $("#project1").css("border-radius", "100%");
}, function(){
  $("#project1").css("webkit-filter", "grayscale(0%)");
  $("#project1").css("filter", "grayscale(0%)");
  $("#project1").css("border-radius", "20%");
});

$(".p2").hover(function(){
  $("#project2").css("webkit-filter", "grayscale(100%)");
  $("#project2").css("filter", "grayscale(100%)");
  $("#project2").css("border-radius", "100%");
}, function(){
  $("#project2").css("webkit-filter", "grayscale(0%)");
  $("#project2").css("filter", "grayscale(0%)");
  $("#project2").css("border-radius", "20%");
});

$(".p3").hover(function(){
  $("#project3").css("webkit-filter", "grayscale(100%)");
  $("#project3").css("filter", "grayscale(100%)");
  $("#project3").css("border-radius", "100%");
}, function(){
  $("#project3").css("webkit-filter", "grayscale(0%)");
  $("#project3").css("filter", "grayscale(0%)");
  $("#project3").css("border-radius", "20%");
});

$(".p4").hover(function(){
  $("#project4").css("webkit-filter", "grayscale(100%)");
  $("#project4").css("filter", "grayscale(100%)");
  $("#project4").css("border-radius", "100%");
}, function(){
  $("#project4").css("webkit-filter", "grayscale(0%)");
  $("#project4").css("filter", "grayscale(0%)");
  $("#project4").css("border-radius", "20%");
});

$(".p5").hover(function(){
  $("#project5").css("webkit-filter", "grayscale(100%)");
  $("#project5").css("filter", "grayscale(100%)");
  $("#project5").css("border-radius", "100%");
}, function(){
  $("#project5").css("webkit-filter", "grayscale(0%)");
  $("#project5").css("filter", "grayscale(0%)");
  $("#project5").css("border-radius", "20%");
});

$(".p6").hover(function(){
  $("#project6").css("webkit-filter", "grayscale(100%)");
  $("#project6").css("filter", "grayscale(100%)");
  $("#project6").css("border-radius", "100%");
}, function(){
  $("#project6").css("webkit-filter", "grayscale(0%)");
  $("#project6").css("filter", "grayscale(0%)");
  $("#project6").css("border-radius", "20%");
});

// For dropdown on Mobile not closing
$(document).on('click','.navbar-collapse.in',function(e) {
   if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
       $(this).collapse('hide');
   }
});