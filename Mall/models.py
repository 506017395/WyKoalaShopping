from django.db import models


# Create your models here.
# 用户表
class User(models.Model):
    uaccount = models.CharField(max_length=60)  # 用户账号
    uname = models.CharField(max_length=60, default=uaccount)  # 用户昵称
    upwd = models.CharField(max_length=40)  # 用户密码
    utel = models.CharField(max_length=20)  # 电话号码

    @classmethod
    def createUser(cls, account, pwd, tel):
        result = cls(uaccount=account, upwd=pwd, utel=tel)
        return result

    class Meta:
        db_table = "User"
