from flask import Flask, request
from flask_cors import CORS
import json
import mysql.connector
DBUSER = 'root'
DBPASS = ''

def get_airport(icao):
    connection = mysql.connector.connect(
        host="localhost",
        port="3306",
        user=DBUSER,
        password=DBPASS,
        database="flight_game",
        collation='utf8mb3_general_ci',
        autocommit=True,
    )
    cursor = connection.cursor()

    sql = '''SELECT name, municipality
             FROM airport
             WHERE ident = %s'''
    cursor = connection.cursor(dictionary=True)
    cursor.execute(sql, (icao,))
    result = cursor.fetchone()
    return result

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/airport/<icao>')
def airport(icao):
    port = get_airport(icao)
    result = {
        "ICAO": icao,
        "Name" : port["name"],
        "Municipality" : port["municipality"]
    }
    print(json.dumps(result))
    return json.dumps(result)

app.run(use_reloader=True, host='127.0.0.1', port=3000)