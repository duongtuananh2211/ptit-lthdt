"""
only the owner knows how to run this :)))
"""
import requests

categories = [
  {
    'id': 1,
    'title': 'Acer',
    'type': 'SS',
    'des': 'Đa dạng mẫu mã, giá cả phải chăng, hiệu suất ổn định, thiết kế thời trang, phù hợp với nhu cầu làm việc và giải trí.'
  },
  {
    'id': 2,
    'title': 'Asus',
    'type': 'SSS',
    'des': 'Hiệu suất mạnh mẽ, thiết kế đẹp mắt, đa dạng mẫu mã, giá cả hợp lý, phù hợp cho cả công việc và giải trí.'
  },
  {
    'id': 3,
    'title': 'Dell',
    'type': 'S',
    'des': 'Đa dạng mẫu mã, chất lượng và độ bền cao, hiệu suất ổn định, thiết kế đẹp, phù hợp cho cả công việc và giải trí.'
  },{
    'id': 4,
    'title': 'Gigabyte',
    'type': 'S',
    'des': 'Hiệu suất mạnh mẽ, thiết kế sang trọng, tính di động cao, đặc biệt phù hợp cho game thủ và người làm đồ họa.'
  },{
    'id': 5,
    'title': 'Hp',
    'type': 'SS',
    'des': 'Thiết kế tinh tế, đa dạng mẫu mã, hiệu suất ổn định, độ bền cao, phù hợp cho cả công việc và giải trí.'
  },{
    'id': 6,
    'title': 'Lenovo',
    'type': 'SSS',
    'des': 'Thiết kế đơn giản nhưng sang trọng, hiệu suất ổn định, đa dạng mẫu mã, độ bền cao, phù hợp cho cả công việc và giải trí.'
  },{
    'id': 7,
    'title': 'Macbook',
    'type': 'SSS',
    'des': 'Thiết kế tinh tế, hiệu suất mạnh mẽ, hệ điều hành macOS ổn định, màn hình chất lượng cao, phù hợp cho công việc sáng tạo.'
  },{
    'id': 8,
    'title': 'Msi',
    'type': 'S',
    'des': 'Thiết kế hiện đại, hiệu suất gaming mạnh mẽ, tính di động cao, màn hình chất lượng, phù hợp cho game thủ và người làm đồ họa.'
  }
]

import json

"""generate category"""
# for ct in categories:
#   print(ct)
#   res_category = requests.post(
#     url='http://localhost:8080/api/category',
#     json={**ct}
#   )
#   print(res_category)

"""generate product"""
c = 1
acer_f = open('acer.json')
acer_d = json.load(acer_f)
for a in acer_d:
  a['type'] = ''
  a['id'] = c
  a['remain'] = 1000
  a['total'] = 1000
  a['port'] = a['community']
  a['categoryId'] = 1
  c += 1
  res_product = requests.post(
    url='http://localhost:8080/api/product',
      json={**a}
    )
  print(res_product)

c = 1
asus_f = open('asus.json')
asus_d = json.load(asus_f)
for a in asus_d:
  a['type'] = ''
  a['id'] = c
  a['remain'] = 1000
  a['total'] = 1000
  a['port'] = a['community']
  a['categoryId'] = 2
  c += 1
  res_product = requests.post(
    url='http://localhost:8080/api/product',
      json={**a}
    )
  print(res_product)


c = 1
dell_f = open('dell.json')
dell_d = json.load(dell_f)
for a in dell_d:
  a['type'] = ''
  a['id'] = c
  a['remain'] = 1000
  a['total'] = 1000
  a['port'] = a['community']
  a['categoryId'] = 3
  c += 1
  res_product = requests.post(
    url='http://localhost:8080/api/product',
      json={**a}
    )
  print(res_product)

c = 1
gigabyte_f = open('gigabyte.json')
gigabyte_d = json.load(gigabyte_f)
for a in gigabyte_d:
  a['type'] = ''
  a['id'] = c
  a['remain'] = 1000
  a['total'] = 1000
  a['port'] = a['community']
  a['categoryId'] = 4
  c += 1
  res_product = requests.post(
    url='http://localhost:8080/api/product',
      json={**a}
    )
  print(res_product)


c = 1
hp_f = open('hp.json')
hp_d = json.load(hp_f)
for a in hp_d:
  a['type'] = ''
  a['id'] = c
  a['remain'] = 1000
  a['total'] = 1000
  a['port'] = a['community']
  a['categoryId'] = 5
  c += 1
  res_product = requests.post(
    url='http://localhost:8080/api/product',
      json={**a}
    )
  print(res_product)


c = 1
lenovo_f = open('lenovo.json')
lenovo_d = json.load(lenovo_f)
for a in lenovo_d:
  a['type'] = ''
  a['id'] = c
  a['remain'] = 1000
  a['total'] = 1000
  a['port'] = a['community']
  a['categoryId'] = 6
  c += 1
  res_product = requests.post(
    url='http://localhost:8080/api/product',
      json={**a}
    )
  print(res_product)


c = 1
macbook_f = open('macbook.json')
macbook_d = json.load(macbook_f)
for a in macbook_d:
  a['type'] = ''
  a['id'] = c
  a['remain'] = 1000
  a['total'] = 1000
  a['port'] = a['community']
  a['categoryId'] = 7
  c += 1
  res_product = requests.post(
    url='http://localhost:8080/api/product',
      json={**a}
    )
  print(res_product)


c = 1
msi_f = open('msi.json')
msi_d = json.load(msi_f)
for a in msi_d:
  a['type'] = ''
  a['id'] = c
  a['remain'] = 1000
  a['total'] = 1000
  a['port'] = a['community']
  a['categoryId'] = 8
  c += 1
  res_product = requests.post(
    url='http://localhost:8080/api/product',
      json={**a}
    )
  print(res_product)