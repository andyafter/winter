from flask import Flask
from flask import render_template, request
from flask_bootstrap import *
from swan.test import *
from random import *
from swan.connection import *
from swan.card import *
from swan.hand_evaluator import *

deck = []
for i in range(52):
    deck.append(i)
## deck is returned every round of the game



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
    here()
    return "succcedd"

@app.route("/strategy/<s>")
def getStrategy(s):
    #here I use something from the swan project
    return s


@app.route("/evaluate/<s>")
def evaluate(s):
    #here I use something from the swan project
    # here the whole s is numbers from 0~51
    result = "lose"
    round = {}
    round["preflop"] = 0
    round["flop"] = 1
    round["turn"] = 2
    round["river"] = 3
    rinfo = s.split('|')
    suits = ['c','h','s','d']
    cards = []
    print rinfo
    for i in range(9):
        temp = int(rinfo[i])
        ctemp = ""
        r = 0
        if temp%13 == 0:
            r = 14
        else:
            r = temp%13+1
        cards.append(Card(r,temp/13+1))
    #print cards
    computer = HandEvaluator.Seven.evaluate_rank(cards[0:2]+cards[4:])
    player = HandEvaluator.Seven.evaluate_rank(cards[2:4]+ cards[4:])
    if player<computer:
        return "lose"
    return "win"




@app.route("/dealhole")
def getHoles():
    print "something"
    return "success"
    
if __name__ == "__main__":
    app.debug = True
    app.run("0.0.0.0")
