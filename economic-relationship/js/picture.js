$(document).ready(function() {
  $("#de1").hide();
  $("#de2").hide();
  $("#de3").hide();

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
});
