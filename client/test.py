# a = 2000000000
# percent = 0.05 / 12
# year = 15
# count_year = 1
# amount = 0
# print("Năm 1")
# for i in range(0, year * 12):
#   if i == count_year * 12:
#     count_year += 1
#     print(f"Năm {count_year}")
#   print("Tháng {}: {:,}".format(i - (count_year - 1) * 12 + 1, round(a * percent + (2000000000 / (year * 12)), 2)))
#   a -= ((2000000000 / (year * 12)))
#   amount += a * percent + (2000000000 / (year * 12))
# print(f"Tổng {round(amount, 2):,}")

from fastapi import FastAPI, WebSocket

app = FastAPI()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")