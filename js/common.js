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