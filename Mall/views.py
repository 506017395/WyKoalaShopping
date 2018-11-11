import hashlib
import os
import random
import time
import uuid

from Mall.Alipay import alipay_koala
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from PIL import Image, ImageDraw, ImageFont

# Create your views here.


# 网易考拉首页
from Mall.models import Slideshow, Goods, User, Cart, Order, OrderGoods


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
    print(token)
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
        user = User.objects.filter(uaccount=uname)

        result = {}
        if user.exists():
            user_p = user.filter(upwd=upwd)
            if user_p.exists():
                user_ok = user_p.first()
                token = str(uuid.uuid5(uuid.uuid4(), "login"))
                user_ok.token = token
                # print(token, type(token))
                # print(user.token, type(user.token))
                user_ok.save()
                print(user_ok.token)
                request.session["token"] = user_ok.token
            else:
                result["status"] = -1
                result["msg"] = "密码错误,请重新输入"
        else:
            result["status"] = 0
            result["msg"] = "用户名不存在,请重新输入"
        return JsonResponse(result)


# 注销
def logout(request):
    request.session.flush()
    return redirect("K:index")


# 注册
def resign(request):
    if request.method == "GET":
        account = request.GET.get("account")
        if account:
            user = User.objects.filter(uaccount=account)
            if user:
                return JsonResponse({"status": 1, "msg": "该用户名已被使用"})
        return render(request, "resign.html")
    elif request.method == "POST":
        data_post = request.POST
        # 使用uuid生成token
        token = str(uuid.uuid5(uuid.uuid4(), 'register'))
        # a, b, c = data_post.get("account"), data_post.get("password"), data_post.get("tel")
        user_info = User.createUser(data_post.get("account") + data_post.get("selectEmail"),
                                    generate_password(data_post.get("password")),
                                    data_post.get("tel"),
                                    str(token))

        result = {}
        try:
            user_info.save()
            request.session["token"] = user_info.token
            result["status"] = 1
            result["msg"] = "注册成功!"
        except Exception as e:
            result["status"] = -1
            result["msg"] = e
        return JsonResponse(result);


# 手机号验证
def telyz(request):
    tel = request.GET.get("tel")
    if tel:
        user = User.objects.filter(utel=tel)
        if user:
            return JsonResponse({"status": 1, "msg": "该手机号已被使用"})
    return JsonResponse({"status": 2, "msg": "可以使用"})


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
    imgdir = "static/img/code/" + str(time.time()) + str(random.randrange(10000)) + ".png"
    image.save(imgdir, "png")
    result = {
        "codeimg": imgdir,
        "codedata": ran_code,
    }
    return JsonResponse(result)


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

        cart_count = 0
        cart_total = 0
        all_select = True if len(carts) else False
        for cart in carts:
            if not cart.is_select:
                all_select = False
                continue
            cart_count += 1
            cart_total += cart.total
        result["carts_total"] = cart_total
        result["all_select"] = all_select
        result["cart_count"] = cart_count
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
    cart_count = 0
    count_total = 0
    if is_all_select == "all":
        carts = Cart.objects.filter(user=user)

        for cart in carts:
            cart.is_select = sele_status
            cart.save()
            if not cart.is_select: continue
            cart_count += 1
            count_total += cart.total
        result["count_total"] = count_total
        result["cart_count"] = cart_count
    else:
        goods = Goods.objects.get(pk=int(request.GET.get("goodsid")))
        cart = Cart.objects.get(user=user, goods=goods)
        cart.is_select = sele_status
        cart.save()

        new_cart = Cart.objects.filter(user=user)
        all_select = True
        for newc in new_cart:
            if not newc.is_select:
                all_select = False
                continue
            cart_count += 1
            count_total += newc.total
        result["all_select"] = all_select
        result["count_total"] = count_total
        result["cart_count"] = cart_count
    return JsonResponse(result)


# 删除选中的购物车商品
def delcart(request):
    if request.method == "GET":
        cart_id = request.GET.get("cartid")
    elif request.method == "POST":
        cart_id = request.POST.get("cartid")
    cart_id_list = cart_id.split(",")
    if len(cart_id_list) > 1: cart_id_list.pop()
    for cartid in cart_id_list:
        Cart.objects.get(pk=int(cartid)).delete()
    carts = Cart.objects.filter(user=User.objects.get(token=request.session.get("token")))
    cart_count = 0
    count_total = 0
    all_select = True if len(carts) else False
    for cart in carts:
        if not cart.is_select:
            all_select = False
            continue
            cart_count += 1
        count_total += cart.total
    result = {
        "count_total": count_total,
        "all_select": all_select,
        "cart_count": cart_count,
    }
    return JsonResponse(result)


# 下单
def underorder(request):
    user = User.objects.get(token=request.session.get("token"))
    # 生成订单
    order = Order.createOrder(user, str(int(time.time())) + str(random.randrange(10000, 100000)))
    order.save()
    # 订单商品
    carts = Cart.objects.filter(user=user).filter(is_select=True)
    for cart in carts:
        orderGoods = OrderGoods.createOrderGoods(order, cart.goods, cart.number)
        orderGoods.save()
        # 从购物车移除
        cart.delete()

    result = {
        "msg": "下单成功",
        "status": 1,
        "orderno": order.orderno  # 订单号
    }

    return JsonResponse(result)


# 订单详情
def orderinfo(request, order_no):
    user = User.objects.get(token=request.session.get("token"))
    order = Order.objects.get(orderno=order_no)
    order_goods_list = order.ordergoods_set.all()

    goods_count = len(order_goods_list)
    total_price = 0
    for order_goods in order_goods_list:
        total_price += order_goods.goods.price * order_goods.number

    result = {
        "order": order,
        "username": user.uname,
        "goods_count": goods_count,
        "total_price": total_price,
        "orderno": order.orderno,
    }
    return render(request, "orderinfo.html", result)


def notice(request):
    print("订单支付成功")
    print(request.GET.get("subject"))
    return JsonResponse({"msg": "支付成功"})


def jump(request):
    print("订单支付成功,进行页面跳转")
    return redirect("K:index")


# 付款
def pay(request):
    order_no = request.GET.get("orderno")
    user = User.objects.get(token=request.session.get("token"))
    order = Order.objects.get(orderno=order_no)
    total = 0
    order_goods_set = order.ordergoods_set.all()
    for order_goods in order_goods_set:
        total += order_goods.goods.price * order_goods.number

    # 支付url
    url = alipay_koala.direct_pay(
        subject="{}-{}-{}".format(order.createtime, user.uname, order_no),  # 订单名称
        out_trade_no=order_no,  # 订单号
        total_amount=total,  # 付款金额
        return_url="http://182.254.228.82/jump/"
    )

    # 拼接支付网关
    alipay_url = "https://openapi.alipaydev.com/gateway.do?{data}".format(data=url)

    return JsonResponse({'alipay_url': alipay_url})
