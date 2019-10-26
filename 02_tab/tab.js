'use strict';

$('#js-tabs li a').on('click', function(e){
  e.preventDefault();
  //▼タブの切り替えを定義 
  var $tabs = $('#js-tabs li');
  var $tab = $(this).parent('li');
  // ▼コンテンツ切り替えの定義
  var $index = $tab.data('index');
  var $contents = $('.js-contents');
  
  // ▼タブ切り替え挙動
  $tabs.removeClass('is-active');
  $tab.addClass('is-active');
  // ▼コンテンツの切り替え挙動
  $contents.addClass('is-hide');
  $contents.eq($index).removeClass('is-hide');
});

$('#js-tabs2 li a').on('click', function(e){
  e.preventDefault();
  //▼タブの切り替えを定義 
  var $tabs = $('#js-tabs2 li');
  var $tab = $(this).parent('li');
  // ▼コンテンツ切り替えの定義
  var $index = $tab.data('index');
  var $contents = $('.js-contents2');
  
  // ▼タブ切り替え挙動
  $tabs.removeClass('is-active');
  $tab.addClass('is-active');
  // ▼コンテンツの切り替え挙動
  $contents.addClass('is-hide');
  $contents.eq($index).removeClass('is-hide');
});

// $('.js-tabs li a').on('click', function(e){
//   e.preventDefault();
//   //▼タブの切り替えを定義 
//   var $tabs = $('.js-tabs li');
//   var $tab = $(this).parent('li');
//   var $div = $(this).parent('.hoge');
  
//   // ▼コンテンツ切り替えの定義
//   var $index = $tab.data('index');
//   var $contents = $div.children('.js-contents');
  
//   // ▼タブ切り替え挙動
//   $tabs.removeClass('is-active');
//   $tab.addClass('is-active');
//   // ▼コンテンツの切り替え挙動
//   $contents.addClass('is-hide');
//   $contents.eq($index).removeClass('is-hide');
// });