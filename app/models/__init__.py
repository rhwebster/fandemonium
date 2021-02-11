from flask import Flask
from flask_migrate import Migrate
from .db import db
from .joins import User, Team, Stadium, Photo, League, Division, Event, Game, Badge
from app.config import Config
import os

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)
