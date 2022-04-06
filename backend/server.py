from flask import Flask, request, jsonify

app = Flask(__name__)

messages = [{}]

@app.post("/messages")
def add_message():
    if request.is_json:
        content = request.get_json()
        messages.append(content)
        return content, 201
    return {"error": "Request must be JSON"}, 415
        