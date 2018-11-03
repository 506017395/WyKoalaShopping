json = [
 {"smallimg":"img/cloth1.png",
  "right":"209元选3件",
  "img":"img/cloth1.webp",
  "packet":"",
  "information":"TommyHilfiger汤米·希尔费..",
  "rated":"美式经典而又酷味十足",
  "each":"",
  "price":"￥129",
  "purchase":"￥169",
  "act":"立刻购买"
 },
 {"smallimg":"img/cloth2.png",
  "right":"",
  "img":"img/cloth2.webp",
  "packet":"",
  "information":"Calvinklein卡文克莱男士针..",
  "rated":"简约时尚的精神",
  "each":"",
  "price":"￥179",
  "purchase":"￥699",
  "act":"立刻购买"
 },
 {"smallimg":"img/cloth3.png",
  "right":"209元选3件",
  "img":"img/cloth3.webp",
  "packet":"",
  "information":"TommyHilfiger汤米·希尔费..",
  "rated":"美式经典而又酷味十足",
  "each":"",
  "price":"￥129",
  "purchase":"￥169",
  "act":"立刻购买"
 },
 {"smallimg":"img/cloth4.png",
  "right":"",
  "img":"img/cloth4.webp",
  "packet":"",
  "information":"安普里奥·阿玛尼男士印花纽..",
  "rated":"运动也要够有范",
  "each":"",
  "price":"￥399",
  "purchase":"￥730",
  "act":"立刻购买"
 },
 {"smallimg":"img/cloth5.png",
  "right":"",
  "img":"img/cloth5.webp",
  "packet":"",
  "information":"HUGOBOSS雨果博斯男士T..",
  "rated":"成功男士的选择",
  "each":"",
  "price":"￥299",
  "purchase":"￥600",
  "act":"立刻购买"
 }
]

# Diapers
# [{key:values}]
sql = "insert into Mall_dress(smallimg,Mall_dress.right,img,packet,information,rated,Mall_dress.each,price,purchase) values "
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
