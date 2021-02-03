from flask import Flask
from flask_migrate import Migrate
from .db import db
from .user import User
from .badge import Badge
from photo import photo
from .stadium import Stadium
from .team import Team

import os

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)
