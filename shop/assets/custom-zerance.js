$(window).resize(function() {
  if ($(window).width() < 1200) {
    if ($('#tryptique-carousel').hasClass('off')) {
      $('#tryptique-carousel').removeClass('off');
    }
    carousel_tryptique();
  } else {
    if (!$('#tryptique-carousel').hasClass('off')) {
      $('#tryptique-carousel').addClass('off').data("owlCarousel");
      $('#tryptique-carousel').find('.owl-stage-outer').children(':eq(0)').unwrap();
    }
  }
  if ($(window).width() < 640) {
    $('.FeaturedProduct').each(function() {
      $(this).addClass('Carousel__Cell');
    });
    $('.Timeline__Nav').insertBefore('.Timeline__ListItem');
    $(".carousel-product--responsive").each(function() {
      $(this).removeClass("Carousel__Cell");
      $(this).css('width', '80%');
      $(this).css('margin', 'auto');
	});
  } else {
    $('.FeaturedProduct').each(function() {
      $(this).removeClass('Carousel__Cell');
    });
    $('.test').removeClass("main-carousel");
    $(".carousel-product--responsive").each(function() {
      $(this).addClass("Carousel__Cell");
      $(this).css('width', '');
      $(this).css('margin', '');
    });
  }
});


$( document ).ready(function() {
  carousel_tryptique();
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    watchCSS: true
  });
  if ($(window).width() < 640) {
    $('.Timeline__Nav').insertBefore('.Timeline__ListItem');
    setTimeout(function() {
      $(".carousel-product--responsive").each(function() {
        $(this).removeClass("Carousel__Cell");
        $(this).css('width', '80%');
        $(this).css('margin', 'auto');
	  });
    }, 1000);
  }
});


function carousel_tryptique(){
  if ( $(window).width() <= 1200) {
    $("#tryptique-carousel").owlCarousel({
      autoPlay: 5000,
      items : 1,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
      pagination: false,
	  navigation: true,
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
  }
  if ( $(window).width() <= 640) {
  	$('.FeaturedProduct').each(function() {
      $(this).addClass('Carousel__Cell');
    });
  }
}

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

var delete_cookie = function(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

$(document).ready(function() {
  if (window.location.href.indexOf("pages/result") > -1) {
    console.log("ca");
    $.ajaxSetup({ cache: false });
  }
});

$(document).ready(function() {

        $('[data-read-more]').insertAfter( '.SectionHeader__Description_truncate' );

        $('[data-read-more]').click(function (event) {
          event.preventDefault();
          var description = document.querySelector('.SectionHeader__Description_truncate');
          console.log(description.style.height)
          if (description.style.height === ''){
            description.style.height = 'auto';
          } else if (description.style.height === 'auto'){
            description.style.height = '';
          }
          else{
            description.style.height = '92px';
          }

          $(this).text($(this).text() == 'Réduire' ? 'Lire la suite' : 'Réduire');
        });
      });

// Set height header to product form sticky
$(document).ready(function() {
  var headerHeight = $('#section-header').height();
  $('.product_header_sticky').css('top', headerHeight);
});
$(window).resize(function(){
  var headerHeight = $('#section-header').height();
  $('.product_header_sticky').css('top', headerHeight);
});

$(".footer_text_content-trigger").click(function(){
  $(".footer_text_content").toggle();
});
$(".footer_recyclage_content-trigger").click(function(){
  $(".footer_recyclage_content").toggle();
});


$('[data-peau]').on('change', function() {
  _learnq.push(['type_de_peau', 'this.value']);
  console.log(_learnq);
});
