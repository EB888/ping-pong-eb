$(document).ready(function(){
  var userInput = parseInt($("#pingpong").val());
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    $("ul#output").append("<li>" + userInput + "</li>");
  })
})
