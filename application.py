from flask_socketio import SocketIO, emit
from flask import Flask, render_template, url_for, copy_current_request_context,request
from random import random
from time import sleep
from threading import Thread, Event
import json
import sys
import eventlet
import os

__author__ = 'BadBoy'


app = Flask(__name__)


app.config['SECRET_KEY'] = 'secret!'
app.config['DEBUG'] = True

socketio = SocketIO(app)

thread = Thread()
thread_stop_event = Event()
message = "hello" 
messages = []       

@app.route('/', methods=['POST','GET'])
def handle_requests():

     

     if request.method == 'POST':
      
        sys.stdout.write("Message Recieved")
        request_content = json.loads(request.get_data())
        sys.stdout.write(str(request_content))
        # Insert newest messages to front of list
        messages.insert(0, request_content["Message"])
        socketio.emit('message', {'Text': messages }, namespace='/test')
        print(request_content)
        return str(len(messages))
        
     if request.method == 'GET':
        return render_template('index.html')    


@app.route('/course')
def index():
   return render_template("course.html")  



@socketio.on('connect', namespace='/test')
def test_connect():
    
    print('Client connected')
    
    if not thread.isAlive():
        print("Starting Thread")
        

@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected')


if __name__ == '__main__':
   

   socketio.run(app, host='0.0.0.0',debug=True,port=5002)
