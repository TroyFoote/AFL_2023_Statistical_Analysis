# import Flask
from flask import Flask, jsonify, make_response
from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask_cors import CORS

# Create an app, being sure to pass __name__
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/AFL_Season_Analysis"
mongo = PyMongo(app)

# Create an instance of MongoClient
mongo = MongoClient(port=27017)

# Declare the database
db = mongo.AFL_Season_Analysis_db

# Declare the collections
AFL_Season_Disposals = db.Disposals
AFL_Season_Goals = db.Goals

# Flask routes
@app.route("/")
def home():
    """List all available API routes."""
    print("Server received request for home page")
    return (
        "Available Routes<br/>"
        "/api/v1.0/Disposals<br/>"
        "/api/v1.0/Goals<br/>"
        "/api/v1.0/avg_disposals<br/>"
        "/api/v1.0/avg_goals<br/>"
    )

@app.route("/api/v1.0/Disposals")
def Disposals():
    Query = {}
    Fields = {'_id':0,'Season':1,'Total_Disposals':1,'Teams':1,'Ave_disposals':1,'Most Disposals':1,'D_Team':1,'Disposals':1,'%_of_disposals':1}
    Results = list(AFL_Season_Disposals.find(Query, Fields))
    response = make_response(jsonify(Results))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route("/api/v1.0/Goals")
def Goals():
    Query = {}
    Fields = {'_id':0,'Season':1,'Games_Played':1,'Goals':1,'Ave_goals':1,'Most Goals':1,'GK_Team':1,'Goals_Kicked':1,'Percentage_of_goals':1}
    Results = list(AFL_Season_Goals.find(Query, Fields))
    response = make_response(jsonify(Results))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response    

@app.route("/api/v1.0/avg_disposals")
def avg_disposals():
    Query = {}
    Fields = {'_id':0,'Season':1,'Ave_disposals':1}
    Results = list(AFL_Season_Disposals.find(Query, Fields))
    response = make_response(jsonify(Results))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route("/api/v1.0/avg_goals")
def avg_goals():
    Query = {}
    Fields = {'_id':0,'Season':1,'Ave_goals':1}
    Results = list(AFL_Season_Goals.find(Query, Fields))
    response = make_response(jsonify(Results))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

if __name__ == "__main__":
    app.run(debug=True)
