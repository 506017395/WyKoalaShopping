import hashlib
import io
import os
import random
import json
import uuid

from django.http import HttpResponse
from django.shortcuts import render, redirect
from PIL import Image, ImageDraw, ImageFont

# Create your views here.


# 网易考拉首页
from Mall.models import User


def index(request):
    token = request.COOKIES.get("token")  # 获取token
    user_set = User.objects.filter(token=token)
    if user_set.exists():
        user = user_set.first()
        return render(request, 'index.html', context={'username': user.uname})
    return render(request, "index.html")


# 登录
def login(request):
    if request.method == "GET":
        return render(request, "login.html")
    elif request.method == "POST":
        data_post = request.POST
        uname = data_post.get("username")
        upwd = generate_password(data_post.get("pwd"))

        user_aa = User.objects.first().uaccount
        user_a = User.objects.first().upwd
        isTrue = upwd == user_a
        isT = user_aa == uname
        user_set = User.objects.filter(uaccount=uname, upwd=upwd)
        if user_set.exists():
            user = user_set.first()
            response = redirect("K:index")
            response.set_cookie("token", user.token)
            return response
        return render(request, "login.html")


# 注销
def logout(request):
    response = redirect("K:index")
    response.delete_cookie("token")
    return response


# 注册
def resign(request):
    if request.method == "GET":
        return render(request, "resign.html")
    elif request.method == "POST":
        data_post = request.POST
        # 使用uuid生成token
        token = uuid.uuid5(uuid.uuid4(), 'test')
        # a, b, c = data_post.get("account"), data_post.get("password"), data_post.get("tel")
        user_info = User.createUser(data_post.get("account") + data_post.get("selectEmail"),
                                    generate_password(data_post.get("password")),
                                    data_post.get("tel"),
                                    token)
        try:
            user_info.save()
            response = redirect("K:index")
            response.set_cookie("token", user_info.token)
            return response
        except Exception as e:
            return render(request, "resign.html")


# 密码加密
def generate_password(password):
    sha = hashlib.sha512()
    sha.update(password.encode('utf-8'))
    return sha.hexdigest()


# 验证码
def codeimage(request):
    # 创建图片并生成背景颜色
    width, height = 84, 44
    r, g, b = random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)
    image = Image.new("RGB", (width, height), (r, g, b))
    # 产生验证码
    str_code = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    ran_code = "".join([str_code[random.randrange(0, len(str_code))] for i in range(4)])
    # 创建画笔
    draw = ImageDraw.Draw(image)
    # 字体颜色
    fontcolor1 = (255, random.randrange(0, 256), random.randrange(0, 256))
    fontcolor2 = (255, random.randrange(0, 256), random.randrange(0, 256))
    fontcolor3 = (255, random.randrange(0, 256), random.randrange(0, 256))
    fontcolor4 = (255, random.randrange(0, 256), random.randrange(0, 256))
    # 导入字体
    font = ImageFont.truetype('static/fonts/Fangsong.ttf', 40)
    # 绘制
    draw.text((5, 3), ran_code[0], fill=fontcolor1, font=font)
    draw.text((25, 3), ran_code[1], fill=fontcolor2, font=font)
    draw.text((45, 3), ran_code[2], fill=fontcolor3, font=font)
    draw.text((65, 3), ran_code[3], fill=fontcolor4, font=font)
    # 释放画笔
    del draw
    # 文件操作
    # buff = io.BytesIO()
    # image.save(buff, 'png')
    list_file = os.listdir("static/img/code")
    if len(list_file) > 5:
        for file in list_file:
            os.remove(os.path.join("static/img/code/" + file))
    imgdir = "static/img/code/" + str(random.randrange(10000)) + ".png"
    image.save(imgdir, "png")
    json_code = json.dumps("../" + imgdir)
    response = HttpResponse(json_code)
    response.set_cookie("code", ran_code)
    return response


# 商品详细
def goodsdetail(request):
    return render(request, "goodsdetail.html")


# 购物车
def cart(request):
    return render(request, "cart.html")
