var searchFunc = function(path, search_id, content_id) {
	'use strict'; //使用严格模式
	$.ajax({
		url: path,
		dataType: "xml",
		success: function( xmlResponse ) {
			// 从xml中获取相应的标题等数据
			var datas = $( "entry", xmlResponse ).map(function() {
				return {
					title: $( "title", this ).text(),
					content: $("content",this).text(),
					url: $( "url" , this).text()
					};
					}).get();
					//ID选择器
					var $input = document.getElementById(search_id);
					var $resultContent = document.getElementById(content_id);
					$input.addEventListener('input', function(){
						var str='<ul class=\"search-result-list\">';
						var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
						$resultContent.innerHTML = "";
						if (this.value.trim().length <= 0) {
							return;
							}
							// 本地搜索主要部分
							datas.forEach(function(data) {
								var isMatch = true;
								var content_index = [];
								var data_title = data.title.trim().toLowerCase();
								var data_content = data.content.trim().replace(/<[^>]+>/g,"").toLowerCase();
								var data_url = data.url;
								var index_title = -1;
								var index_content = -1;
								var first_occur = -1;
								// 只匹配非空文章
								if(data_title != '' && data_content != '') {
									keywords.forEach(function(keyword, i) {
										index_title = data_title.indexOf(keyword);
										index_content = data_content.indexOf(keyword);
										if( index_title < 0 && index_content < 0 ){
											isMatch = false;
										} else {
											if (index_content < 0) {
												index_content = 0;
											}
											if (i == 0) {
												first_occur = index_content;
											}
										}
									});
								}
								// 返回搜索结果
								if (isMatch) {
								//结果标签
                      str += "<li><a href='"+ data_url +"' class='search-result-title' target='_blank'>"+ data_title +"</a>";
					  var content = data.content.trim().replace(/<[^>]+>/g,"");
					  if (first_occur >= 0) {
						  // 拿出含有搜索字的部分
						  var start = first_occur - 20;
						  var end = first_occur + 30;
						  if(start < 0){
							  start = 0;
							  }
							  if(start == 0){
								  end = 15;
								  }
								  if(end > content.length){
									  end = content.length;
									  }
									  var match_content = content.substr(start, end);
									  // 列出搜索关键字，定义class加高亮
									  keywords.forEach(function(keyword){
										  var regS = new RegExp(keyword, "gi");
										  match_content = match_content.replace(regS, "<strong class=\"search-keyword\">"+keyword+"</strong>");
										  })
										  str += "<p class=\"search-result\">" + match_content +"...</p>"
										  }
										  }
										  })
										  $resultContent.innerHTML = str;
										  })
										  }
										  }) }; var path = "../search.xml"; searchFunc(path, 'local-search-input', 'local-search-result');
        window['LocalConst'] = {
          

        

            //pjax
            IS_PJAX: '1',
            IS_PAJX_COMMENT: '1',
            PJAX_ANIMATE: 'default',
            PJAX_TO_TOP: '0',
            TO_TOP_SPEED: '80',

            PAGE_ANIMATE: '',
            THEME_COLOR: '14',
            THEME_COLOR_EDIT: 'white-white-white',
            THEME_HEADER_FIX: '1',
            THEME_ASIDE_FIX: '1',
            THEME_ASIDE_FOLDED: '',
            THEME_ASIDE_DOCK: '',
            THEME_CONTAINER_BOX: '1',
            THEME_HIGHLIGHT_CODE: '1',
            THEME_MATHJAX: '',
            THEME_TOC: '1',
            THEME_DARK_MODE: 'auto',
            THEME_DARK_MODE_VALUE: 'auto',
            SHOW_SETTING_BUTTON: '1',

            THEME_DARK_HOUR: '18',
            THEME_LIGHT_HOUR: '6',
            THUMB_STYLE: 'normal',
            AUTO_READ_MODE: '',




        };		
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