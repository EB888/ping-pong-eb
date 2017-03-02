// BACKEND LOGIC
$(document).ready(function(){
  var ping = "Ping";
  var pong = "Pong";
  var pingPong = "Ping-Pong";
  var pingPongArray =[];

  function pingPong(input){
    var i = 1;
    while  (i <= input){
      if (i % 15 === 0){
        pingPongArray.push(pingPong);
        // $("ul#outputul").append("<li>" + pingPong + "</li>");
        i++
      }else if(i % 5 === 0){
        pingPongArray.push(pong);
        // $("ul#outputul").append("<li>" + Pong + "</li>");
        i++
      }else if(i % 3 === 0){
        pingPongArray.push(ping);
        // $("ul#outputul").append("<li>" + Ping + "</li>");
        i++
      }else{
        pingPongArray.push(i);
        // $("ul#outputul").append("<li>" + i + "</li>");
        i++
      }
    }
  }
// FRONT END LOGIC
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    $("ul#outputul").empty(); //reset ul element before re-running ping pong function
    $(".outputdiv").hide(); // Hide 666 Picture
    $("#pinginThePong").hide(); //Hide Ping Pong Picture
    var userInput = parseInt($("#pingpong").val());
    // if (userInput === 666){
    //   $(".outputdiv").slideDown(1000);
    // }else{
      pingPong(userInput);
    //   $("#pinginThePong").slideDown(500);
    pingPongArray.forEach(function(number) {
      $("ul#outputul").append("<li>" + number + "</li>");
    });



    }
  });
});
