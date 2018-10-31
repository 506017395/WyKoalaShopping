from django.conf.urls import url

from Mall import views

urlpatterns = [
    url(r"^$", views.index, name="index"),  # 首页
    url(r"^login/$", views.login, name="login"),  # 登录
    url(r"^logout/$", views.logout, name="logout"),  # 注销
    url(r"^resign/$", views.resign, name="resign"),  # 注册
    url(r"^codeimage/$", views.codeimage, name="codeimage"),  # 验证码
    url(r"^goodsdetail/$", views.goodsdetail, name="goodsdetail"),  # 商品详细
    url(r"^cart/$", views.cart, name="cart"),  # 购物车
]
