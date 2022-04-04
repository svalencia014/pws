from flask import Flask, request, jsonify
from time import sleep

#import firebase shit
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__)
app.run(host='0.0.0.0', port="9000")
print("listening on port 9000")

messages = []

f = open("messages.json", "w")

#Use application defualt crednetials


@app.post("/messages")
def add_message():
    if request.is_json:
        content = request.get_json()
        messages.append(content)
        print(f"Added message: {content}")
        return content, 201
    return {"error": "Request must be JSON"}, 415
        
def sync_messages(f, messages):
    sleep(60)
    f.read()
