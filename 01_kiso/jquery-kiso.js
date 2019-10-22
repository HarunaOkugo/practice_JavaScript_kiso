'use strict';

  // step01:id属性にstep01とつくものの文字色を赤色にする
  $(function(){
    $("#step01").css("color","red");
  });

  // step02:id属性にstep02-firstが設定されたli要素の文字を赤色にする
  $(function(){
    $("li#step02-first").css("color","red");
  });

  // step03:class属性にstep03-secondが設定されたli要素の文字を赤色にする
  $(function(){
    $(".step03-second").css("color","red");
  });

  // step04:class属性がstep04-firstの要素の内側にあるstrong要素の文字を赤色にする
  $(function(){
    $(".step04-first strong").css("color","red");
  });

  // step05:id属性step05の中のli要素内に含まれる全ての要素の文字を赤色にする
  $(function(){
    $("#step05 li *").css("color","red");
  });

  // step06:class属性がstep06-firstとstep06-thirdのli要素の文字を赤色にする
  $(function(){
    $(".step06-first,.step06-third").css("color","red");
  });

  // step07:id属性がstep07のli要素の子要素のstrong要素のみを赤文字にする
  $(function(){
    $("#step07 li > strong").css("color","red");
  });

  // step08:id属性がstep08-secondの要素の次に出現するli要素を赤文字にする
  $(function(){
    $("#step08-second + li").css("color","red");
  });

  // step09:class属性がstep09の中の2つのul要素のそれぞれ最初のli要素のみを赤文字にする
  $(function(){
    $(".step09 li:first-child").css("color","red");
  });

  // step10:class属性がstep10のul要素の中の最初以外のli要素を全て赤文字にする
  $(function(){
    $(".step10 li:not(:first-child)").css("color","red");
  });

  // step11:id属性がstep11の中のid属性がstep11-secondのli要素以降が全て赤文字になる
  $(function(){
    $("#step11 #step11-second ~ li").css("color","red");
  });

  // step12:id属性step12の中の空のli要素を赤文字にする(点を赤くする))
  $(function(){
    $("#step12 li:empty").css("color","red");
  });

  // step13:id属性step13の中の上から3番目のliのみ赤文字にする
  $(function(){
    $("#step13 li:nth-child(3)").css("color","red");
  });

  // step14:id属性step14の中の上から3の倍数番目のliのみ赤文字にする
  $(function(){
    $("#step14 li:nth-child(3n)").css("color","red");
  });

  // step15:id属性step15の中の上から偶数番目のliのみ赤文字にする
$(function(){
  $("#step15 li:nth-child(even)").css("color","red");
});

  // step16:id属性step16の中の上から奇数番目のliのみ赤文字にする
  $(function(){
    $("#step16 li:nth-child(odd)").css("color","red");
  });

  // step17:class属性がstep17の要素中の最後のli要素のみを赤文字にする
  $(function(){
    $("#step17 li:last-child").css("color","red");
  });

  // step18:id属性STEP18の上から2番目のdt要素を赤文字にする
  $(function(){
    $("#step18 dt:nth-of-type(2)").css("color","red");
  });

  // step19:id属性STEP19の下から3番目のdt要素を赤文字にする
  $(function(){
    $("#step19 dd:nth-last-of-type(3").css("color","red");
  });

  // step20:id属性STEP20の最初のdd要素を赤文字にする
  $(function(){
    $("#step20 dd:first-of-type").css("color","red");
  });

  // step21:id属性STEP21の最後のdd要素を赤文字にする

$("#js-btn").on("click", function(){
  console.log(this);
});


  // タブの説明
  $('#js-tabs li a').on('click', function(e){
    // e＝eventの略
    e.preventDefault();
    // preventDefault=タグのデフォの挙動をoffにする
    var $tabsItems = $('#js-tabs li');
    // └#js-tabsのliのDOM(=htmlタグ)を取得して変数$tabsItemsに代入する
    var $tabsItem = $(this).parent('li');
    // └this=clickされた時のDOM(aタグ)＿parent(親)のliタグを取得
    var index = $tabsItem.data('index');
    // └#js-tabs li'のdata-indexが0(または1,2)の時、index=0
    var $contents = $('.js-tabs-contents');
    // └.js-tabs-contents(タブの内容)＝変数contents
  
    $tabsItems.removeClass('is-active');
    // クリック前にactiveになっているものを一度『削除(remove)』する

    $tabsItem.addClass('is-active');
    // クリックされた所にis-activeを『追加』する
  
    // ▼以下コンテンツの話
    $contents.addClass('is-hide');
    // is-hideを一度全てのコンテンツにつける
    
    $contents.eq(index).removeClass('is-hide');
    // コンテンツのindex番目のis-hideを削除
  });
  
  