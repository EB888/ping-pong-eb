// BACK OF HOUSE
function pingPong(input){
  var ping = "Ping";
  var pong = "Pong";
  var pingPongVar = "Ping-Pong";
  var pingPongArray =[]
  var i = 1;
  while  (i <= input){
    if (i % 15 === 0){
      pingPongArray.push(pingPongVar);
      i++
    }else if(i % 5 === 0){
      pingPongArray.push(pong);
      i++
    }else if(i % 3 === 0){
      pingPongArray.push(ping);
      i++
    }else{
      pingPongArray.push(i);
      i++
    }
  }
  return pingPongArray;
}

// FRONT OF HOUSE
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
