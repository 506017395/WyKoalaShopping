$(function () {
    ///*   个人中心的  子菜单*/
    $(".center,.center_nav ").mouseenter(function () {
        $(this).css("background", "#fff");
        $(".center_nav").show();

        $(".center_nav a").mouseenter(function () {
            $(this).css("color", "red")
        })
        $(".center_nav a").mouseleave(function () {
            $(this).css("color", "black")
        })
    })
    $(".center").mouseleave(function () {
        $(".center_nav").mouseleave(function () {
            $(".center").css("background", "#f2f2f2");
            $(this).hide();
        })
        $(".center_nav").mouseover(function () {
            $(".center").css("background", "#fff");
        })
        $(".center_nav").hide();
        $(".center").css("background", "#f2f2f2");
        console.log()
    })
    ///*   客户服务 的  子菜单*/
    $(".serve,.serve_nav ").mouseenter(function () {
        $(this).css("background", "#fff");
        $(".serve_nav").show();

        $(".serve_nav a").mouseenter(function () {
            $(this).css("color", "red")
        })
        $(".serve_nav a").mouseleave(function () {
            $(this).css("color", "black")
        })
    })
    $(".serve").mouseleave(function () {
        $(".serve_nav").mouseleave(function () {
            $(".serve").css("background", "#f2f2f2");
            $(this).hide();
        })
        $(".serve_nav").mouseover(function () {
            $(".serve").css("background", "#fff");
        })
        $(".serve_nav").hide();
        $(".serve").css("background", "#f2f2f2");
        console.log()
    })
    ///*   更多 的  子菜单*/
    $("#more,.more_nav ").mouseenter(function () {
        $(this).css("background", "#fff");
        $(".more_nav").show();

        $(".more_nav a").mouseenter(function () {
            $(this).css("color", "red")
        })
        $(".more_nav a").mouseleave(function () {
            $(this).css("color", "black")
        })
    })
    $("#more").mouseleave(function () {
        $(".more_nav").mouseleave(function () {
            $("#more").css("background", "#f2f2f2");
            $(this).hide();
        })
        $(".more_nav").mouseover(function () {
            $("#more").css("background", "#fff");
        })
        $(".more_nav").hide();
        $("#more").css("background", "#f2f2f2");
        console.log()
    })

    // fun()
    /*function fun() {
        var goodsList = $.cookie("cart");
        if (goodsList) {

            goodsList = JSON.parse(goodsList);
            $(".GG").remove();
            for (var i = 0; i < goodsList.length; i++) {

                var goods = goodsList[i];

                var GG = $("<div class=GG></div>")
                GG.css({"height": "auto", "width": "auto"})

                //创建节点

//						var li = $("<li>" + goods.name + ", $" + goods.price + "," + goods.num + "</li>");
//						li.appendTo( $("#list") );

                var div = $("<div></div>");
                div.css({
                    "width": "1080px",
                    "height": "27px",
                    "padding-left": "10px",
                    "padding-top": "30px",
                    "padding-bottom": "15px"
                })
                var span1 = $("<input type='checkbox'/>")//1111111
                var span2 = $("<span>" + goods.dress + "</span>")
                span2.css({"display": "inline-block", "padding-left": "30px", "font-weight": "600"})
                div.append(span1, span2);
                var Box = $("<ul class='D'></ul>")
                Box.css({"width": "1088px", "height": "120px", "border": "1px solid #ccc"})
                var li1 = $("<li><input type='checkbox'/></li>")//2222222222
                li1.css({"height": "120px", "width": "36px", "text-align": "center", "line-height": "120px"})
                var li2 = $("<li><img id=" + i + " src = " + goods.src + "/></li>");
                li2.css({"height": "80px", "width": "80px", "padding-top": "20px", "padding-bottom": "20px"})
                li2.find("img").css({"height": "80px", "width": "80px"})
                var li3 = $("<li>" + goods.name + "</li>");
                li3.css({
                    "height": "61px",
                    "width": "310px",
                    "font-size": "15px",
                    "padding-left": "30px",
                    "padding-top": "20px"
                })
                var li4 = $("<li></li>")
                li4.css({
                    "width": "102px",
                    "height": "80px",
                    "padding-left": "100px",
                    "padding-top": "20px",
                    "padding-bottom": "20px"
                })
                var span3 = $("<span>" + goods.old + "</span>")
                span3.css({
                    "display": "block",
                    "color": "#999999",
                    "font-size": "15px",
                    "text-decoration": "line-through"
                })
                var span4 = $("<span>" + goods.price + "</span>")
                span4.css({"display": "block", "color": "#333333", "font-weight": "bold", "margin-top": "5px"})
                var span5 = $("<span>特价</span>")
                span5.css({
                    "font-size": "12px",
                    "height": "18px",
                    "width": "24px",
                    "padding-left": "8px",
                    "padding-right": "8px",
                    "border": "1px solid #e31436",
                    "color": "#e31436",
                    "display": "inline-block",
                    "line-height": "18px",
                    "margin-top": "5px"
                })
                li4.append(span3, span4, span5);
                var li5 = $("<li></li>")
                li5.css({
                    "width": "152px",
                    "height": "40px",
                    "padding-top": "40px",
                    "padding-bottom": "40px",
                    "margin-left": "30px"
                })
                var a1 = $("<a class='a_left'>-</a>")
                a1.css({
                    "height": "20px", "width": "20px", "border": "1px solid #ccc", "cursor": "pointer",
                    "display": "inline-block", "text-align": "center", "line-height": "20px", "float": "left"
                })
                var a2 = $("<a>" + goods.num + "</a>")
                a2.css({
                    "width": "43px",
                    "height": "20px",
                    "display": "inline-block",
                    "text-align": "center",
                    "line-height": "20px",
                    "border-top": "1px solid #ccc",
                    "float": "left",
                    "border-bottom": "1px solid #ccc"
                })
                var a3 = $("<a class='a_right'>+</a>")
                a3.css({
                    "height": "20px",
                    "cursor": "pointer",
                    "width": "20px",
                    "border": "1px solid #ccc",
                    "display": "inline-block",
                    "text-align": "center",
                    "line-height": "20px",
                    "float": "left"
                })
                li5.append(a1, a2, a3);
                var li6 = $("<li>" + goods.num * goods.price + ".00" + "</li>")
                li6.css({
                    "display": "block",
                    "width": "44px",
                    "height": "20px",
                    "padding-top": "40px",
                    "padding-botom": "50px",
                    "font-size": "15px",
                    "font-weight": "bold",
                    "color": "#333"
                })
                var li7 = $("<li></li>")
                li7.css({
                    "height": "60px",
                    "width": "110px",
                    "font-size": "12px",
                    "padding-top": "30px",
                    "padding-bottom": "30px",
                    "line-height": "35px",
                    "padding-left": "80px"
                })
                var a4 = $("<a class='sele'>删除</a>")
                a4.mouseenter(function () {
                    $(this).css("text-decoration", "underline")
                })
                a4.mouseleave(function () {
                    $(this).css("text-decoration", "none")
                })
                a4.css({"display": "block", "cursor": "pointer"})
                var a5 = $("<a>移入我的收藏</a>")
                a5.css({"display": "block"})
                li7.append(a4, a5);
                Box.append(li1, li2, li3, li4, li5, li6, li7)
                GG.append(div, Box);
                var box = $("<div></div>")
                var div1 = $("<div>活动优惠：¥0.00</div>");
                div1.css({
                    "display": "inline-block",
                    "height": "18px",
                    "width": "100px",
                    "font-size": "12px",
                    "margin-left": "560px"
                });
                var div2 = $("<div> 商品应付总计：￥" + goods.num * goods.price + ".00</div>");
                div2.css({
                    "display": "inline-block",
                    "height": "18px",
                    "width": "155px",
                    "font-size": "12px",
                    "margin-left": "40px"
                });
                var div3 = $("<div> 预估税费：￥94.96</div>");
                div3.css({
                    "display": "inline-block",
                    "height": "18px",
                    "width": "103px",
                    "font-size": "12px",
                    "margin-left": "40px"
                });
                box.append(div1, div2, div3)
                box.css({
                    "height": "18px",
                    "width": "1025px",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                    "padding-left": "20px",
                    "padding-right": "43px",
                    "border": "1px solid #ccc",
                    "border-top": "0px"
                })
                GG.append(box);
                $(".car_box").append($(GG));
            }


//   	var finall = $("<div></div>")
//   	finall.css({"width":"1068px","height":"40px","border":"1px solid #ccc","padding":"10px","background":"#f8f8f8","margin-top":"40px"})
//      var p1 = $("<div></div>");
//      p1.css({"width":"200px","height":"40px","float":"left","font-size":"12px","line-height":"40px"})
//      var p_span1 = $("<input type='checkbox' />")/////////////
//      p_span1.css({"display":"inline-block","float":"left","vertical-align": "middle","margin-top":"13px"})
//      var p_span2 = $("<span>全选</span>")
//       p_span2.css({"display":"inline-block","float":"left","padding-left":"30px"})
//      var p_span3 = $("<span>删除选中商品</span>");
//       p_span3.css({"display":"inline-block","float":"left","padding-left":"30px"})
//      p1.append(p_span1,p_span2,p_span3)
//      var p2 = $("<a href='javascript:'>去结算</a>")
//      p2.css({"height":"60px","width":"120px","text-align":"center","line-height":"60px","font-size":"18px",
//        "background":"#e31436","float":"right","margin-top":"-10px","margin-right":"-10px","color":"#fff","font-weight":"600"})
//      var p3 = $("<div></div>");
//      p3.css({"width":"377px","height":"42px","float":"right","margin-right":"30px"})
//    
//      var P1 = $("<p></p>");
//      P1.css({"height":"22px","width":"391px","font-size":"12px"});
//      var P1_span1 = $("<span>已选商品<b>"+goods.num+"</b>件</span>");
//      P1_span1.css("padding-left","50px")
//      P1_span1.find("b").css({"color":"red","font-size":"16px"})
//      var P1_span2 = $("<span>总价(不含运费)</span>")
//      P1_span2.css({"display":"inline-block","padding-left":"30px"})
//      var P1_span3 = $("<span>¥"+goods.num*goods.price+".00</span>")
//      P1_span3.css({"color":"red","font-size":"20px","font-weight":"800","padding-left":"30px"})
//      P1.append(P1_span1,P1_span2,P1_span3)
//      var P2 = $("<p></p>");
//      P2.css({"height":"20px","width":"391px","font-size":"12px"})
//      var P2_span1 = $("<span>活动优惠：-￥0.00</span>");
//      var P2_span2 = $("<span>商品应付总计：￥"+goods.num*goods.price+".00</span>");
//      P2_span2.css("padding-left","20px")
//      var P2_span3 = $("<span>商品税费：￥185.17</span>");
//      P2_span3.css("padding-left","20px")
//      P2.append(P2_span1,P2_span2,P2_span3)
//      p3.append(P1,P2);
//      finall.append(p1,p2,p3)
//      $(".car_box").append(finall);
        }
    }*/

    //点击选中
//   $(".D li").on("click","#"+ i +" ,function(){
//   	$(".D li").eq(6).click(function(){
//           console.log(2222)
////   		$.cookie("carts", "goodsList[0].name", {expires:-1, path:"/"});
//   		console.log(goodsList)
//          goodsList.splice(0,1)
//          $(".car_box").find(".GG").eq(0).remove();
//          var cart = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
//					
//					//先判断购物车中是否存在我即将要添加的商品
////					var isExists = false; //表示是否存在相同商品
////					for (var i=0; i<cart.length; i++) {
//						//如果存在相同的商品, 则把数量++, 不需要重新添加新的商品
////						if (goodsName == goodsList[i].name) {
////							goodsList[i].num++;
////							isExists = true; //表示存在相同商品
////							sum = goodsList[i].num;
////						}
//						
////					}
////					console.log(goodsList.length)
//					//如果不存在相同商品, 则添加新商品
////					if (!isExists) {
////						//添加一个新商品到购物车
////						var goods = {
//////							id: goodsId,
////							name: goodsName,
////							price: goodsPrice,
////							old: oldPrice,
////							src: goodsSrc,
////							dress: goodsDress,
////							num: 1,
////							id: i
////						}
//						goodsList.push(goods);
////					}
//					
//					$.cookie("cart", JSON.stringify(goodsList), {expires:22, path:"/"});
//					console.log( $.cookie("cart") );
//             
////   		if(index ==0){
////   			goodsList.splice(index,1);
////   		}else{
////   			goodsList.splice(index-1,1);
////   		}
//   	}
//
//   }
//   	}
//      })

    // $("div").on("click", "input", function () {
    //     console.log("你好");
    // })
//      span1.prop("checked",true);
//      li1.find(":checkbox").prop("checked",true);
//      span1.click(function(){
//   	if(span1.is(':checked')){
////   		$("input[type='checkbox']").is(':checked')
//   		li1.find(":checkbox").prop("checked",true);
//   		P1_span3.html(goods.num*goods.price+".00")
//   		P1_span1.find("b").html(goods.num)
//   	}
//   	else{
//   		li1.find(":checkbox").prop("checked",false);
//   		P1_span3.html(0)
//   		P1_span1.find("b").html(0)
//   	}
//   })
//      li1.find(":checkbox").click(function(){
//   	if(li1.find(":checkbox").is(':checked')){
////   		$("input[type='checkbox']").is(':checked')
//   		span1.prop("checked",true);
//   		P1_span3.html(goods.num*goods.price+".00")
//   		P1_span1.find("b").html(goods.num)
//   	}
//   	else{
//   		span1.prop("checked",false);
//   		P1_span3.html(0)
//   		P1_span1.find("b").html(0)
//   	}
//   })

//      $(".D li").eq(0).find("input").click(function(){
//    	if($(this).is(":checked")){
//    		$(":checkbox").prop("checked",true);
//    	}else{
//    		$(":checkbox").prop("checked",false)
//    	}
//    })
//   //选中和不 选中的 金额问题
//   
    /*$(".D li").on("click", ".a_left", function () {

        goodslist_sub = JSON.parse($.cookie("cart"))

        for (var i = 0; i < goodslist_sub.length; i++) {
            var obj = goodslist_sub[i];

            if ($(this).parent().siblings("li").eq(2).html() == obj.name) {
                if (obj.num > 1) {
                    obj.num--;
                }
            }

        }
        $.cookie("cart", JSON.stringify(goodslist_sub), {expires: 10, path: "/"})
        fun();
        console.log($.cookie("cart"))
        window.location.reload();
        Number1 = num;
//					$(".money").html()
    })*/

   /* $(".D li").on("click", ".a_right", function () {
        goodslist_add = JSON.parse($.cookie("cart"))
        for (var i = 0; i < goodslist_add.length; i++) {
            var obj = goodslist_add[i];
//						console.log(obj)

            if ($(this).parent().siblings("li").eq(2).html() == obj.name) {
                obj.num++;
                if (obj.num > 99) {
                    obj.num = 99
                    alert("库存不足")
                }
            }
        }
        $.cookie("cart", JSON.stringify(goodslist_add), {expires: 10, path: "/"})
        fun();
        console.log($.cookie("cart"))
        window.location.reload();
    })*/

//  $(".D li").on("click",".selet",function(){
//  	$(".all").height($("body").height());
//      $(".all").width($("body").width());
//      $(".all").css({"top":"0px","left":"0px"})
//      $(".all").show()
//      $(".core").show()
//      $(".sure").click(function(){
////      if(csrt.length==0){	
//        	   	$.cookie("cart", "", {expires:0, path:"/"}); 
////        	   	location.href = "catr.html";
//        	   	$(".contant").hide();
//        	   	$(".Boxes").show();
//        	   	 $(".all").hide()
//        	   	 $(".core").hide()
//     })
////      })
//      $(".none").click(function(){
//        	   $(".all").hide()
//             $(".core").hide()
//      })
//  })
//   
//   //删除cookie

   /* $(".D li").last().click(function () {
//
//   	console.log(11)
        $(".all").height($("body").height());
        $(".all").width($("body").width());
        $(".all").css({"top": "0px", "left": "0px"})
        $(".all").show()
        $(".core").show()
        $(".sure").click(function () {
//      if(csrt.length==0){	
            $.cookie("cart", "", {expires: 0, path: "/"});
//        	   	location.href = "catr.html";
            $(".contant").hide();
            $(".Boxes").show();
            $(".all").hide()
            $(".core").hide()
        })
//      })
        $(".none").click(function () {
            $(".all").hide()
            $(".core").hide()
        })
    })*/

   //     去逛逛吧
    $(".Boxes_div p").first().find("a").click(function () {
        $(this).css("text-decoration", "underline");
        location.href = "商品详情.html";
    })
})