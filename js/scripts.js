$(document).ready(function(){
  var userInput = parseInt($("#pingpong").val());
  var i = 1

  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    while  (i <= userInput){
      if (i / 15 === 0){
        $("ul#output").append("<li>" + "Ping-Pong" + "</li>");
      }
      console.log(i)
      $("ul#output").append("<li>" + i + "</li>");
      i++
    }
  })
})
