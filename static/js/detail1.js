$(function () {
    // ajax POST 安全
    // headers: {"X-CSRFToken": $.cookie('csrftoken')},
    // 加入购物车
    count_cart()
    var offset = $(".cost_span2").offset();
    $("#btnaddcart").click(function () {
        var $goods_sum = $("#goodsSum").val()
        $.ajax({
            url: "/addcart/",
            type: "get",
            headers: {"X-CSRFToken": $.cookie('csrftoken')},
            data: {
                goodsid: $(this).attr("goodsid"),
                goodsSum: $goods_sum,
            },
            dataType: "json",
            success: function (data) {
                if (data.status == "1") {
                    var endoffset = $(".car ul li .car_span2").offset();
                    var flyer = $("<img class='u-flyer'/>");
                    flyer.attr("src", $(".smallImg").attr("src"));
                    flyer.fly({
                        start: {
                            left: offset.left + $(".cost_span2").width() / 2,
                            top: (offset.top - $(document).scrollTop()),
                            width: 90,
                            height: 90
                        },
                        end: {
                            left: endoffset.left + 20,
                            top: endoffset.top - $(document).scrollTop() + 20,
                            width: 0,
                            height: 0
                        },
                        onEnd: function () {
                            //console.log("加入购物车成功!")
                        }
                    });
                    $(".car ul li .car_span3").show();
                    $(".car ul li .car_span3").animate({top: "20px", opacity: "0"}, 1000, function () {
                        $(".car ul li .car_span3").css({
                            "position": "absolute",
                            "top": "52px",
                            "opacity": "1",
                            "display": "none"
                        })
                    })
                    count_cart()
                } else {
                    console.log(1)
                    window.open("/login/", target = "_self")
                }
            }
        });
    });

    // 购物车有几条
    function count_cart() {
        $.get("/countcart/", function (data) {
            var $sum = $(".car ul li span")
            $sum.html(data.cartsum)
            if ($sum.html() == "0") {
                $($sum.css("display", "none"));
            } else {
                $($sum.css("display", "block"));
            }
        });
    };


    // 商品数量控制

    $("#jian").click(function () {
        var $goods_sum = $("#goodsSum")
        if (parseInt($goods_sum.val()) <= 1) return
        $goods_sum.val(parseInt($goods_sum.val()) - 1)
    });
    $("#jia").click(function () {
        var $goods_sum = $("#goodsSum")
        $goods_sum.val(parseInt($goods_sum.val()) + 1)
    });
    var re = /^\d+$/
    $("#goodsSum").bind('input propertychange', function () {
        if (!re.test($(this).val()) || parseInt($(this).val()) <= 0) {
            $(this).val("1");
        }
    });
});