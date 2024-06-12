"""
only the owner knows how to run this :)))
"""
def generate_datetime():
  import random
  from datetime import datetime

  def generate_random_datetimes(n, start_date, end_date):
      start_timestamp = start_date.timestamp()
      end_timestamp = end_date.timestamp()
      
      datetimes = []
      for _ in range(n):
          random_timestamp = random.uniform(start_timestamp, end_timestamp)
          random_datetime = datetime.fromtimestamp(random_timestamp)
          random_microsecond = random.randint(0, 999999)
          random_datetime = random_datetime.replace(microsecond=random_microsecond)
          datetimes.append(random_datetime.strftime('%Y-%m-%d %H:%M:%S.%f'))
      return datetimes

  num_datetimes = 8000
  start_date = datetime(2023, 1, 1)  # Start of 2023
  end_date = datetime(2024, 1, 1)     # Start of 2024

  random_datetimes = generate_random_datetimes(num_datetimes, start_date, end_date)

  with open("datetimes.txt", "w") as file:
      for dt in random_datetimes:
          file.write(dt + "\n")

  # f1 = open("datetimes.txt", "r")
  # f2 = open("datetimes_1.txt", "w")
  # datetimes = []
  # for i in f1:
  #   datetimes.append(i)
  # datetimes.sort()
  # for i in datetimes:
  #   f2.write(i)

generate_datetime()