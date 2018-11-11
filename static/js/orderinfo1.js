$(function () {
    $(".jiesuan").click(function () {
        var order_no = $(this).attr("orderno")
        $.get("/pay/", {"orderno": order_no}, function (data) {
            console.log(1)
            window.open(data.alipay_url, target = "_self")
        })
    })
});