import hashlib
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

    token = request.session.get("token")  # 获取token

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
            # token = uuid.uuid5(uuid.uuid4(), 'test')
            # user.token = token
            # user.save()
            request.session["token"] = user.token
            return redirect("K:index")
        return render(request, "login.html")


# 注销
def logout(request):
    request.session.flush()
    return redirect("K:index")


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
            request.session["token"] = user_info.token
            return redirect("K:index")
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
    token = request.session.get("token")  # 获取token
    result = {}
    if token:  # 判断是否找到用户
        user = User.objects.get(token=token)  # 根据token查找用户
        result["username"] = user.uname
    goods = Goods.objects.get(pk=goods_id)
    result["goods"] = goods
    return render(request, "detail.html", result)


# 购物车
def cart(request):
    token = request.session.get("token")  # 获取token
    result = {}
    if token:  # 判断是否找到用户
        user = User.objects.get(token=token)  # 根据token查找用户
        result["username"] = user.uname
        carts = Cart.objects.filter(user=user)
        result["carts"] = carts
        cart_total = 0
        all_select = True if len(carts) else False
        for cart in carts:
            if not cart.is_select:
                all_select = False
                continue
            cart_total += cart.total
        result["carts_total"] = cart_total
        result["all_select"] = all_select
        return render(request, "cart.html", context=result)
    return render(request, "login.html")


# 添加到购物车
def addcart(request):
    token = request.session.get("token")  # 获取token
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
    cart = Cart.objects.filter(user=User.objects.filter(token=request.session.get("token")))
    result = {
        "cartsum": len(cart)
    }
    return JsonResponse(result)


# 购物车商品数量控制
def goodsnum(request):
    user = User.objects.get(token=request.session.get("token"))
    goods = request.GET.get("goodsid")
    goods_num = request.GET.get("goodsnum")
    total = request.GET.get("total")
    old_cart = Cart.objects.all()
    cart = Cart.objects.get(user=user, goods=goods)
    cart.number = goods_num
    cart.total = total
    cart.save()
    count_total = 0
    for old_cart in old_cart:
        if not old_cart.is_select: continue
        count_total += old_cart.total
    return JsonResponse({"status": 1, "msg": "操作成功", "total": count_total})


# 购物车全部选中
def allselect(request):
    user = User.objects.get(token=request.session.get("token"))
    is_all_select = request.GET.get("isselect")
    sele_status = True if request.GET.get("selestatus") == "true" else False

    result = {}
    count_total = 0
    if is_all_select == "all":
        carts = Cart.objects.filter(user=user)

        for cart in carts:
            cart.is_select = sele_status
            cart.save()
            count_total += cart.total
        result["count_total"] = count_total if sele_status else 0
    else:
        goods = Goods.objects.get(pk=int(request.GET.get("goodsid")))
        cart = Cart.objects.get(user=user, goods=goods)
        cart.is_select = sele_status
        cart.save()

        new_cart = Cart.objects.filter(user=user)
        all_select = True if len(new_cart) else False
        for newc in new_cart:
            if not newc.is_select:
                all_select = False
                continue
            count_total += newc.total
        result["all_select"] = all_select
        result["count_total"] = count_total
    return JsonResponse(result)


# 删除选中的购物车商品
def delcart(request):
    cart_id = request.GET.get("cartid")
    cart_id_list = cart_id.split(",")
    for cartid in cart_id_list:
        pass
        Cart.objects.get(pk=int(cartid)).delete()
    carts = Cart.objects.filter(user=User.objects.get(token=request.session.get("token")))

    count_total = 0
    all_select = True if len(carts) else False
    for cart in carts:
        if not cart.is_select:
            all_select = False
            continue
        count_total += cart.total
    result = {
        "count_total": count_total,
        "all_select": all_select,
    }
    return JsonResponse(result)
