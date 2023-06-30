from flask import Flask, render_template, request
from pandas import array, read_pickle
import json
import os

basedir = os.path.abspath(os.path.dirname(__file__))


app = Flask(__name__)

@app.route('/')
def hello_world():
##    data = read_pickle(os.path.join(basedir+'/classifier.pkl'))
    return render_template('choose.html')

@app.route('/groupMembers')
def viewMembers():
##    data = read_pickle(os.path.join(basedir+'/classifier.pkl'))
    return render_template('index.html')


@app.route('/test')
def clusterView():
    page_id = request.args.get("id")
    if page_id:
        clusterData = handleJson(page_id)
        print(clusterData[0][0], clusterData[1][0])
        return render_template('choose.html', data=clusterData, id=page_id, count=0)
    else:
        return render_template('choose.html')
    
def handleJson(cluster):
    f = open(os.path.join(basedir+'/static/jsons/cluster'+str(cluster)+'.json'))
    # f = open('data.csv')
    data = json.load(f)
    headlines = data['Headline']
    urls = data['Url']
    descriptions = data['Description']
    results = []
    for key in descriptions:
        results.append(array([headlines[key], urls[key], descriptions[key]]))

    return results
