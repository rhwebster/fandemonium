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

@gamme_routes.route('/', methods=['POST'])
@login_required
def new_game():
    data = request.get_json(force=True)

    game = Game(
        home_team_id = data['homeTeamId'],
        away_team_id = data['awayTeamId'],
        home_score = data['homeScore'],
        away_score = data['awayScore'],
        innings = data['innings'],
        venue_id = data['dataId'],
        rivalry_game = data['rivalryGame']
    )

    db.session.add(game)
    db.session.commit()

    return {'added_game': game.to_dict()}

    
@game_routes.route('/<int:id>')
@login_required
def user_seen_games():
    seen_games = seen_games.query.all()
    seen_list = [seen.to_dict() for seen in seen_games]

    return {'seen': seen_list}