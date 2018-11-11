from django.conf.urls import url

from Mall import views

urlpatterns = [
    url(r"^$", views.index, name="index"),  # 首页
    url(r"^login/$", views.login, name="login"),  # 登录
    url(r"^logout/$", views.logout, name="logout"),  # 注销
    url(r"^resign/$", views.resign, name="resign"),  # 注册
    url("^telyz/$", views.telyz, name="telyz"),  # 手机号验证
    url(r"^codeimage/$", views.codeimage, name="codeimage"),  # 验证码
    url(r"^goodsdetail/$", views.goodsdetail, name="goodsdetail"),  # 商品详细
    url(r"^detail/(\d+)/$", views.detail, name="detail"),  # 商品详细2
    url(r"^cart/$", views.cart, name="cart"),  # 购物车
    url(r"^addcart/$", views.addcart, name="addcart"),  # 添加到购物车
    url(r"^countcart/$", views.countcart, name="countcart"),  # 统计购物车数量
    url(r"^goodsnum/$", views.goodsnum, name="goodsnum"),  # 购物车商品数量控制
    url(r"^allselect/$", views.allselect, name="allselect"),  # 购物车全部选中
    url(r"^delcart/$", views.delcart, name="delcart"),  # 删除选中的购物车商品
    url(r"^underorder/$", views.underorder, name="underorder"),  # 下单
    url(r"^orderinfo/(\d+)/$", views.orderinfo, name="orderinfo"),  # 订单详情
    url(r"^pay/$", views.pay, name="pay"),  # 付款
    url(r'^notice/$', views.notice, name="notice"),  # 支付完成后的通知
    url(r'^jump/$', views.jump, name="jump"),  # 支付完成后的跳转
]
