$(document).ready(function() {
  $("form#survey").submit(function(event) {
    const coffee = $("select#coffee").val();
    const post = $("input[name='post']:checked").val();
    const birdFan = $("input[type=range]").val();
    const email = $("input[name='valediction']:checked").val();
    const color = $("#color").val();

    if (coffee === 'black' || post === 'malone' || color === 'yellow' || color === 'black') {

      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();

    } else if ( coffee === 'cream' || post === 'hardcore' || color === 'red' || email === 'bye2') {

      $("#result2").show();
      $("#result1").hide();
      $("#result3").hide();
      $("#result4").hide();

    } else if (coffee === 'sugar' || post === 'office' || email === 'bye3' || birdFan < 3 || color === 'blue' || color === 'purple') {

      $("#result3").show();
      $("#result2").hide();
      $("#result1").hide();
      $("#result4").hide();


    } else if (birdFan > 3 || coffee === 'tea' || post === 'mortem' || email === 'bye4' || color === 'orange' || color === 'green') {

      $("#result4").show();
      $("#result3").hide();
      $("#result2").hide();
      $("#result1").hide();
    }
      
    event.preventDefault();
    
  });
});