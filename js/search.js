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
					url: $( "url" , this).text(),
                    category: $( "category" , this).text()
					};
					}).get();
					//ID选择器
					var $input = document.getElementById(search_id);
					var $resultContent = document.getElementById(content_id);
					$input.addEventListener('input', function(){
						var str='<div class=\"grids-main py-5\"><div class=\"container py-lg-4\"><div class=\"w3l-populohny-grids\">';
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
                                var data_category = data.category;
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
                      str += " <div class='item vhny-grid'><div class='box16 mb-0'><a href='"+ data_url +"'  target='_blank'><figure><img class='img-fluid' src='"+ data_category +"'></figure><div class='box-content'><h3 class='title'>"+ data_title +" </h3>";
					  var content = data.content.trim().replace(/<[^>]+>/g,"");
					  if (first_occur >= 0) {
						  // 拿出含有搜索字的部分
						  var start = first_occur - 20;
						  var end = first_occur + 20;
						  if(start < 0){
							  start = 0;
							  }
							  if(start == 0){
								  end = 30;
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
										  str += " </div></a></div></div>"
										  }
										  }
										  })
										  $resultContent.innerHTML = str;
										  })
										  }
										  }) }; var path = "/search.xml"; searchFunc(path, 'local-search-input', 'local-search-result');