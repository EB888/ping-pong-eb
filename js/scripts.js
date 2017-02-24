// BACKEND LOGIC
$(document).ready(function(){
function pingPong(input){
  var i = 1;
  while  (i <= input){
    if (i % 15 === 0){
      // console.log("Divisible by 15")
      $("ul#outputul").append("<li>" + "---> $ " + "Ping-Pong" + "</li>");
      i++
    }else if(i % 5 === 0){
      $("ul#outputul").append("<li>" + "---> $ " + "Pong" + "</li>");
      i++
    }else if(i % 3 === 0){
      $("ul#outputul").append("<li>" + "---> $ " + "Ping" + "</li>");
      i++
    }else{
      // console.log(i)
      $("ul#outputul").append("<li>" + "---> $ " + i + "</li>");
      i++
    }
  }
}
// FRONT END LOGIC
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    $("ul#outputul").empty(); //reset ul element before re-running ping pong function
    $(".outputdiv").hide();
    $("#pinginThePong").hide();
    var userInput = parseInt($("#pingpong").val());
    if (userInput === 666){
      $(".outputdiv").slideDown(1000);
    }else{
      pingPong(userInput);
      $("#pinginThePong").slideDown(500);
    }
  });
});
