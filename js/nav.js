(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        pW = 640,
        recalc = function() {
            var cW = docEl.clientWidth < 640 ? docEl.clientWidth : 640;
            if (!cW) {
                return;
            }
            docEl.style.cssText = 'font-size:'+20 * (cW / pW) + 'px !important';
        };
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);

$(function(){
window.nav_open=0;
//导航DOM
var $header_memu_left=$("#header_memu_left");
//导航左侧半透明背景
var $header_nav_box=$("#header_nav_box");
var $header_nav_left=$("#header_nav_left");
//二级向下菜单
var $header_nav_title=$(".header_nav_title:not(.header_link)");
var $header_nav_title_h2=$header_nav_title.find("h2");
var $header_nav_li=$(".header_nav_li");
var $header_nav_li_h3=$header_nav_li.find("h3").not(".not");

$header_memu_left.click(function(){
	$header_nav_left.bind("click",function(event){
		event.stopPropagation();
	});
	NavOpenToggle(window.nav_open);
});

//导航打开
function NavOpenToggle(int){
	if (!int) {
		$header_nav_box.show();
		$header_nav_left.animate({"left":"0px"});
		window.nav_open=1;
	}else{
		$header_nav_left.animate({"left":"-100%"},function(){30,
			$header_nav_box.hide();
		});
		window.nav_open=0;
	}
}

$(".header_nav_top_close").click(function()
{
	$header_nav_left.animate({"left":"-100%"},function(){30,
			$header_nav_box.hide();
		});
	window.nav_open=0;
	})
//导航二级点击
$header_nav_title_h2.click(function(){
	$this_id=$header_nav_title_h2.index(this);
	if ($(this).is(".on")) {
		$header_nav_title_h2.removeClass("on");
		$header_nav_title_h2.next(".header_nav_li").slideUp();
	}else{
		$header_nav_title_h2.removeClass("on");
		$(this).toggleClass("on");
		$header_nav_title_h2.next(".header_nav_li").slideUp();
		$header_nav_title_h2.eq($this_id).next(".header_nav_li").slideToggle();
	}
});

$header_nav_li_h3.click(function(){
	$this_id=$header_nav_li_h3.index(this);
	if ($(this).is(".on")) {
		$header_nav_li_h3.removeClass("on");
		$header_nav_li_h3.next("dl").slideUp();
	}else{
		$header_nav_li_h3.removeClass("on");
		$(this).toggleClass("on");
		$header_nav_li_h3.next("dl").slideUp();
		$header_nav_li_h3.eq($this_id).next("dl").slideToggle();
	}
});

//点击半透明背景 关闭菜单
$header_nav_box.bind({
	"click":function(event){
		NavOpenToggle(window.nav_open);
		event.stopPropagation();
	},
})
/*
$("#header_nav_top").click(function(){
	NavOpenToggle(window.nav_open);
})
*/

//品牌中心导航
if ($("#header_menu_link").length) {
	$header_menu_link=$("#header_menu_link");
	$header_menu_link.find("li:gt(3)").hide();
	$("#header_menu_link_open").click(function(){
		$header_menu_link.find("li:gt(3)").slideDown(function(){
			$("#header_menu_link_open").slideUp();
		});
	});
}
//判断REM是否加载
//原因：处理后续新加专题出现的BUG
//在DOM加载完成之前进行判断
/*if(typeof(is_rem) == "undefined" && document.getElementsByTagName("html")[0].style.fontSize==""){
	$("head").append("<link>");
	css = $("head").children(":last");
	css.attr({
	rel: "stylesheet",
	type: "text/css",
	href: "/static/style/norem.css"
	});
}*/



})



