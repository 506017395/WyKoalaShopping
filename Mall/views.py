import hashlib
import io
import os
import random
import json
import uuid

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from PIL import Image, ImageDraw, ImageFont

# Create your views here.


# 网易考拉首页
from Mall.models import Slideshow, Goods, User, Cart


def index(request):
    slideshows = Slideshow.objects.all()  # 获取轮播图数据
    goods_list = Goods.objects.all()  # 获取商品所有数据
    goods_count = range(1, 6)
    result = {
        "slideshows": slideshows,
        "goods_list": goods_list,
        "goods_count": goods_count,
    }

    token = request.COOKIES.get("token")  # 获取token

    if token:  # 判断是否找到用户
        user = User.objects.get(token=token)  # 根据token查找用户
        result["username"] = user.uname
    return render(request, "index.html", context=result)


# 登录
def login(request):
    if request.method == "GET":
        return render(request, "login.html")
    elif request.method == "POST":
        data_post = request.POST
        # 获取post提交的数据
        uname = data_post.get("username")
        upwd = generate_password(data_post.get("pwd"))
        print(upwd)
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


# 商品详细2
def detail(request, goods_id, ):
    token = request.COOKIES.get("token")  # 获取token
    result = {}
    if token:  # 判断是否找到用户
        user = User.objects.get(token=token)  # 根据token查找用户
        result["username"] = user.uname
    goods = Goods.objects.get(pk=goods_id)
    result["goods"] = goods
    return render(request, "detail.html", result)


# 购物车
def cart(request):
    token = request.COOKIES.get("token")  # 获取token
    result = {}
    if token:  # 判断是否找到用户
        user = User.objects.get(token=token)  # 根据token查找用户
        result["username"] = user.uname
        carts = Cart.objects.filter(user=user)
        result["carts"] = carts
        cart_total = 0
        for cart in carts:
            cart_total += cart.total
        result["carts_total"] = cart_total
        return render(request, "cart.html", context=result)
    return render(request, "login.html")


# 添加到购物车
def addcart(request):
    token = request.COOKIES.get("token")  # 获取token
    result = {}
    if token:  # 判断是否找到用户
        user = User.objects.get(token=token)  # 根据token查找用户
        result["username"] = user.uname

        goods = Goods.objects.get(pk=request.POST.get("goodsid"))
        goods_sum = int(request.POST.get("goodsSum"))
        total = goods.price * goods_sum
        cart_old = Cart.objects.filter(user=user, goods=goods)
        if cart_old:
            cart = cart_old.first()
            cart.number += goods_sum
            cart.total += total
        else:
            cart = Cart.createCart(user=user, goods=goods, number=goods_sum, total=total)
        cart.save()
        result["status"] = 1
        result["msg"] = "添加到购物车成功"
        result["goods_sum"] = goods_sum
        return JsonResponse(result)
    return render(request, "login.html")


# 统计购物车数量
def countcart(request):
    cart = Cart.objects.filter(user=User.objects.filter(token=request.COOKIES.get("token")))
    result = {
        "cartsum": len(cart)
    }
    return JsonResponse(result)
