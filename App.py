# import Flask
from flask import Flask

# Create app as __name__
app = Flask(__name__)

 # Define index route
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return "Welcome to my 'Home' page!"

