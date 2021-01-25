$().ready(function(){

    $(".course-filter>.xxk").click(function(){

      //点击course-filter li标签隐藏。course-list-2>.row下的内容

        $(".course-list-2>.raw").hide().removeClass("show");

    //通过 .index()方法获取元素下标，从0开始，赋值给某个变量

        var index = $(this).index();

    //让内容框的第 _index 个显示出来，其他的被隐藏

       $(".course-list>.raw").eq($(this).index()).show().siblings().hide();

    //改变选中时候的选项框的样式，移除其他几个选项的样式

	 $(this).addClass("swiper-slide-thumb-active").siblings().removeClass("swiper-slide-thumb-active");

     $(".swiper-slide-active .yh_hide").css({display:"none"});

    });
	

});

$().ready(function(){

    $(".course-filter-2>.xxy").click(function(){

      //点击course-filter li标签隐藏。course-list-2>.row2下的内容

        $(".course-list-2>.raw2").hide().removeClass("show");

    //通过 .index()方法获取元素下标，从0开始，赋值给某个变量

        var index = $(this).index();

    //让内容框的第 _index 个显示出来，其他的被隐藏

       $(".course-list-2>.raw2").eq($(this).index()).show().siblings().hide();

    //改变选中时候的选项框的样式，移除其他几个选项的样式

	 $(this).addClass("swiper-slide-thumb-active").siblings().removeClass("swiper-slide-thumb-active");

     $(".swiper-slide-active .zjyh_hide").css({display:"none"});

    });
	

});

$(".yh_more").click(function(){
    $(".swiper-slide-active .ulheight li").css({display:"block"});
	
    $(this).css({display:"none"});
	$(".swiper-slide-active .yh_hide").css({display:"block"});
     galleryTopcase.updateAutoHeight(200);
  })
  
$(".yh_hide").click(function(){
    $(".swiper-slide-active .ulheight li").css({display:"none"});
	
    $(this).css({display:"none"});
	$(".swiper-slide-active .yh_more").css({display:"block"});
     galleryTopcase.updateAutoHeight(200);
  })
$(".zjyh_more").click(function(){
    $(".swiper-slide-active .zjulheight li").css({display:"block"});
	
    $(this).css({display:"none"});
	$(".swiper-slide-active .zjyh_hide").css({display:"block"});
     galleryTopcase.updateAutoHeight(200);
  })
  
$(".zjyh_hide").click(function(){
    $(".swiper-slide-active .zjulheight li").css({display:"none"});
	
    $(this).css({display:"none"});
	$(".swiper-slide-active .zjyh_more").css({display:"block"});
     galleryTopcase.updateAutoHeight(200);
  })
    /*点击复制微信号*/
    function copywx(){
        const range = document.createRange();
        range.selectNode(document.getElementById('copy_content'));
        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        alert("复制成功！");
    }
    /*点击出现弹框*/
    function showwx(){
        var ss=document.getElementById('myshow');
        ss.style.display='block';
    }
    /*关闭弹窗*/
    function closeshow(){
        var ss=document.getElementById('myshow');
        ss.style.display='none';
    }