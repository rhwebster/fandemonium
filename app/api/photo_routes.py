from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Photo

photo_routes = Blueprint('photo', __name__)

@photo_routes.route('/', methods=['POST'])
@login_required
def new_photo():
    data = request.get_json(force = True)

    photo = Photo(
        owner_id = data['userId'],
        game_id = data['gameId'],
        image = data['image'],
        caption = data['caption']
    )

    db.session.add(entry)
    db.session.commit()
    return {'added_photo': photo.to_dict()}
    

@photo_routes.route('/<int:id>')
@login_required
def get_photos(id):
    photos = Photo.query.filter(Photo.owner_id == id).all()
    photo_list = [photo.to_dict() for photo in photos]

    return {'photos': photo_list}

