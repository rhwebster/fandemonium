from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Photo

photo_routes = Blueprint('photo', __name__)


@photo_routes.route('<int:id>')
@login_required
def get_photos(id):
    photos = Photo.query.filter(Photo.owner_id == id).all()
    photo_list = [photo.to_dict() for photo in photos]

    return {'photos': photo_list}

