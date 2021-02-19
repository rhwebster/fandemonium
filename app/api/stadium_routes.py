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
    print('STADIUMS ~~~>', stadium_list)
    return {'stadiums': stadium_list}

@stadium_routes.route('/<int:id>')
@login_required
def user_stadiums(id):
    user = User.query.get(id)
    visited = visited_stadiums.query.filter(user_id == id).all()
    print('VISITED ~~~>', visited)
    visited_list = [visited_stadium.to_dict() for visited_stadium in visited_stadiums]

    return {'visited': visited_list}
