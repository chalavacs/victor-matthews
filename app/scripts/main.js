

  TweenLite.set('.svgLogo', {visibility:'visible'});

  var tl = new TimelineLite();

  tl.from('.svgLogo', 1, {
    drawSVG: '50% 50%',
    delay:0.33,
    ease:Linear.easeIn
  })

  .fromTo('#logo', 1, {fill:'none'}, {fill:'#e2e2e2'})

  .staggerFromTo('.animate__fadeUp', .4, {
      y: '48',
  }, {
      y: '0',
      autoAlpha:1,
      ease: Power1.easeOut
  }, .1)

  var svgLogo = $('#logo');

//
// On DOM Ready
//
$(function(){

  var svgLogo = $('#logo');

  // On Mouse Move
  $('body').mousemove(function(e) {

    $(svgLogo).parallax( 90, e );
    $('.animate__fadeUp').parallax ( -90, e );

  });


});

// GSAP Parallax
$.fn.parallax = function(resistance, mouse) {
    var $el = $(this);
    TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
        y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
    });
};

