from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Stadium

stadium_routes = Blueprint('stadiums', __name__)

@stadium_routes.route('/')
@login_required

def stadiums():
    stadiums = Stadium.query.all()
    stadium_list = [stadium.to_dict() for stadium in stadiums]

    return {'stadiums': stadium_list}

@stadium_routes.route('/<int:id>')
@login_required

def user_stadiums():
    visited_stadiums = visited_stadiums.query.all()
    visited_list = [visited.to_dict() for visited in visited_stadiums]

    return {'visited': visited_list}


