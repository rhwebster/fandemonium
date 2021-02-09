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
    watched_teams = Team.query.join(Game).filter(Game.fans.any(user_id == id))
    watched_list = [watched_team.to_dict() for watched_team in watched_teams]

    return {'watched': watched_list}