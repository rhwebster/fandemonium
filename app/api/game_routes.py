from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Game

game_routes = Blueprint('games', __name__)

@game_routes.route('/')
@login_required
def games():
    games = Game.query.all()
    game_list = [game.to_dict() for game in games]

    return {'games': game_list}

@game_routes.route('/<int:id>')
@login_required
def user_seen_games():
    seen_games = seen_games.query.all()
    seen_list = [seen.to_dict() for seen in seen_games]

    return {'seen': seen_list}