from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Stadium
from app.aws_s3 import *

stadium_routes = Blueprint('stadiums', __name__)

@stadium_routes.route('/')
@login_required
def stadiums():
    stadiums = Stadium.query.all()
    stadium_list = [stadium.to_dict() for stadium in stadiums]
    return {'stadiums': stadium_list}
