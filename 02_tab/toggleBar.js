'use strict';

$(function(){
  $(".js-toggle-bar").on("click",function(){
    $(this).next().slideToggle();
  });
});