from .db import db, col, flo, num, fk, string, boo
from werkzeug.security import generate_password_hash, check_password_hash
from .team import Team
from .stadium import Stadium
from .user import User
from .photo import Photo
from .league import League
from .division import Division
from .event import Event
from .game import Game
from .badge import Badge
from flask_login import UserMixin


visited_stadiums = db.Table(
    "visited_stadiums",
    db.Model.metadata,
    col("user_id", num, fk("users.id"), primary_key=True),
    col("stadium_id", num, fk("stadiums.id"), primary_key=True)
)

earned_badges = db.Table(
  "earned_badges",
  db.Model.metadata,
  col("user_id", num, fk("users.id"), primary_key=True),
  col("badge_id", num, fk("badges.id"), primary_key=True)
)

games_seen = db.Table(
  "games_seen",
  db.Model.metadata,
  col("user_id", num, fk("users.id"), primary_key=True),
  col("game_id", num, fk("games.id"), primary_key=True)
)

events_witnessed = db.Table(
  "events_witnessed",
  db.Model.metadata,
  col("user_id", num, fk("users.id"), primary_key=True),
  col("event_id", num, fk("events.id"), primary_key=True)
)

game_events = db.Table(
  "game_events",
  db.Model.metadata,
  col("game_id", num, fk("games.id"), primary_key=True),
  col("event_id", num, fk("events.id"), primary_key=True)
)