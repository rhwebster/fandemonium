from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Photo
from app.aws_s3 import *

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

@photo_routes.route('/', methods=['GET','POST'])
def upload_file():
    if request.method == "POST":
        if "image" not in request.files:
            print("No image key in request.files")
            return {'errors': 'no user file'}, 401

        file = request.files["image"]

        if file.filename == "":
            print("Please select a file")
            return {'errors': 'no filename'}, 401

# if file and allowed_file(file.filename):
        file.filename = secure_filename(file.filename)
        output = s3_upload(file)
# Add and commit to database
        return {'output': str(output)}
    if request.method == "GET":
        photos = Photo.query.filter(owner_id == id)