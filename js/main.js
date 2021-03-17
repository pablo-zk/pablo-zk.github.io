(function ($) {
  "use strict";

  $(window).scroll(function(){
      if ($(window).scrollTop() > 56){
          $("#menu , #menu-desarrollo").css({"background-color": "#fff"});
          $("#menu a").css({"color": "#000"});
          $("#menu , #menu-desarrollo").css({"box-shadow": "0 0 5px rgba(0,0,0,0.4)"});
      } else {
          $("#menu , #menu-desarrollo").css({"background-color": "transparent"});
          $("#menu a").css({"color": "#fff"});
          $("#menu , #menu-desarrollo").css({"box-shadow": "0 0 0 rgba(0,0,0,0)"});
      }
  });

  $(window).load(function () {
    $(".overlay").click(function(){
       $(".popup_body").show();
    });
    $(".popup_body").click(function(){
        $(".popup_body").hide();
    });
    $(".boton_cerrar").click(function(){
        $(".popup_body").hide();
    });
});


})(jQuery);

