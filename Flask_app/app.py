import os
import json

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:easypass2@@localhost/scooter'
# db = SQLAlchemy(app)

connection_string = "root:easypass2@@localhost/scooter"
engine = create_engine(f'mysql://{connection_string}')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
scooter = Base.classes.scooter_merged
weather = Base.classes.weather_table

# Create our session (link) from Python to the DB
session=Session(engine)



@app.route("/")
def home():
    return render_template("temp.html")

@app.route("/temperature")
def temperature():
    temp_hours=session.query(weather.temperature, func.count(weather.hour)).\
    group_by(weather.temperature).all()

    temp_hour_df = pd.DataFrame(temp_hours, columns=['Temperature','hours'])

    temp_rides=session.query(scooter.temperature, func.count(scooter.ID)).\
    group_by(scooter.temperature).all()

    temp_rides_df = pd.DataFrame(temp_rides, columns=['Temperature','total_rides'])

    temperature_merged=pd.merge(temp_rides_df, temp_hour_df, on='Temperature')
    

    temperature_merged['rides/hr']= temperature_merged['total_rides']/temperature_merged['hours']

    json_file=temperature_merged.to_json(index=True, orient='records')

    return json_file

@app.route("/day_of_week")
def day_of_week():
    day_of_week=session.query(scooter.Day_of_week, func.count(scooter.ID)).\
    group_by(scooter.Day_of_week).all()

    day_of_week_df = pd.DataFrame(day_of_week, columns=['day','total_rides'])

    day_of_week_df['day']=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    json_file=day_of_week_df.to_json(index=True, orient='records')

    return json_file


@app.route("/month_of_year")
def month_of_year():
    month_of_year=session.query(scooter.Month, func.count(scooter.ID)).\
    group_by(scooter.Month).all()

    month_of_year_df = pd.DataFrame(month_of_year, columns=['month','total_rides'])

    month_of_year_df['month']=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec']

    json_file=month_of_year_df.to_json(index=True, orient='records')

    return json_file




@app.route("/hour_of_day")
def hour_of_day():
    hour_of_day=session.query(scooter.Hour, func.count(scooter.ID)).\
    group_by(scooter.Hour).all()
    hour_of_day_df=pd.DataFrame(hour_of_day, columns=['hour','total_rides'])
    hour_of_day_2=hour_of_day_df.astype('int64', copy=False)

    json_file=hour_of_day_2.to_json(index=True, orient='records')

    return json_file



if __name__ == "__main__":
    app.debug = True
    app.run()

