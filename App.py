# import Flask
from flask import Flask, jsonify
from flask_pymongo import PyMongo


# Create an app, being sure to pass __name__
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/AFL_Season_Analysis"
mongo = PyMongo(app)


# Flask routes
@app.route("/")
def home():
    """List all available API routes."""
    print("Server received request for welcome page")
    return (
        f"Available Routes<br/>"
        f"/api/v1.0/disposals<br/>"
        f"/api/v1.0/goals<br/>"
    )

@app.route("/api/v1.0/disposals")
def precipitation():
    print("Server received request for disposals page")


season_disposals = session.query(Measurement.date, Measurement.prcp).all()    

@app.route("/api/v1.0/goals")
def precipitation():
    print("Server received request for goals page")    
          

