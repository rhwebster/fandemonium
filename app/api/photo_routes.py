from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Photo
from app.aws_s3 import *

photo_routes = Blueprint('photo', __name__)

@photo_routes.route('/<int:id>/', methods=['GET', 'POST', 'DELETE'])
@login_required
def photos(id):
    if request.method == "GET":
        photos = Photo.query.filter(Photo.owner_id == id).all()
        photo_list = [photo.to_dict() for photo in photos]

        return {'photos': photo_list}
    elif request.method == "POST":
        data = request.get_json(force=True)
        photo = Photo(
            owner_id=data['userId'],
            image=data['photo'],
            caption=data['caption']
        )

        db.session.add(photo)
        db.session.commit()
        return{'photo': photo.to_dict()}
    # elif request.method == "DELETE":
    #     data = request.get_json(force=True)
    #     photo_id=data['id']
    #     photo = Photo.query.get(photo_id)
    #     if photo:
    #         db.session.delete(photo)
    #         db.session.commit()
    #         return {'message': 'Photo was successfully deleted'}
    #     else:
    #         return {'errors': 'Photo could not be found'}