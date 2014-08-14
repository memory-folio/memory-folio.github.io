/*parallax*/
$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.background_hero').css('top',(0-(scrolled*.5))+'px');
}
/* INTRO_FALC */
$(document).ready(function() {
  $("").css("display", "none");
  $("").fadeIn(10000);
  $("").css("display", "none");
  $("").fadeIn(10000);
  });
$(document).onreadystatechange