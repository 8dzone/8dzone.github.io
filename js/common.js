//导航
$(function () {
	var screenHeight,
		screenWidth,
		popMenuHeight,
		$Win = $(window),
		bannersHeight,
		oneHeight,
		myscroll1,
		quarter,
		bFlag = true,
		preventDefault,
		oneWidth;
	preventDefault = function (e) {
		e.preventDefault();
	}
	var menuBtns = $(".menuBtn");

	//弹窗菜单导航js	
	var popMenu = {
		openMenu: function () {
			screenHeight = $(window).height();
			screenWidth = $(window).width();
			headerHeight = $("#header").outerHeight();
			popMenuHeight = screenHeight - headerHeight;
			oneHeight = $("#popMenu").find("li").height();
			quarter = parseInt(screenWidth / 4, 10);
			$("#popMenu").find("li").css({ width: screenWidth + 'px' });
			$("#popMenu").find("li a").css({ width: quarter - 1 + 'px', height: oneHeight - 1 + 'px' });
			$("#popMenu").css({ width: '100%', height: popMenuHeight + 'px', position: 'absolute', left: 0, top: headerHeight + 'px', zIndex: 11000, overflow: 'hidden', backgroundColor: 'rgba(255,255,255,1)' });

		},
		init: function () {
			popMenu.openMenu();
			$(".menuItems").each(function (index, element) {
				if ($(this).find("li").length >= 2) {
					$(this).css({ height: oneHeight * 2 + 'px', overflow: 'hidden' })
				} else {
					$(this).css({ height: oneHeight + 'px', overflow: 'hidden' })
				}
			});
			if (bFlag) {
				$("#popMenu").hide();
				$("#popMenu").slideDown(600);
				bFlag = false;
				// setTimeout(function () { myscroll1=new IScroll("#popMenu",{mouseWheel:true,preventDefault:false,useTransform:true})},600);
				$("body").css({ overflow: "hidden" })
				if (document.addEventListener) {
					document.addEventListener('touchmove', preventDefault, false);
				}
				else {
					document.attachEvent('ontouchmove', preventDefault);
				}

			}
			else {
				$("#popMenu").slideUp('fast');
				bFlag = true;
				popMenu.showMore();
				menuBtns.removeClass('active').children("span").html("展开更多");
				$("body").css({ overflow: "auto" })
				document.removeEventListener('touchmove', preventDefault, false);
				if (document.removeEventListener) {
					document.removeEventListener('touchmove', preventDefault, false);
				}
				else {
					document.attachEvent('ontouchmove', preventDefault);
				}

			}
		},
		reset: function () {
			popMenu.openMenu();
			//popMenu.refresh();
		},
		resize: function () {

			popMenu.reset();

		},
		refresh: function () {
			setTimeout(function () {
				myscroll1.refresh();
			}, 0);
		},
		//点击展开按钮js
		showMore: function () {
			menuBtns.each(function (i) {
				var openBtn = true;
				$(this).on('click', function () {
					var _this = $(this);
					var curIndex = _this.index(this);
					var liSize = 0;
					liSize = $(this).parent().find("ul li").length;
					if (openBtn) {
						_this.addClass("active").children("span").html("收起");
						_this.parent().find("ul").stop().animate({ height: liSize * oneHeight + 'px' }, 400, function () {
							popMenu.refresh();
							openBtn = false;

						});


					} else {
						_this.removeClass("active").children("span").html("展开更多");
						_this.parent().find("ul").stop().animate({ height: 2 * oneHeight + 'px' }, 400, function () {
							popMenu.refresh();
							openBtn = true;

						});

					}
				})
			})
		}

	};
	$(window).resize(function () {
		calWidth(); popMenu.resize();
	});
	popMenu.showMore();
	$(".showMenu").on("click", function () {
		$(this).toggleClass('hideMenu');
		popMenu.init();
		popMenu.reset();
	});
	$(".hideMenu").on("click", function () {
		$(this).toggleClass('showMenu');
		popMenu.init();
		popMenu.reset();
	});
})

/*banner*/
$(function () {
    var swiperbanner = new Swiper('.swiper-containerbanner', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
	delay: 3000,
	disableOnInteraction: false,
  },
  pagination: {
	el: '.swiper-paginationbanner',
	clickable: true,
  },
});
})
/*活动切换*/
$(function () {
  var swiperbanner = new Swiper('.swiper-containerhd', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
	delay: 4000,
	disableOnInteraction: false,
  },
  pagination: {
	el: '.swiper-paginationhd',
	clickable: true,
  },
});
})
//限时秒杀

$(function () {
var swiperspike = new Swiper('.box.swiper-container', {
	  slidesPerView: 2.5,
	  spaceBetween: 0,
	  freeMode: true,
	});
})
/*新组合*/
$(function () {
var swiperbeauty = new Swiper('.swiper-containerbeauty', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
	nextEl: '.swiper-button-nextbeauty',
	prevEl: '.swiper-button-prevbeauty',
  },
  pagination: {
	el: '.swiper-paginationbeauty',
	clickable: true,
  },
});
})
$(function(){
        //cd_type为0时，是每天天倒计时，为1时，是时间倒计时
		$(".count_down").countDown({'custom_date':'2022/12/31 23:59:59',cd_type:0});
})
$(function(){
$(".gotop_new").click(function(){
			$('body,html').animate({scrollTop:0},500);
		});
})		