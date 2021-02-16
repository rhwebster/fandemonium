from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Badge
from app.aws_s3 import *

badge_routes = Blueprint('badges', __name__)

@badge_routes.route('/')
@login_required
def badge():
    badges = Badge.query.all()
    badge_list = [badge.to_dict() for badge in badges]

    return {'badges': badge_list}

@badge_routes.route('/<int:id>')
@login_required
def user_badges(id):
    user = User.query.get(id)
    earned_badges = User.badges.query.all()
    earned_list = [earned_badge.to_dict() for earned_badge in earned_badges]

    return {'earned': earned_list}

@badge_routes.route('/<int:id>', methods=['POST'])
@login_required
def new_badge(id):
    user = User.query.get(id)

