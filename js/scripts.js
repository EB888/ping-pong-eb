// BACKEND LOGIC
function pingPong(input){
  var ping = "Ping";
  var pong = "Pong";
  var pingPongVar = "Ping-Pong";
  var pingPongArray =[]
  var i = 1;

  while  (i <= input){
    if (i % 15 === 0){
      pingPongArray.push(pingPongVar);
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
  return pingPongArray;
}



// FRONT END LOGIC
$(document).ready(function(){
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    //reset ul element before re-running ping pong function
    $("ul#outputul").empty();
    //Hide 666 Picture
    $(".outputdiv").hide();
    //Hide Ping Pong Picture
    $("#pinginThePong").hide();

    var userInput = parseInt($("#pingpong").val());

    if (userInput === 666){
      $(".outputdiv").slideDown(1000);
    }else{
      $("#pinginThePong").slideDown(500);

      var pingPongResult = pingPong(userInput);
      pingPongResult.forEach(function(number) {
        $("ul#outputul").append("<li>" + number + "</li>");
      });
    }

  });

});
