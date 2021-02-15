from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Team

team_routes = Blueprint('teams', __name__)

@team_routes.route('/')
@login_required
def get_teams():
    teams = Team.query.all()
    team_list = [team.to_dict() for team in teams]

    return {'teams': team_list}


@team_routes.route('/<int:id>')
@login_required
def favorite_team(id):
    favorite_team = Team.query.get(id)
    print('-----', favorite_team)
    return favorite_team.to_dict()