// slider

$('.carouselSlider').slick({
  infinite: true,
  variableWidth: true,
  centerPadding: '70px',
  dots: true,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  arrows: false,
});

$('.fadeLeva a').click(function() {
$('.carouselSlider').slick("slickPrev");
});

$('.fadePrava a').click(function() {
$('.carouselSlider').slick("slickNext");
});



$(".jakToFungujeInner2 ul li h3").click(function() {
  if ($(this).parent().hasClass("zavreno")) {
    $(this).parent().removeClass("zavreno");
  }

  else {
    $(this).parent().addClass("zavreno");
  }
});



$('.jakToFungujeMobile').slick({
  infinite: false,
  variableWidth: true,
  centerPadding: '70px',
  dots: true,
  autoplay: false,
  centerMode: true,
  arrows: false,
});


var pocitac = 0;


$('.jakToFungujeMobile').slick("slickNext");

$(window).scroll(function() {

  if (pocitac == 0) {

     var hT = $('.jakToFungujeMobile').offset().top,
         hH = $('.jakToFungujeMobile').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();

     if (wS > (hT+hH-wH)) {
       pocitac++;

       $('.jakToFungujeMobile').slick("slickPrev");
     }
  }
});

//jak to funguje 1

$('.text1').click(function() {
  if ($(this).hasClass("aktivniText") != true) {
    $('.aktivniText').removeClass("aktivniText");
    $(this).addClass("aktivniText");

    $('.aktivniFoto').removeClass("aktivniFoto");
    $(".fungujeFoto1").addClass("aktivniFoto");
  }
});

$('.text2').click(function() {
  if ($(this).hasClass("aktivniText") != true) {
    $('.aktivniText').removeClass("aktivniText");
    $(this).addClass("aktivniText");

    $('.aktivniFoto').removeClass("aktivniFoto");
    $(".fungujeFoto2").addClass("aktivniFoto");
  }
});

$('.text3').click(function() {
  if ($(this).hasClass("aktivniText") != true) {
    $('.aktivniText').removeClass("aktivniText");
    $(this).addClass("aktivniText");

    $('.aktivniFoto').removeClass("aktivniFoto");
    $(".fungujeFoto3").addClass("aktivniFoto");
  }
});


// origo


setTimeout(function(){
  $(".oslovenychLidi").html(500000);
  $(".rokyZkusenosti").html(3);
  $(".uspesnostHledani").html(74);
  $(".kocicichChlupu").html(8632);
}, 1);


$(".otazka h3").click(function() {
  if ($(this).parent().hasClass("zavreno")) {
    $(this).parent().removeClass("zavreno");
  }

  else {
    $(this).parent().addClass("zavreno");
  }
});



$(".mobilniMenuOtevrit").click(function() {
  $(".mobilniMenu").removeClass("fadeInDown animated").removeClass("fadeOutUp animated").addClass("animated" + ' fadeInDown');
  $(".mobilniMenu").toggle();
});

$(".mobilniMenuZavrit").click(function() {
  $(".mobilniMenu").removeClass("fadeOutUp animated").removeClass("fadeInDown animated").addClass("animated" + ' fadeOutUp');

  setTimeout(function() {
    $(".mobilniMenu").toggle();
  }, 1000);
});

$(".mobilniMenu ul li a").click(function() {
  $(".mobilniMenu").removeClass("fadeOutUp animated").removeClass("fadeInDown animated").addClass("animated" + ' fadeOutUp');

  setTimeout(function() {
    $(".mobilniMenu").toggle();
  }, 1000);
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 120
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
