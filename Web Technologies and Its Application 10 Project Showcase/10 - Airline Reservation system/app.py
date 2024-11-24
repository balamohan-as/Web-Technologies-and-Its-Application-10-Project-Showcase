from flask import Flask, render_template, request, redirect, jsonify
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    host="127.0.0.1",
    user="root", 
    password="root", 
    database="userdb"  
)


cursor = db.cursor()
@app.route('/')  
def ticket():
    return render_template('index.html')

@app.route('/book', methods=['POST'])
def book():
    name = request.form['name']
    email = request.form['email']
    flight = request.form['flight']
    seat = request.form['seat']


    query = "INSERT INTO reservation (name, email, flight, seat) VALUES (%s, %s, %s, %s)"
    values = (name, email, flight, seat)
    
    cursor.execute(query, values)
    db.commit() 

    return jsonify({"message": "Booking successful", "name": name, "flight": flight, "seat": seat})

if __name__ == '__main__':
    app.run(debug=True)
