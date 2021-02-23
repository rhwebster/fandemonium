from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Team
from app.aws_s3 import *

team_routes = Blueprint('teams', __name__)

@team_routes.route('/')
@login_required
def get_teams():
    teams = Team.query.all()
    team_list = [team.to_dict() for team in teams]

    return {'teams': team_list}
