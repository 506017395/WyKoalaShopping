$(function () {

    // 商品的数量控制    .a_num  numstatus

    $(".a_left").click(function () {
        var $a_num = $(this).next()
        if (parseInt($a_num.html()) <= 1) return
        var a_num = parseInt($a_num.html()) - 1
        $a_num.html(a_num)//商品数量
        var price = parseInt($(this).parent().prev().children().eq(1).html());//商品单价
        var total = (a_num * price).toFixed(2)//合计
        $(this).parent().next().html(total);
        goods_num_operation($(this).attr("goodsid"), a_num, total, $(this).attr("numstatus"))   //ajax请求操作购物车商品信息
        //,numstatus:$(this).attr("numstatus")
    });
    $(".a_right").click(function () {
        var $a_num = $(this).prev()
        var a_num = parseInt($a_num.html()) + 1
        $a_num.html(a_num)//商品数量
        var price = parseInt($(this).parent().prev().children().eq(1).html());//商品单价
        var total = (a_num * price).toFixed(2)//合计
        $(this).parent().next().html(total);
        goods_num_operation($(this).attr("goodsid"), a_num, total, $(this).attr("numstatus"))   //ajax请求操作购物车商品信息
    });

    function goods_num_operation(goodsid, a_num, total, numstatus) {
        $.get("/goodsnum/", {goodsid: goodsid, goodsnum: a_num, total: total, numstatus: numstatus}, function (data) {
            $(".cartdiv2 span,.yingfu span").html(data.total)
            // $("").html(data.total)
        });
    }


    //全部选中
    $(".f1 .div1,.cartjs1").find(":checkbox").click(function () {
        if ($(this).is(":checked")) {
            $(":checkbox").prop("checked", true)
        } else {
            $(":checkbox").prop("checked", false)
        }
        $.get("/allselect/", {isselect: "all", selestatus: $(this).is(":checked")}, function (data) {
            // count_total
            // console.log(data.count_total)
            $(".cartdiv2 span,.yingfu span").html(data.count_total)
        });
    });

    //单选
    $(".cartli1 input").click(function () {
        // $(this).is(":checked")
        var $this = $(this);
        $.get("/allselect/", {
            isselect: "one",
            selestatus: $this.is(":checked"),
            goodsid: $this.val()
        }, function (data) {
            // console.log(typeof(data.all_select))
            $(".f1 .div1 input,.cartjs1 input").prop("checked", data.all_select);
            // console.log(count_total)
            $(".cartdiv2 span,.yingfu span").html(data.count_total);
        });
    });

    // 删除购物车
    $(".sele").click(function () {
        var $this = $(this);
        $.get("/delcart/", {cartid: $this.attr("cartid")}, function (data) {
            $this.parents(".cartul").remove()
            $(".f1 .div1 input,.cartjs1 input").prop("checked", data.all_select);
            $(".cartdiv2 span,.yingfu span").html(data.count_total);
        });
    });
    // 删除选中的购物车
    $(".cartjs1span2").click(function () {
        console.log($(".cartul :checked"))
        var $chec = $(".cartul :checked").next()
        var cart_str = ""
        $chec.each(function () {
            // console.log(this.value)
            cart_str += (this.value + ",")
        })
        // console.log(cart_str)
        $.ajax({
            url: "/delcart/",
            type: "post",
            data: {cartid: cart_str},
            dataType: "json",
            headers: {"X-CSRFToken": $.cookie("csrftoken")},
            // traditional:true,
            success: function (data) {
                $chec.each(function () {
                    $chec.parents(".cartul").remove()
                })
                $(".f1 .div1 input,.cartjs1 input").prop("checked", data.all_select);
                $(".cartdiv2 span,.yingfu span").html(data.count_total);
            }
        });
    });
});