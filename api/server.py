from flask import Flask, request, jsonify

app = Flask(__name__)
app.run(host='0.0.0.0', port="9000");
print("listening on port 9000")

messages = [{}]

@app.post("/messages")
def add_message():
    if request.is_json:
        content = request.get_json()
        messages.append(content)
        print(f"Added message: {content}")
        return content, 201
    return {"error": "Request must be JSON"}, 415
        