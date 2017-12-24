$(function() {
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:7500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  $("nav.desktop-menu ul li, nav.mobile-menu ul li").click(function(){
    $("nav.desktop-menu ul li").removeClass();
    $("nav.mobile-menu ul li").removeClass();
    $(this).addClass('active');
  })
  
  $(".search-button").click(function(){
    $("nav.desktop-menu ul li").fadeOut(300);
    $(this).css("display","none");
    $(".search-button-close").fadeIn(300);
    $(".search-inp").fadeIn(300).animate({width: "50%",opacity:"1"}, 300);
  })
  
  $(".search-button-close").click(function(){
    $("nav.desktop-menu ul li").fadeIn(300);
    $(this).css("display","none");
    $(".search-button").fadeIn(300);
    $(".search-inp").animate({width: "30%",opacity:"0"}, 300).fadeOut();
  })
  
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".mobile-menu").slideToggle();
  })
  
   if($(window).width()<350){
      $(".search-button").click(function(){
      $("nav.desktop-menu ul li").fadeOut(300);
      $(this).css("display","none");
      $(".search-button-close").fadeIn(300);
      $(".search-inp").fadeIn(300).animate({width: "30%",opacity:"1"}, 300);
    })
   }


});
