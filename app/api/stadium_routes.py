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
def user_stadiums(id):
    visit_stadiums = Stadium.query.filter(Stadium.visitors.any(user_id == id))
    visited_list = [visit_stadium.to_dict() for visit_stadium in visit_stadiums]

    return {'visited': visited_list}


