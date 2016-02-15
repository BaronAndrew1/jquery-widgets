$(function() {
'use strict';

$("#input1").keypress(function(){
 if($("#input1").val() <= 1){
   $("#container").append("<br> <input type='text' value='' id='input2'>");
 }
 });


 $("#input2").keypress(function(){
  if($("#input2").val() <= 1){
    $("#container").append("<br> <input type='text' value='' id='input2'>");
  }
  });

});
