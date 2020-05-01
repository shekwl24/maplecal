from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index0():
    return render_template('index.html')

@app.route('/index')
def index1():
    return render_template('index.html')

@app.route('/symbol')
def index2():
    return render_template('symbol.html')

@app.route('/monsterPark')
def index3():
    return render_template('monsterPark.html')

@app.route('/hyperStats')
def index4():
    return render_template('hyperStats.html')

if __name__ == '__main__':
    app.run(debug = True)
