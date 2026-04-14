from flask import Flask, request
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
@app.route('/kenttä/<icao>')
def kenttä(icao):
    port = get_airport(icao)
    result = {
        "ICAO": icao,
        "Name" : port["name"],
        "Municipality" : port["municipality"]
    }
    return result

app.run(use_reloader=True, host='127.0.0.1', port=3000)