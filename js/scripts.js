$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const coffee = $("select#coffee").val();
    const post = $("input[name='post']:checked").val();
    const birdFan = $("input[type=range]").val();
    const email = $("input[name='valediction']:checked").val();
    const color = $("#color").val();

    if (birdFan > 3) {
      $("#result4").show();
    }
      
    event.preventDefault();
    
  });
});