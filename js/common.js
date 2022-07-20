 

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