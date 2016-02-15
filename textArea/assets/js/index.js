$(function() {
'use strict';

var characters = 100;

$(".textArea").attr('maxlength',characters);

$('.textArea').keyup(function(){

$("#counter").html("Characters Remaining: " + (characters - $(this).val().length));
  });

});
