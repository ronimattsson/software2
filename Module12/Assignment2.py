import requests

key = ""

city = input("Enter municipality name: ")
request = f"https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={key}"
try:
    result = requests.get(request)
    if result.status_code == 200:
        result_json = result.json()
        print(f"Weather: {result_json["weather"][-1]["description"]}\n"
              f"Temperature: {result_json["main"]["temp"]} Celsius")
except requests.exceptions.RequestException as e:
    print ("Hakua ei voitu suorittaa.")