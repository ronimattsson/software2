import requests

key = "d39af82b160bf02d54d5fe181274e90b"

city = input("Enter municipality name: ")
request = f"https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={key}"
result_json = ""
try:
    result = requests.get(request)
    if result.status_code == 200:
        result_json = result.json()
except requests.exceptions.RequestException as e:
    print ("Hakua ei voitu suorittaa.")

if result_json != "":
    print(f"Weather: {result_json["weather"][0]["description"]}\n"
          f"Temperature: {result_json["main"]["temp"]} Celsius")
