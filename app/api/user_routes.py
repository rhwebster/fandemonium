from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Photo, Badge, Team
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


@user_routes.route('/<int:user_id>/photos', methods=['GET'])
@login_required
def get_user_photos(user_id):
    photos = Photo.query.filter(Photo.user_id == user_id).all

    if not photos:
        return {}, 404
    photo_list = [photos.to_dict() for photo in photos]
    return {'photos': photo_list}

def render_picture(data):

    return base64.b64encode(data).decode('ascii')


@user_routes.route('/<int:user_id>/badges', methods=['GET'])
@login_required
def get_user_badges(user_id):
    badges = earned_badges.query.filter(user_id).all()
    badge_list = [badge.to_dict() for badge in badges]

    return {'badges': badge_list}

# @user_routes.route('/<int:user_id>/favorite', methods=['GET'])
# @login_required
# def get_favorite_team(user_id):
#     favorite_team = User.query.get(favorite_team_id)

@user_routes.route('/<int:user_id>/favorite', methods=['PATCH'])
@login_required
def favorite_team(user_id):

    user = User.query.get(user_id)
    print(request.data)
    data = request.get_json(force=True)
    print('data~~~~>', data)
    user.favorite_team_id = data['favoriteTeam']
    db.session.add(user.favorite_team_id)
    db.session.commit()
    return {'set_favorite_team': data['favoriteTeam']}

@user_routes.route('/<int:user_id>/checkin', methods=['POST'])
@login_required
def checkin_stadium(user_id):
    user = User.query.get(user_id)
    data = request.get_json(force=True)

    user.stadiums = data['stadium']
    db.session.add(user.stadiums)
    db.session.commit()
    print(user.stadiums.name)
    return {'visited': user.stadiums}


@user_routes.route('/<int:id>/photo', methods=['PATCH'])
@login_required
def new_photo(id):
    user = User.query.get(id)

    data = request.get_json(force=True)
    user.prof_pic = data['photo']
    db.session.commit()
    return {'added_prof_pic': str(data['photo'])}

@user_routes.route('/photos', methods=['POST'])
def upload_file():

    if "image" not in request.files:
        print("No image key in request.files")
        return {'errors': 'no user file'}, 401

    file = request.files["image"]

    if file.filename == "":
        print("Please select a file")
        return {'errors': 'no filename'}, 401

    # if file and allowed_file(file.filename):
    file.filename = secure_filename(file.filename)
    output = upload_to_s3(file)
    # Add and commit to database
    return {'output': str(output)}

# @user_routes.route('/<int:user_id>/seen')
# @login_required
# def user_seen_teams(user_id):
#     watched_teams = Team.query.join(Game).filter(Game.fans.any(user_id == id))
#     watched_list = [watched_team.to_dict() for watched_team in watched_teams]

#     return {'watched': watched_list}
