from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')
@app.route("/new")
def new():
    return "new"

@app.route("/user/<s>")
def pstr(s):
    return s

@app.route("/table")
def pokerTable():
    return render_template('table.html')

if __name__ == "__main__":
    app.debug = True
    app.run("0.0.0.0")
