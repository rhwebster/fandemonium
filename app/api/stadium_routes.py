from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Stadium

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
    visited = visited_stadiums.query.filter(user_id).all()
    visited_list = [visited_stadium.to_dict() for visited_stadium in visited_stadiums]

    return {'visited': visited_list}
