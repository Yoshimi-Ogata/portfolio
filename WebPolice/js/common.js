$(function () {
	//ナビゲーション開閉
	if($("#navControl a").attr("class") == "close"){
			$(".l-header__nav").css("display","none");
		}

	/*slide menu*/
	$("#navControl a").click(function(){
		if($(this).attr("class") == "close"){
			$(".l-header__nav").slideDown("fast");
			$(this).removeClass();
			$(this).addClass("active");
		}
		else{
			 $(".l-header__nav").slideUp("fast");
			 $(this).removeClass();
			 $(this).addClass("close");
		}
		return false;
	});

});

//アニメーション
$(function() {
  $('.in').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeIn');
    } else {

    }
  });

});
$(function() {
  $('.up').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeInUp');
    } else {


    }
  });
});
$(function() {
  $('.left').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeInLeft');
    } else {

    }
  });

});

$(function() {
  $('.right').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeInRight');
    } else {

    }
  });

});


$(function() {
  $('.flipX').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('flipInX');
    } else {
    //表示領域から出た時

    }
  });

});

$(function() {
  $('.flipY').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('flipInY');
    } else {

    }
  });

});