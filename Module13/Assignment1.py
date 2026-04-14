from flask import Flask, request
app = Flask(__name__)
@app.route('/alkuluku')
def summa():
    args = request.args
    integer = int(args.get("luku"))
    isPrime = 1
    for i in range(2, integer // 2 + 1):
        if integer % i == 0:
            isPrime = 0
            break
    result = {
        "number" : integer,
        "isPrime" : isPrime
    }
    return result

app.run(use_reloader=True, host='127.0.0.1', port=3000)