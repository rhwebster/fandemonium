from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
col = db.Column
num = db.Integer
string = db.String
flo = db.float
fk = db.ForeignKey