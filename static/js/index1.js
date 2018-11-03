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
    //导航栏
//	$(".page a").mouseover(function(){
//		$(this).stop().animate()
//	})
    //导航栏	  #nav .subnav_sub span 
    $(".subnav_sub li").mouseenter(function () {
        var index = $(this).index();
        console.log(index)
        $(".subnav_sub span").stop().animate({top: (index - 1) * ($(this).height() + 1)}, 200).show();
    })
    //  显示  所有分类
    $(".subnav").mouseenter(function () {
        $(".subnav_sub").show();
    })
    $(".subnav").mouseleave(function () {
        $(".subnav_sub").mouseleave(function () {
            $(".subnav_sub").hide();
        })
        $(".subnav_sub").mouseenter(function () {
            $(".subnav_sub").show();
        })
        $(".subnav_sub").hide();
    })
    //所有  水果菜单
    $(".subnav_sub li").last().mouseenter(function () {
//		$("..subnav_sub").mouseenter(function(){
        $(".listfruit").show();
//		})
    })
    $(".subnav_sub li").last().mouseleave(function () {
//		$("..subnav_sub").mouseenter(function(){

        $(".listfruit").mouseleave(function () {
            $(".listfruit").hide();
            $(".subnav_sub").hide();
        })
        $(".listfruit").mouseenter(function () {
            $(".listfruit").show();
            $(".subnav_sub").show();
        })

        $(".listfruit").hide();
    })

    //所有  生活菜单
    $(".subnav_sub li").eq(3).mouseenter(function () {
//		$("..subnav_sub").mouseenter(function(){
        $(".listlive").show();
//		})
    })
    $(".subnav_sub li").eq(3).mouseleave(function () {
//		$("..subnav_sub").mouseenter(function(){

        $(".listlive").mouseleave(function () {
            $(".listlive").hide();
            $(".subnav_sub").hide();
        })
        $(".listlive").mouseenter(function () {
            $(".listlive").show();
            $(".subnav_sub").show();
        })

        $(".listlive").hide();
    })

    //轮播图
    new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });

    //纸尿裤
    //奶粉馆
    //辅食保健
    //童装童鞋
    //孕妇专区
    
    //商品栏目导航
    $(".goods .item li").mouseenter(function () {
        var index = $(this).index();
        $(this).addClass("first").siblings().removeClass("first");
        var size = 9 + 20 * index + "%";
        $(".goods span").css("left", size);
        var sign = $("#container .sign");
        sign.eq(index).show().siblings("#container .sign").hide();
    })

    //服饰
    $.getJSON("../static/json/index7.json", function (data) {
        for (i = 0; i < data.length; i++) {
            var obj = data[i];
            var li = $("<li></li>");
            li.css("position", "relative")
            var dot = $("<img src=" + obj.smallimg + "/>");

            dot.css("position", "absolute");
            dot.css({height: "30px", width: "30px", left: "10px", top: "10px"});
            var right = $("<span>" + obj.right + "</span>")
            right.css("position", "absolute");
            if (i == 0 || i == 2) {
                right.css({
                    height: "40px",
                    width: "40px",
                    right: "0px",
                    top: "0px",
                    "padding": "4px",
                    "background": "#fda438",
                    "text-align": "center",
                    "line-height": "18px",
                    "color": "#fff"
                });
            }
            var img = $("<img src=" + obj.img + "/>")
            img.css({"height": "197px", "width": "197px"});
            img.css("display", "block")
            img.css("padding-top", "20px")
            var a1 = $("<a href='#'></a>")

            a1.append(img)
            var span1 = $("<span>" + obj.packet + "</span>")
            span1.css({"color": "red", "font-weight": "700", "padding-left": "10px"})
            var a2 = $("<a href='#'></a>")

            a2.append(span1);
            var span2 = $("<span>" + obj.information + "</span>")
            span2.css("font-weight", "700")
            var a3 = $("<a href='#'></a>")
            a3.append(span2)
            var p1 = $("<p>" + obj.rated + "</p>")
            p1.css({"padding-left": "15px", "padding-top": "5px"})
            var a4 = $("<a href='#'></a>")
            a4.append(p1)
            var p2 = $("<p></p>")
            p2.css({"padding-top": "10px", "padding-bottom": "10px"})

            var span6 = $("<span>" + obj.each + "</span>")
            span6.css({"width": "auto", "padding": "2px", "margin-left": "18px", "color": "red"})

//  		if(i==0 || i==2){
//  			span6.css("border","1px dashed red")
//  		}
            p2.append(span6);
            var a5 = $("<a href='#'></a>")
            a5.append(p2)
            var span3 = $("<span>" + obj.price + "</span>")
            span3.css({"padding-left": "15px", "color": "#d22147", "font-size": "20px", "font-weight": "800"})
            var span4 = $("<span>" + obj.purchase + "</span>")
            span4.css({
                "padding-left": "5px",
                "font-size": "16px",
                "color": "#999999",
                "text-decoration": "line-through"
            })
            var span5 = $("<span>" + obj.act + "</span>")
            span5.css({"margin-left": "20px", "padding": "3px", "background": "#d22147", "color": "#fff"})
            li.append(dot, right, a1, a2, a3, a4, a5, span3, span4, span5)
            $(".deta1").append(li);
            $(".deta1").css("font-size", "12px")

        }

    })
    //服装栏目导航
    $(".cloth_goods .cloth_item li").click(function () {
        var index = $(this).index();
        $(this).addClass("cloth_first").siblings().removeClass("cloth_first");
        var size = 9 + 20 * index + "%";
        $(".cloth_goods span").css("left", size);
    })
    //右侧滚动定位
    $(".container_ul .li").mouseenter(function () {
        $(this).css("background", "")
        $(this).css("background", "#a81a38");
    })
    $(".container_ul .li").mouseleave(function () {
        $(this).css("background", "")
        $(this).css("background", "#d22147");
    })
    $(window).scroll(function () {
        var _scrolltop = $(document).scrollTop();
        if (_scrolltop >= $(".container_ul").offset().top) {
            $(".container_ul").css({"position": "fixed", "top": "0px"})
            $(".container_ul").css("display", "block")
        }
        if (_scrolltop <= 200) {
            $(".container_ul").css({"position": "absolute", "top": "0px"})
            $(".container_ul").css("display", "none")
        }
    })
    $(".container_ul li").last().click(function () {
        $("body,html").animate({scrollTop: 0}, 500);
        return false;
    })
})

     






