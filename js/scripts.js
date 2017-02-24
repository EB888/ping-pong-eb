$(document).ready(function(){
  var userInput = parseInt($("#pingpong").val());
  var pingPong = function(input){
    var i = 1;
    while  (i <= input){
      if (i % 15 === 0){
        // console.log("Divisible by 15")
        $("ul#output").append("<li>" + "Ping-Pong" + "</li>");
        i++
      }else if(i % 5 === 0){
        $("ul#output").append("<li>" + "Pong" + "</li>");
        i++
      }else if(i % 3 === 0){
        $("ul#output").append("<li>" + "Ping" + "</li>");
        i++
      }else{
        // console.log(i)
        $("ul#output").append("<li>" + i + "</li>");
        i++
      }
    }
  }
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    pingPong(userInput);
  });
});
