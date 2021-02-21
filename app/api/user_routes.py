from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Photo, Badge, Team, Stadium
from app.aws_s3 import *

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:user_id>/photos', methods=['GET', 'POST'])
@login_required
def get_user_photos(user_id):
    if request.method == "GET":
        photos = Photo.query.filter(Photo.user_id == user_id).all
        photo_list = [photo.to_dict() for photo in photos]

        return {'photos': photo_list}


@user_routes.route('/<int:user_id>/badges', methods=['GET', 'POST'])
@login_required
def user_badges(user_id):
    if request.method == "POST":
        user = User.query.get(id)
        data = request.get_json(force=True)
        badge = Badge.query.get(data['badgeId'])

        badge.owners.append(user)
        db.session.commit()
        return {'checked_in_stadium': data['stadiumId']}
    elif request.method == "GET":
        user = User.query.get(id)
        user_badges = user.badges
        badge_list = [badge.to_dict() for badge in user_badges]
        return {'user_badges': badge_list}


@user_routes.route('/<int:id>/favorite', methods=['GET','PATCH'])
@login_required
def add_favorite_team(id):
    if request.method == "PATCH":
        user = User.query.get(id)
        data = request.get_json(force=True)
        team_id = data['favoriteTeamId']
        user.favorite_team = Team.query.get(team_id)
        db.session.add(user.favorite_team)
        db.session.commit()
        return {'set_favorite_team': data['favoriteTeamId']}

    if request.method == "GET":
        user = User.query.get(id)
        team = user.favorite_team
        return team.to_dict()


@user_routes.route('/<int:id>/stadiums/', methods=['GET','POST'])
@login_required
def visited_stadiums(id):
    if request.method == "POST":
        user = User.query.get(id)
        data = request.get_json(force=True)
        stadium = Stadium.query.get(data['stadiumId'])

        stadium.visitors.append(user)
        db.session.commit()
        return {'checked_in_stadium': data['stadiumId']}
    elif request.method == "GET":
        user = User.query.get(id)
        user_stadiums = user.stadiums
        stadium_list = [stadium.to_dict() for stadium in user_stadiums]
        return {'visited': stadium_list}
        


@user_routes.route('/<int:id>/profpic', methods=['PATCH'])
@login_required
def new_photo(id):
    user = User.query.get(id)
    data = request.get_json(force=True)
    user.prof_pic = data['photo']
    db.session.commit()
    return {'added_prof_pic': str(data['photo'])}



