$(function(){
	
	///*   个人中心的  子菜单*/
	$(".center,.center_nav ").mouseenter(function(){
		$(this).css("background","#fff");
		$(".center_nav").show();
		
		$(".center_nav a").mouseenter(function(){
			$(this).css("color","red")
		})
		$(".center_nav a").mouseleave(function(){
			$(this).css("color","black")
		})
	})
	$(".center").mouseleave(function(){
		$(".center_nav").mouseleave(function(){
			$(".center").css("background","#f2f2f2");
			$(this).hide();
		})
		$(".center_nav").mouseover(function(){
			$(".center").css("background","#fff");
		})
		$(".center_nav").hide();
		$(".center").css("background","#f2f2f2");
		console.log()
	})
	///*   客户服务 的  子菜单*/
	$(".serve,.serve_nav ").mouseenter(function(){
		$(this).css("background","#fff");
		$(".serve_nav").show();
		
		$(".serve_nav a").mouseenter(function(){
			$(this).css("color","red")
		})
		$(".serve_nav a").mouseleave(function(){
			$(this).css("color","black")
		})
	})
	$(".serve").mouseleave(function(){
		$(".serve_nav").mouseleave(function(){
			$(".serve").css("background","#f2f2f2");
			$(this).hide();
		})
		$(".serve_nav").mouseover(function(){
			$(".serve").css("background","#fff");
		})
		$(".serve_nav").hide();
		$(".serve").css("background","#f2f2f2");
		console.log()
	})
	///*   更多 的  子菜单*/
	$("#more,.more_nav ").mouseenter(function(){
		$(this).css("background","#fff");
		$(".more_nav").show();
		
		$(".more_nav a").mouseenter(function(){
			$(this).css("color","red")
		})
		$(".more_nav a").mouseleave(function(){
			$(this).css("color","black")
		})
	})
	$("#more").mouseleave(function(){
		$(".more_nav").mouseleave(function(){
			$("#more").css("background","#f2f2f2");
			$(this).hide();
		})
		$(".more_nav").mouseover(function(){
			$("#more").css("background","#fff");
		})
		$(".more_nav").hide();
		$("#more").css("background","#f2f2f2");
		console.log()
	})
	//导航栏
//	$(".page a").mouseover(function(){
//		$(this).stop().animate()
//	})
    //导航栏	  #nav .subnav_sub span 
    $(".subnav_sub li").mouseenter(function(){
    	var index = $(this).index();
    	console.log(index)
    	$(".subnav_sub span").stop().animate({top:(index-1)*($(this).height()+1)},200).show();
    })
	//  显示  所有分类
	$(".subnav").mouseenter(function(){
		$(".subnav_sub").show();
	})
	$(".subnav").mouseleave(function(){
		$(".subnav_sub").mouseleave(function(){
			$(".subnav_sub").hide();
		})
		$(".subnav_sub").mouseenter(function(){
			$(".subnav_sub").show();
		})
		$(".subnav_sub").hide();
	})
	//所有  水果菜单 
	$(".subnav_sub li").last().mouseenter(function(){
//		$("..subnav_sub").mouseenter(function(){
		    $(".listfruit").show();
//		})
	})
	$(".subnav_sub li").last().mouseleave(function(){
//		$("..subnav_sub").mouseenter(function(){
		
		$(".listfruit").mouseleave(function(){
			$(".listfruit").hide();
			$(".subnav_sub").hide();
		})
		$(".listfruit").mouseenter(function(){
			$(".listfruit").show();
			$(".subnav_sub").show();
		})
		
		$(".listfruit").hide();
	})
  
	//所有  生活菜单 
$(".subnav_sub li").eq(3).mouseenter(function(){
//		$("..subnav_sub").mouseenter(function(){
		    $(".listlive").show();
//		})
	})
	$(".subnav_sub li").eq(3).mouseleave(function(){
//		$("..subnav_sub").mouseenter(function(){
		
		$(".listlive").mouseleave(function(){
			$(".listlive").hide();
			$(".subnav_sub").hide();
		})
		$(".listlive").mouseenter(function(){
			$(".listlive").show();
			$(".subnav_sub").show();
		})
		
		$(".listlive").hide();
	})
 /*商品详情*/
    $(".xia").click(function(){
    	$(".div ul").animate({left:-82})
    })
    $(".shang").click(function(){
    	$(".div ul").animate({left:0})
    })
    $(".div li").mouseenter(function(){
    	var index = $(this).index()+1;
    	$(this).addClass("red").siblings().removeClass("red");
    	$(".smallImg").attr("src","../static/img/G"+index+".jpg")
    	$(".bigImg").attr("src","../static/img/G"+index+".jpg")
    })
    //放大镜
    			_smallImg = $(".left_box");
				_smallArea = $(".smallArea");
				_bigImg = $(".bigImg");
				_bigArea = $(".bigArea");
				//放大系数(放大倍数)
				var scale = _bigImg.width() / _smallImg.width();
				//确定小区域的面积
				//_smallArea/_bigArea = _smallImg/_bigImg
				_smallArea.width(_smallImg.width()/_bigImg.width()*_bigArea.width());
				_smallArea.height(_smallImg.height()/_bigImg.height()*_bigArea.height());
			    //小区域在 小图上移动
			    _smallImg.mousemove(function(e){
			    	_smallArea.show();
			    	// 此  坐标 是要给  小区域的                               //  如果不减去 二分之一 小图宽高 那么是指向左边 顶点
			    	                                        //如果加上二分之一  那么 是给小区域增加的   小图会向有更远
			    	var _left = e.pageX-_smallImg.offset().left-_smallArea.width()/2
			    	var _top = e.pageY-_smallImg.offset().top-_smallArea.height()/2;
			    	
			    	//注意  此时的 left 是操作完之后  小区域 相对于 小图的  位移
			    	if(_left<=0){
			    		_left = 0;
			    	}else if(_left>=_smallImg.width()-_smallArea.width()){
			    		_left = _smallImg.width()-_smallArea.width();
			    	}
			    	if(_top <= 0){
			    		_top = 0;
			    	}else if(_top >= _smallImg.height()-_smallArea.height()){
			    		_top = _smallImg.height()-_smallArea.height();
			    	}
			    	
			    	_smallArea.css({left:_left,top:_top})//设置 偏移量   css
			    	
			    	_bigArea.show();
			    	_bigImg.css({left:-_left*scale,top:-_top*scale})//固定搭配  大图的位移 必须是小图位移的  相应倍数
			    	
			    	
			    })
			    //鼠标离开时  影藏
			    _smallImg.mouseleave(function(){
			    	_smallArea.hide();
			    	_bigArea.hide();
			    })
			    //商品详情的自动  跳动   购买下面的文字
//			    var see = $(".speak .visible");
			    var index=0;
			    $(".speak .visible").eq(0).show();
			    function fun(){
			    	 timer = window.setInterval(function(){
			    	$(".speak .visible").eq(index).show().siblings().hide();
			    	index++;
			    	if(index>=4){
			    		index=0;
			    	}
			      },2000);
			    }
			    fun()
			    $(".show1").mouseenter(function(){
			    	clearInterval(timer)
			    	$(this).find("span").css("background","red")
			    })
			    $(".show1").mouseleave(function(){
			    	$(this).find("span").css("background","grey")
			    	fun()
			    })
			    $(".show2").mouseenter(function(){
			    	clearInterval(timer)
			    	$(this).find("span").css("background","red")
			    })
			    $(".show2").mouseleave(function(){
			    	$(this).find("span").css("background","grey")
			    	fun()
			    })
                $(".show1").click(function(){
                	
                	index--;
                	$(".speak .visible").eq(index).show().siblings().hide();
                })
                $(".show2").click(function(){
                	
                	index++;
                	$(".speak .visible").eq(index).show().siblings().hide();
                })
                
                //json
                $.getJSON("../static/json/hot.json",function(data){
    	    for(i=0;i<data.length;i++){
    		var obj = data[i];
    		var li = $("<li></li>");
    		li.css("position","relative")
//  		var dot = $("<img src="+obj.smallimg+"/>");
//  		
//  		dot.css("position","absolute");
//  		dot.css({height:"30px",width:"30px",left:"10px",top:"10px"});
    		var right = $("<span>"+obj.right+"</span>")
    		right.css("position","absolute");
//          if(i==1 || i==2 || i==4){	
//          right.css({height:"40px",width:"40px",right:"0px",top:"0px","padding":"4px","background":"#fda438","text-align":"center","line-height":"18px","color":"#fff"});
//          }
    		var img = $("<img id="+ i +" src="+obj.img+"/>")
    		img.css({"height":"158px","width":"158px","display":"inline-block"});
    		img.css("display","block")
    		img.css("padding-top","20px")
    		var a1 = $("<a href='#'></a>")
    		
    		a1.append(img)
    		var span1 = $("<span>"+obj.packet+"</span>")
                		span1.css({"color":"red","font-weight":"700","padding-left":"10px"})
            var a2 = $("<a href='#'></a>")

            a2.append(span1);
    		var span2 = $("<span>"+obj.information+"</span>")
//  		span2.css("font-weight","700")
    		var a3 = $("<a href='#'></a>")
    		a3.append(span2)
    		var p1 = $("<p>"+obj.rated+"</p>")
    		p1.css({"padding-left":"15px","padding-top":"5px"})
    		var a4 = $("<a href='#'></a>")
    		a4.append(p1)
    		var p2 = $("<p></p>")
    		p2.css({"padding-top":"0px","padding-bottom":"0px"})
    		
    		var span6 = $("<span>"+obj.each+"</span>")
    		span6.css({"width":"auto","padding":"2px","margin-left":"18px","color":"red"})
    		
//  		if(i==0 || i==2){
//  			span6.css("border","1px dashed red")
//  		}
    		p2.append(span6);
    		var a5 = $("<a href='#'></a>")
    		a5.append(p2)
    		var span3 = $("<span>"+obj.price+"</span>")
    		span3.css({"padding-left":"15px","color":"#d22147","font-size":"18px","font-weight":"600"})
    		var span4 = $("<span>"+obj.purchase+"</span>")
    		span4.css({"padding-left":"5px","font-size":"14px","color":"#999999","text-decoration":"line-through"})
//  		var span5 = $("<span>"+obj.act+"</span>")
//  		span5.css({"margin-left":"20px","padding":"3px","background":"#d22147","color":"#fff"})
    		var span5 = $("<span>"+obj.speak+"</span>")
    		span5.css({"display":"block","padding-left":"15px","font-size":"14px","color":"#999"})
    		li.append(right,a1,a2,a3,a4,a5,span3,span4,span5)
    		$(".listing_div1_ul").append(li);
    		$(".listing_div1_ul").css("font-size","12px")
    		
    	}
    	
    })
             //右边的购物车
             $(".car ul li").mouseenter(function(){
             	var index = $(this).index()+1;
             	$(this).find("img").attr("src","../static/img/fix"+4*index+".png")
             	$(".car ul li").mouseleave(function(){
             		$(this).find("img").attr("src","../static/img/fix"+index+".png")
             	})
             })
             //右边的购物车   滚动定位   

             
				var _carTop = $(".car").offset().top;
//				console.log("==: " + _box2Top);
				
				$(window).scroll(function(){
					
					var _scrollTop = $(document).scrollTop();
//					console.log("--: " + _scrollTop);
					
					//判断box2的top和_scrollTop的大小
					//吸顶
					if (_scrollTop >= _carTop) {
						$(".car").css({"position":"fixed", top:52,left:1160,}); 
					}
					//还原
					else {
						$(".car").css({"position":"absolute",top:52,right:-58});
					}
					//记录购物车
					
				//点击加入购物车    
				//飞到购物车
				
				
				})

				 var sum = 1;
				 var sums;
//				 $(".car ul li span").html()
                var offset = $(".cost_span2").offset(); 
                
				$(".cost_span2").click(function(e){
				
					//将当前点击的商品加入购物车(使用cookie存储商品信息)
//					var goodsId = $(this).parent().find(".goodsId").html(); //商品ID
					var goodsName = $(".right_top").find("span").eq(2).html(); //商品名称
					var goodsPrice = $(".price_content .span2").find("i").html(); //商品价格
					var oldPrice = $(".price_content .span4").find("i").html();
					var goodsSrc = $(".fanye .red").find("img").attr("src");
					var goodsDress = $(".fuwu .fuwu_span1").find("b").html();
					//如果是第一次加入购物车(购物车中还没有商品, cookie中没有cart), 那就给一个空的数组
					//如果是第二次加入购物车(购物车中已经存在商品, cookie中存在cart), 那就在原来保存在cookie中的商品基础上添加新的商品 
					//console.log( typeof $.cookie("cart") ); //string 
					var goodsList = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
					
					//先判断购物车中是否存在我即将要添加的商品
					var isExists = false; //表示是否存在相同商品
					for (var i=0; i<goodsList.length; i++) {
						sum = goodsList[i].num
						//如果存在相同的商品, 则把数量++, 不需要重新添加新的商品
						if (goodsName == goodsList[i].name) {
							goodsList[i].num++;
							isExists = true; //表示存在相同商品
//							sum = goodsList[i].num;
						}
//						sum =  sum + goodsList[i].name
//						if (goodsName !== goodsList[i].name) {
////							sum = sum+goodsName.num;
////							isExists = true; //表示存在相同商品
//                                 sum++;
//						}
//					var 	zong += goodsList[i].he
//					console.log(zong)
					}
//					console.log(goodsList.length)
					//如果不存在相同商品, 则添加新商品
					if (!isExists) {
						//添加一个新商品到购物车
						var goods = {
//							id: goodsId,
							name: goodsName,
							price: goodsPrice,
							old: oldPrice,
							src: goodsSrc,
							dress: goodsDress,
							num: 1,
							he:sum
						}
						goodsList.push(goods);
					}
					
					$.cookie("cart", JSON.stringify(goodsList), {expires:22, path:"/"});
					console.log( $.cookie("cart") );
					
					$(".car ul li span").html(sum)
					if($(".car ul li span").html()==""){
							$(".car ul li span").css("display","none")
						}else if($(".car ul li span").html()!=""){
							$(".car ul li span").css("display","block")
						}
						
//	
						
						
						
						
//						$("#addToCart").click(function(e){
					var endoffset = $(".car ul li .car_span2").offset();
					var flyer = $("<img class='u-flyer'/>");
					flyer.attr("src", "../static/img/bigzoom1.jpg");
					flyer.fly({
						start: {
							left: offset.left+$(".cost_span2").width()/2,
							top: (offset.top-$(document).scrollTop()),
							width: 90,
							height: 90				 		
						},
						end: {
							left: endoffset.left+20,
							
							top: endoffset.top-$(document).scrollTop()+20,
							width: 0,
							height: 0 
						},
						onEnd: function(){
//							console.log("加入购物车成功!")
						}
						
					});
//					console.log($(".u-flyer").width())//可以输出
//                   if($(".u-flyer").width()==0){
                       	  $(".car ul li .car_span3").show();
                       	  $(".car ul li .car_span3").animate({top:"20px",opacity:"0"},1000,function(){
                       	  	$(".car ul li .car_span3").css({"position":"absolute","top":"52px","opacity":"1","display":"none"})
                       	  })
//                   var cars = $.cookie("cars");  	 
//                     if(cars){
//                     	cars = JSON.parse($.cookie("cars"));
//                     	for(var i=0;i<cars.length;i++){
//                     	 sums += cars.num
//                     	 console.log(cars)
//                     	}
//                     }
//                     sum = sums
//                      console.log(sum)

//                  $.cookie("cars", JSON.stringify(cars), {expires:22, path:"/"});
})	                    
                         
//              $(".car ul li .car_span3").hide();
//                     	  $(".car ul li .car_span3").animate({top:"-20px",opacity:"1"},0)       

//            $(".car ul li .car_span3").animate({top:"0px",opacity:"1"},2000)
               //点击返回顶部
                $(".car ul li").eq(3).click(function(){
                	$("body,html").animate({scrollTop:0},500);
                	return false;
                })
              
              //点击购物车  跳转  购物车页面
              $(".car ul li").eq(1).click(function(){
              	location.href = "catr.html"
              })
              
              
              
          $.getJSON("../static/json/hot.json",function(data){
    	    for(i=0;i<data.length;i++){
    		var obj = data[i];
    		var li = $("<li></li>");
    		li.css("position","relative")
//  		var dot = $("<img src="+obj.smallimg+"/>");
//  		
//  		dot.css("position","absolute");
//  		dot.css({height:"30px",width:"30px",left:"10px",top:"10px"});
    		var right = $("<span>"+obj.right+"</span>")
    		right.css({"position":"absolute"});
    		
//  		right.attr("background")
//  		console.log(right.attr("background"))
//          if(i==1 || i==2 || i==4){	
//          right.css({height:"40px",width:"40px",right:"0px",top:"0px","padding":"4px","background":"#fda438","text-align":"center","line-height":"18px","color":"#fff"});
//          }
    		var img = $("<img src="+obj.img+"/>")
    		img.css({"height":"158px","width":"158px"});
    		img.css("display","block")
    		img.css("padding-top","20px")
    		var a1 = $("<a href='#'></a>")
    		
    		a1.append(img)
    		var span1 = $("<span>"+obj.packet+"</span>")
                		span1.css({"color":"red","font-weight":"700","padding-left":"10px"})
            var a2 = $("<a href='#'></a>")

            a2.append(span1);
    		var span2 = $("<span>"+obj.information+"</span>")
//  		span2.css("font-weight","700")
    		var a3 = $("<a href='#'></a>")
    		a3.append(span2)
    		var p1 = $("<p>"+obj.rated+"</p>")
    		p1.css({"padding-left":"15px","padding-top":"5px"})
    		var a4 = $("<a href='#'></a>")
    		a4.append(p1)
    		var p2 = $("<p></p>")
    		p2.css({"padding-top":"0px","padding-bottom":"0px"})
    		
    		var span6 = $("<span>"+obj.each+"</span>")
    		span6.css({"width":"auto","padding":"2px","margin-left":"18px","color":"red"})
    		
//  		if(i==0 || i==2){
//  			span6.css("border","1px dashed red")
//  		}
    		p2.append(span6);
    		var a5 = $("<a href='#'></a>")
    		a5.append(p2)
    		var span3 = $("<span>"+obj.price+"</span>")
    		span3.css({"padding-left":"15px","color":"#d22147","font-size":"18px","font-weight":"600"})
    		var span4 = $("<span>"+obj.purchase+"</span>")
    		span4.css({"padding-left":"5px","font-size":"14px","color":"#999999","text-decoration":"line-through"})
//  		var span5 = $("<span>"+obj.act+"</span>")
//  		span5.css({"margin-left":"20px","padding":"3px","background":"#d22147","color":"#fff"})
    		var span5 = $("<span>"+obj.speak+"</span>")
    		span5.css({"display":"block","padding-left":"15px","font-size":"12px","color":"#999"})
    		li.append(right,a1,a2,a3,a4,a5,span3,span4,span5)
    		$(".hot").append(li);
    		$(".hot").css("font-size","12px")
    		
    	}
    	
    })
      
      //最后的点击
      $(".right_nav").find("span").eq(0).addClass("active")
      $(".right_nav").find("span").mouseenter(function(){
      	var index = $(this).index();
      	if(index<=3){
      	$(this).addClass("active").siblings("span").removeClass("active")
      	$(this).siblings("b").stop().animate({left:(index-1)*$(this).width()},200)
        }    
      })
      //最后的 吸顶
      var _top = $(".right_nav").offset().top;
      $(window).scroll(function(){
      	var _scrollTop = $(document).scrollTop();
      	if(_scrollTop>=_top){
      		$(".right_nav").css({"position":"fixed","top":"0px"})
      	}else{
      		$(".right_nav").css("position","relative")
      	}
      })
      
      
      
      
      
      
      
      
      

})