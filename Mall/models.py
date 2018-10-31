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

    class Meta:
        db_table = "User"
