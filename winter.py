from flask import Flask
from flask import render_template, request
from flask_bootstrap import *

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
    if "Android" in request.headers.get('User-Agent'):
        print "android"
        return render_template("androidtable.html")
    return render_template('table.html')

if __name__ == "__main__":
    app.debug = True
    app.run("0.0.0.0")
