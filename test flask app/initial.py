# api.py

from flask import Flask, request, jsonify

app = Flask(__name)

@app.route('/api', methods=['GET'])
def get_data():
    data = {'message': 'Hello from the Python API!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
