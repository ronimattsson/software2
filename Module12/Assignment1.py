import requests

request = "https://api.chucknorris.io/jokes/random"

try:
    result = requests.get(request)
    if result.status_code == 200:
        result_json = result.json()
except requests.exceptions.RequestException as e:
    print ("Hakua ei voitu suorittaa.")

print(result_json["value"])