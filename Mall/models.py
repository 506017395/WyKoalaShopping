from django.db import models


# Create your models here.
# 用户表
class User(models.Model):
    uaccount = models.CharField(max_length=60)  # 用户账号
    uname = models.CharField(max_length=60)  # 用户昵称
    upwd = models.CharField(max_length=256)  # 用户密码
    utel = models.CharField(max_length=20)  # 电话号码
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


# 基础类
class Base(models.Model):
    img = models.CharField(max_length=100)
    packet = models.CharField(max_length=20)
    information = models.CharField(max_length=50)
    rated = models.CharField(max_length=40)
    each = models.CharField(max_length=20, null=True)
    price = models.IntegerField()
    purchase = models.IntegerField()

    class Meta:
        abstract = True


# 纸尿裤
class Diapers(Base):
    smallimg = models.CharField(max_length=100)


# 奶粉
class Milk_powder(Base):
    smallimg = models.CharField(max_length=100)


# 保健
class Care(Base):
    smallimg = models.CharField(max_length=100)
    right = models.CharField(max_length=40, null=True)


# 童装童鞋
class Children_clothes(Base):
    smallimg = models.CharField(max_length=100)
    right = models.CharField(max_length=40, null=True)


# 孕妈专区
class Pregnant(Base):
    smallimg = models.CharField(max_length=100)
    right = models.CharField(max_length=40, null=True)


# 服饰
class Dress(Base):
    smallimg = models.CharField(max_length=100)
    right = models.CharField(max_length=40, null=True)
