$(document).ready(function(){
  var pingPong = function(input){
    var i = 1;
    while  (i <= input){
      if (i % 15 === 0){
        // console.log("Divisible by 15")
        $("ul#outputul").append("<li>" + "---> $" + "Ping-Pong" + "</li>");
        i++
      }else if(i % 5 === 0){
        $("ul#outputul").append("<li>" + "---> $" + "Pong" + "</li>");
        i++
      }else if(i % 3 === 0){
        $("ul#outputul").append("<li>" + "---> $" + "Ping" + "</li>");
        i++
      }else{
        // console.log(i)
        $("ul#outputul").append("<li>" + "---> $" + i + "</li>");
        i++
      }
    }
  }
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    $("ul#outputul").empty();
    var userInput = parseInt($("#pingpong").val());
    pingPong(userInput);
  });
});
