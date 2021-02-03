from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Photo

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

@user_routes.route('/<ind:user_id>/photos', methods = ['GET'])
@login_required
def get_user_photos(user_id):
    photos = Photo.query.filter(Photo.user_id == user_id).all

    if not photos:
        return {}, 404
    photo_list = [photos.to_dict() for photo in photos]
    return {'photos': photo_list}

def render_picture(data):

    return base64.b64encode(data).decode('ascii')
