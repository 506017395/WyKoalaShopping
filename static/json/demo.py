json = [
    {"smallimg": "img/women1.png",
     "right": "",
     "img": "img/women1.webp",
     "packet": "2瓶装",
     "information": "|BIO ISLAND佰澳朗德...",
     "rated": "帮助大脑发育 增强记忆降低血脂",
     "each": "每瓶131元",
     "price": "￥262",
     "purchase": "￥458",
     "act": "立刻购买"
     },
    {"smallimg": "img/women2.png",
     "right": "",
     "img": "img/women2.webp",
     "packet": "",
     "information": "elevit爱乐维孕妇维生素营养..",
     "rated": "辣妈必备，孕育健康宝宝",
     "each": "",
     "price": "￥316",
     "purchase": "￥490",
     "act": "立刻购买"
     },
    {"smallimg": "img/women3.png",
     "right": "",
     "img": "img/women3.webp",
     "packet": "2盒装",
     "information": "|Pigeon贝亲防益乳垫...",
     "rated": "三维立体褶皱 超强呼吸核心",
     "each": "每盒67元",
     "price": "￥134",
     "purchase": "￥198",
     "act": "立刻购买"
     },
    {"smallimg": "img/women4.png",
     "right": "",
     "img": "img/women4.webp",
     "packet": "",
     "information": "pigeon贝亲 防溢乳垫 哺乳期..",
     "rated": "三维褶皱超强吸收",
     "each": "",
     "price": "￥80",
     "purchase": "￥119",
     "act": "立刻购买"
     },
    {"smallimg": "img/women5.png",
     "right": "",
     "img": "img/women5.webp",
     "packet": "",
     "information": "medela美德乐 丝韵单边电动..",
     "rated": "吸奶快速 简单更省力",
     "each": "",
     "price": "￥949",
     "purchase": "￥2199",
     "act": "立刻购买"
     }
]

# Diapers
# [{key:values}]
sql = "insert into Mall_goods(smallimg,Mall_goods.right,img,packet,information,rated,Mall_goods.each,price,purchase) values "
sql_str = ""

for data in json:
    sql_values = "("
    index = 0
    for key, values in data.items():
        if index == 9:
            break
        if key == "price" or key == "purchase":
            sql_values += r"{},".format(values.split("￥")[1])
            index += 1
            continue
        sql_values += r"'{}',".format(values)
        index += 1
    sql_values = sql_values[:-1] + "),"
    sql_str += sql_values
# sql += sql_str.replace("\\", "")
sql += sql_str[:-1]
print(sql)