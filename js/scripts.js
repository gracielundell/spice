$(document).ready(function(){
  $("form").submit(function(event) {
    var value = parseInt($("select#sell1").val());
    var total = value;
    console.log("value = ", value);

     if (total === 1) {
       $("#spicegirl").remove();
      $(".baby").show();
      }
      else if (total === 2) {
        $("#spicegirl").remove();
        $(".sporty").show();
      }
      else if (total === 3) {
        $("#spicegirl").remove();
        $(".scary").show();
      }
      else if (total === 4) {
        $("#spicegirl").remove();
        $(".posh").show();
      }
      else if (total === 5) {
        $("#spicegirl").remove();
        $(".ginger").show();
      }
      event.preventDefault();
    });
  });
