from flask import Flask,render_template,request,url_for
import connect
import base64
from flask_cors import CORS
import json

app = Flask(__name__)

# r'/*' 是通配符，让本服务器所有的URL 都允许跨域请求
CORS(app, resources=r'/*')

TEMPLATES_AUTO_RELOAD = True
SEND_FILE_MAX_AGE_DEFAULT = 0



mongo = connect.Mongo(db_name="service")
db = mongo.connect()

mycol = db['reviews']
account_norm = db['account_norm']
account_vip = db['account_vip']

@app.route('/upload' ,methods=['GET','POST'])
def upload():
    # upload_file = request.files.get('file')
    # print(upload_file)

    # sending = json.loads(li)
    real = json.loads(request.data)
    # print(real)

    mydict = {"id": real[0], "name": real[1],
              "comments": real[2], "photo": real[3]}
    mycol.insert_one(mydict)
    for x in mycol.find():
        print(x)


    return "sucessful"

@app.route('/show', methods=['GET'])
def show():
    return render_template('data.html', mycol=mycol)

@app.route('/regis',methods = ['POST'])
def regis():
    regis_email = json.loads(request.data)
    mydict = {'email':regis_email}
    account_norm.insert_one(mydict)
    for x in account_norm.find():
        print(x['email'])
    return"hellow world"

@app.route('/search_norm',methods = ['POST'])
def search_norm():
    email = json.loads(request.data)
    print("email:",email)
    for x in account_norm.find():
        if email == x['email']:
            print("yes")
            return "1"
        else :
            print("no")
            return "0"
    return "gogogo"

@app.route('/search_vip',methods = ['POST'])
def search_vip():
    email = json.loads(request.data)
    print("email:",email)
    for x in account_vip.find():
        if email == x['email']:
            print("yes")
            return "1"
        else :
            print("no")
            return "0"
    return "gogogo"



