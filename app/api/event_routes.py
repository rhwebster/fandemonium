from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Event
from app.aws_s3 import *

event_routes = Blueprint('events', __name__)

@event_routes.route('/')
@login_required
def events():
    events = Event.query.all()
    event_list = [event.to_dict() for event in events]

    return {'events': event_list}

@event_routes.route('/<int:id>')
@login_required
def user_witnessed_events(id):
    witnessed_events = Event.query.filter(Event.witnesses.any(user_id == id))
    witnessed_list = [witnessed_event.to_dict() for witnessed_event in witnessed_events]

    return {'witnessed': witnessed_list}