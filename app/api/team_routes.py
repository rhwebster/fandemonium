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
def user_seen_teams():
    seen_teams = Team.query.filer
    earned_list = [earned.to_dict() for earned in earned_badges]

    return {'earned': earned_list}