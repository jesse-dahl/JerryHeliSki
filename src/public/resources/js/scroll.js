$('#right-button').click(function() {
    event.preventDefault();
    $('#scroll').animate({
      scrollLeft: "+=300px"
    }, "slow");
 });
 
   $('#left-button').click(function() {
    event.preventDefault();
    $('#scroll').animate({
      scrollLeft: "-=300px"
    }, "slow");
 });