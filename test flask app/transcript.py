from flask import Flask, request, jsonify
import os

app = Flask(__name)

# Store transcripts in memory (for demonstration purposes; use a database in a production environment).
transcripts = {}

@app.route('/upload_verilog', methods=['POST'])
def upload_verilog():
    if 'verilog_file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['verilog_file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        verilog_code = file.read().decode('utf-8')
        transcript = generate_transcript(verilog_code)
        transcripts[file.filename] = transcript
        return jsonify({'message': 'Verilog code uploaded and transcript generated'})

@app.route('/get_transcript/<filename>', methods=['GET'])
def get_transcript(filename):
    transcript = transcripts.get(filename)
    if transcript is not None:
        return jsonify({'transcript': transcript})
    else:
        return jsonify({'error': 'Transcript not found'})

def generate_transcript(verilog_code):
    # Here, you can implement your Verilog code parsing and transcription logic.
    # Replace this function with a real Verilog parser and transcript generator.

    # For this example, we return a simple transcript.
    return "Transcript of the Verilog code:\n" + verilog_code

if __name__ == '__main__':
    app.run(debug=True)
