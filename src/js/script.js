
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function(){
	
	var height = $(window).height();
	var firstscreen = $('.firstscreen');
 	var width = $(window).width();
	
    if($(window).width() >= 743 ){
      firstscreen.height(height);
    }
 	

	
 	var rrr =	width / height;
 	console.log(rrr);
 	
 	if( width / height <= 1.4){
        if(width > 960){
            $('.main-2__title').css({
            "paddingTop" : "75px"
            });

            $('.main-1__logo').css({
                "paddingTop" : "90px"
            });
        }

 	}
	

 	$('.main-2__round').click(function (event) {

 		event.preventDefault();

 		$('body,html').animate({scrollTop: height}, 1500);

 	});

  if(!isMobile.any()){ //====условине для десктопа

    //=============паралакс=============

    $(window).scroll(function(){
      var st = $(this).scrollTop();

      //=============main-1 main-2=============
      $('.main-1__paralax').css({
        "transform" : "translate(0%, -" + st /12 + "%"
      });

      $('.main-1').css({
        "transform" : "translate(0%, " + st /12 + "%"
      });



      
      //=============main-3=============

      var main3Top = $('.main-3').offset().top;

      if( st >= main3Top){

        $('.main-3__body').css({
          "transform" : "translate(0%, " + (st - main3Top) /70 + "%"
        });

      }else{
        $('.main-3 .container').css({
          "transform" : "translate(0%, 0%)"
        });
      }

      //=============main-4=============

      var main4Top = $('.main-4').offset().top;
      var r = 300;
      if( st >= main4Top - r){
        
        $('.main-4__images').css({
          "transform" : "translate(0%, -" + (st - main4Top + r) /70 + "%"
        });

      }else{
        $('.main-4__images').css({
          "transform" : "translate(0%, 0%)"
        });
      }

      //=============main-5=============

      var main5Top = $('.main-5').offset().top;
      var r = 500;
      if( st >= main5Top - r){
        
        $('.main-5__left').css({
          "transform" : "translate(0%, " + (st - main5Top + r) /70 + "%"
        });
        $('.main-5__img').css({
          "transform" : "translate(0%, -" + (st - main5Top + r) /30 + "%"
        });

      }else{
        $('.main-5__left, .main-5__img').css({
          "transform" : "translate(0%, 0%)"
        });
      }

      //=============main-6=============

      var main6Top = $('.main-6').offset().top;
      var r = 500;
      if( st >= main6Top - r){
        
        $('.main-6__top').css({
          "transform" : "translate(0%, " + (st - main6Top + r) /60 + "%"
        });
        $('.main-6__bot').css({
          "transform" : "translate(0%, -" + (st - main6Top + r) /50 + "%"
        });

      }else{
        $('.main-6__top, .main-6__bot').css({
          "transform" : "translate(0%, 0%)"
        });
      }

      //=============main-8=============

      var main8Top = $('.main-8').offset().top;
      var r = 500;
      if( st >= main8Top - r){
        
        $('.main-8').css({
          "transform" : "translate(0%, -" + (st - main8Top + r) /90 + "%"
        });
        $('.main-8__right, .main-8__left').css({
          "transform" : "translate(0%, -" + (st - main8Top + r) /70 + "%"
        });

      }else{
        $('.main-8, .main-8__right, .main-8__left').css({
          "transform" : "translate(0%, 0%)"
        });
      }

      //=============main-15=============

      var main15Top = $('.main-15').offset().top;
      var r = 500;
      if( st >= main15Top - r ){
        $('.main-15__body, .main-15__bot').css({
          "transform" : "translate(0%, -" + (st - main15Top + r) /60 + "%"
        });
        
        

      }else{
         $('.main-15__body, .main-15__bot').css({
          "transform" : "translate(0%, 0%)"
        });
      }
    });
  }
  //=============WOW=============
  var wow = new WOW(

      {

        boxClass:     'wow',      // класс анимируемого элемента

        offset:       100,        // расстояние до элемента, когда анимация начинает работать

        mobile:       false       // разрешение анимации в мобильной версии

      }

    );

    wow.init();
 });