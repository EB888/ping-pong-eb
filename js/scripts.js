$(document).ready(function(){
  var userInput = parseInt($("#pingpong").val());
  var i = 1

  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    while  (i <= userInput){
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
  })
})
