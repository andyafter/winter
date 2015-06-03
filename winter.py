from flask import Flask
from flask import render_template, request
from flask_bootstrap import *
from test import *
def create_app():
    app = Flask(__name__)
    Bootstrap(app)
    return app

app = create_app()

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
@app.route("/test")
def test():
    a = testFunc()
    return a

if __name__ == "__main__":
    app.debug = True
    app.run("0.0.0.0")
