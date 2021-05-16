import random
import threading

from flask import Flask, render_template

import SocketServer

app = Flask(__name__)


@app.route('/index')
def hello_world():
    t = threading.Thread(target=SocketServer.socket_service())
    t.start()


@app.route('/')
def index():
    return render_template("index.html")


@app.route("/test")
def test():
    # print(str(SocketServer.dataaa()[0]))
    # print(str(SocketServer.dataaa()[1]))
    # print(str(SocketServer.dataaa()[2]))

    # return render_template('DTHweb.html', i=str(SocketServer.dataaa()[0]) + str(u'\u2103'), j=str(SocketServer.dataaa()[1]) + '%')
    return render_template('DTHweb.html')


@app.route("/getdata")
def getdata():
    return {'data': SocketServer.dataaa(), 'name': random.randint(0, 100)}


if __name__ == '__main__':
    app.run()
