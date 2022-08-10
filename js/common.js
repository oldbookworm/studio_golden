 

 // Зависимость высоты блока от ширины
 $(document).ready(function(){

 $(function(){
  $('.resize_block').height($('.resize_block').width()/2);

  $(window).resize(function(){
    $('.resize_block').height($('.resize_block').width()/2);
  });
});

})


// Переключение кнопки меню с бургера на крестик
jQuery(document).ready(function(){

    $(function() {
    	$(".header__mobile-nav-btn").click(function() {
    		
        	if ($(".main-nav").hasClass("mobile-btn--closed")) {
        		$(".main-nav").removeClass("mobile-btn--closed");
    			$(".main-nav").addClass("mobile-btn--opened");
        	}

        	else {
        		$(".main-nav").removeClass("mobile-btn--opened");
    			$(".main-nav").addClass("mobile-btn--closed");

        	}

        })
    });
  });

// Открытие и закрытие мобильного меню
jQuery(document).ready(function(){

    $(function() {
    $(".mobile-nav-btn").click(function() {
    $(".mobile-menu").toggleClass("js-show-mobile");
    $(".main-nav").toggleClass("js-mobile-menu-styles");
        })
    });
  });

// slick слайдер
$(document).ready(function(){
  $('.clients_list').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
  	responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });
});



ScrollReveal().reveal('.rev', slideUp);