$(document).ready(function() {
  $("#de1").hide();
  $("#de2").hide();
  $("#de3").hide();

  $("#intro").animate({'opacity': '1'}, 500);

  function resetAll() {
    $("#de1").hide();
    $("#de2").hide();
    $("#de3").hide();
    $("#im1").show();
    $("#im2").show();
    $("#im3").show();
  }

  $(".interactive-element").click(function() {
    resetAll();
    switch ($(this).attr("id")) {
      case "im1":
        $(this).hide();
        $("#de1").show();
      break;

      case "im2":
        $(this).hide();
        $("#de2").show();
      break;

      case "im3":
        $(this).hide();
        $("#de3").show();
      break;

      case "de1":
        $(this).hide();
        $("#im1").show();
      break;

      case "de2":
        $(this).hide();
        $("#im2").show();
      break;

      case "de3":
        $(this).hide();
        $("#im3").show();
      break;
    }
  });

  // code referenced from http://jsfiddle.net/tcloninger/e5qaD/
  $(window).scroll(function() {
    $('.hidden-element').each( function(i){
      var boo = $(this).offset().top + $(this).outerHeight() / 2;
      var bow = $(window).scrollTop() + $(window).height();

      if( bow > boo ){
        $(this).animate({'opacity': '1'}, 800);
      }
    });
  });
});
