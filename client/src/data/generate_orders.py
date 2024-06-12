"""
only the owner knows how to run this :)))
"""
import mysql.connector

ho = "Nguyễn, Trần, Lê, Phạm, Hoàng, Huỳnh, Phan, Vũ, Võ, Đặng, Bùi, Đỗ, Hồ, Ngô, Dương, Lý, Đinh, Trịnh, Hà, Mai, Giang, Cao, Châu, Tạ, Quách, Hồng, Bạch, Khổng, Triệu, Tôn, Cù, Khuất, La, Lương, Phùng, Quang, Ngọc, Diệp, Hứa, Đoàn, Quỳnh, Dư, Âu, Ứng, Giáp, Nhữ, Vương, Khưu, Kiều, Vĩnh, Tôn Thất, Trương, Nghiêm, Đồng, Sầm, Vũ, Vương, Lạc, Văn, Trịnh, Thạch, Hùng, Cát, Tưởng, Từ, Văn"
dem = "Văn, Thị, Hữu, Minh, Tuấn, Anh, Thanh, Thái, Thiên, Đức, Hồng, Quốc, Trọng, Khánh, Ngọc, Tấn, Xuân, Hùng, Hải, Chí, Phúc, Quang, Hoàng, Như, Bích, Phương, Khôi, Nam, Tường, Duy, Hạ, Như, Tuyết, Dung, Hảo, Khoa, Vinh, Trí, Hiền, Cẩm, Yến, Phượng, Sơn, Kiên, Lâm, Thu, Uyên, Thủy, Trinh, Tâm, Đăng, Kim, Lan, Liên, Mạnh, Tuệ, Anh, Long, Hòa, Bình, Chiến, Cường, Lợi, Thắng"
ten = "An, Bình, Cường, Dũng, Em, Giang, Hải, Hạnh, Hòa, Hương, Hùng, Khoa, Khuê, Lan, Lâm, Lệ, Liên, Linh, Loan, Long, Mai, Minh, My, Nam, Nga, Ngân, Ngọc, Nhi, Nhiên, Nhật, Oanh, Phát, Phú, Phúc, Phương, Quang, Quyên, Quốc, Sơn, Thái, Thảo, Thanh, Thiên, Thiện, Thu, Thư, Thúy, Thịnh, Thọ, Trang, Trí, Trung, Trường, Tuấn, Tú, Tuyết, Uyên, Văn, Việt, Vinh, Vy, Xuân, Yến"
ho_list = ho.split(", ")
dem_list = dem.split(", ")
ten_list = ten.split(", ")

phone_numbers = []
f1 = open("phone_numbers.txt", "r")
for i in f1:
  phone_numbers.append(i[:-1])

addresses = []
f1 = open("addresses.txt", "r")
for i in f1:
  addresses.append(i[:-1])


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="minhquan223",
  database="e_commerce_db"
)

mycursor = mydb.cursor()
mycursor.execute("SELECT id, price FROM product")
myresult = mycursor.fetchall()
products = []
for x in myresult:
  products.append({
    "id": x[0],
    "price": x[1]
  })

status = ["delivered", "pending", "processing", "cancel"]
payments = ["offline", "online"]


f3 = open("log_order.txt", "r")
order_items = []
for i in f3:
  d = i[:-1]
  spl = d.split("-")
  order_items.append(
    ([int(k) for k in spl[0].split(",")],
    [int(l) for l in spl[1].split(",")])
  )
f5 = open("datetimes.txt", "r")
datetimes = []
for i in f5:
  datetimes.append(i[:-1])
customer_id = 9928
order_id = 2017
from random import randint
c = 0
for i in range(0, 1298):
  if c == len(addresses):
    c = 0
  # # customer
  # sql = "INSERT INTO customer (id, full_name, address, phone_number) VALUES (%s, %s, %s, %s)"
  # val = (
  #   customer_id,
  #   "{} {} {}".format(ho_list[randint(0, len(ho_list) - 1)], dem_list[randint(0, len(dem_list) - 1)], ten_list[randint(0, len(ten_list) - 1)]),
  #   addresses[c],
  #   phone_numbers[c]
  # )
  # mycursor.execute(sql, val)
  # mydb.commit()

  # # order
  # order_quantity = randint(1, 2)
  # order_product = []
  # order_product_qtt = []
  # amount = 0
  # for j in range(0, order_quantity):
  #   a = randint(0, len(products) - 1)
  #   b = randint(1, 2)
  #   order_product.append(a)
  #   order_product_qtt.append(b)
  #   amount += float(products[a]['price']) * b
  # sql = "INSERT INTO `order` (id, amount, status, customer_id, payment) VALUES (%s, %s, %s, %s, %s)"
  # val = (
  #   order_id,
  #   amount,
  #   status[randint(0, 3)],
  #   customer_id,
  #   payments[randint(0, 1)]
  # )
  # mycursor.execute(sql, val)
  # mydb.commit()
  # f3.write(",".join([str(k) for k in order_product]) + "-" + ",".join(str(l) for l in order_product_qtt) + "\n")

  # # order items
  # order_product = order_items[c][0]
  # order_product_qtt = order_items[c][1]
  # for k, v in enumerate(order_product):
  #   sql = "INSERT INTO order_items (quantity, order_id, product_id) VALUES (%s, %s, %s)"
  #   val = (
  #     order_product_qtt[k],
  #     order_id,
  #     products[v]['id'],
  #   )
  #   mycursor.execute(sql, val)
  #   mydb.commit()
  
  # # update datetimes
  # sql = "UPDATE customer SET created = '{}' WHERE id = {}".format(datetimes[c], customer_id)
  # mycursor.execute(sql)
  # mydb.commit()

  # sql = "UPDATE `order` SET created = '{}' WHERE id = {}".format(datetimes[c], order_id)
  # mycursor.execute(sql)
  # mydb.commit()

     

  c += 1
  customer_id += 1
  order_id += 1
product_id = 174
c = 0
for i in range(1, 67):
  print(datetimes[c])
  sql = "UPDATE `product` SET created = '{}' WHERE id = {}".format(datetimes[c], product_id)
  mycursor.execute(sql)
  mydb.commit()
  product_id += 1
  c += 1