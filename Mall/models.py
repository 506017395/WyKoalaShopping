from django.db import models


# Create your models here.
# 用户表
class User(models.Model):
    uaccount = models.CharField(max_length=60, unique=True)  # 用户账号
    uname = models.CharField(max_length=60)  # 用户昵称
    upwd = models.CharField(max_length=256)  # 用户密码
    utel = models.CharField(max_length=20, unique=True)  # 电话号码
    token = models.CharField(max_length=256, null=True)  # token 会话保持

    @classmethod
    def createUser(cls, account, pwd, tel, token):
        result = cls(uaccount=account, upwd=pwd, utel=tel, token=token, uname=account)
        return result

    # class Meta:
    #     db_table = "User"


# 轮播图
class Slideshow(models.Model):
    img = models.CharField(max_length=100)


class Goods(models.Model):
    smallimg = models.CharField(max_length=100)  # 1 2
    img = models.CharField(max_length=100)
    packet = models.CharField(max_length=20)
    information = models.CharField(max_length=50)
    rated = models.CharField(max_length=40)
    each = models.CharField(max_length=20, null=True)
    price = models.IntegerField()
    purchase = models.IntegerField()
    right = models.CharField(max_length=40, null=True)  # !1 2
    goods_type = models.IntegerField(default=1)

    @classmethod
    def createGoods(cls, smallimg, img, packet, information, rated, each, price, purchase, right):
        goods = Goods(smallimg=smallimg, img=img, packet=packet, information=information, rated=rated, each=each,
                      price=price, purchase=purchase, right=right)
        return goods
    # class Meta:
    #     db_table = "Goods"


# 购物车
class Cart(models.Model):
    user = models.ForeignKey(User)
    goods = models.ForeignKey(Goods)
    number = models.IntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    is_select = models.BooleanField(default=False)

    @classmethod
    def createCart(cls, user, goods, number, total):
        cart = Cart(user=user, goods=goods, number=number, total=total)
        return cart
