from .db import db, col, flo, num, fk
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


visited_stadiums = db.Table(
    "visited_stadiums",
    db.Model.metadata,
    col("user_id", num, fk("users.id"), primary_key = True)
    col("stadium_id", num, fk("stadiums.id"), primary_key = True)
)

earned_badges = db.Table(
  "earned_badges",
  db.Model.metadata,
  col("user_id", num, fk("users.id"), primary_key = True)
  col("badge_id", num, fk("badges.id"), primary_key = True)
)

games_seen = db.Table(
  "games_seen",
  db.Model.metadata,
  col("user_id", num, fk("users.id"), primary_key = True)
  col("game_id", num, fk("games.id"), primary_key = True)
)

events_witnessed = db.Table(
  "events_witnessed",
  db.Model.metadata,
  col("user_id", num, fk("users.id"), primary_key = True)
  col("event_id", num, fk("experiences.id"), primary_key = True)
)

game_events = db.Table(
  "game_events",
  db.Model.metadata,
  col("game_id", num, fk("games.id"), primary_key = True)
  col("event_id", num, fk("experiences.id"), primary_key = True)
)
class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = col(num, primary_key = True)
  username = col(string(40), nullable = False, unique = True)
  email = col(string(255), nullable = False, unique = True)
  hashed_password = col(string(255), nullable = False)
  favorite_team_id = col(num, fk("teams.id"), nullable = False)
  prof_pic = col(string, nullable = True)
  points = col(num, nullable = False)

  favorite_team = db.relationship("Team", back_populates='fans')
  stadiums = db.relationship("Stadium", secondary=visited_stadiums, back_populates="visitors")
  badges = db.relationship("Badge", secondary=earned_badges, back_populates="owners")
  events = db.relationship("Event", secondary=events_witnessed, back_populates="witnesses")
  games = db.relationship("Game", secondary=games_seen, back_populates="fans")
  photos = db.relationship("Photo", back_populates="owner")



  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "favorite_team_id": self.favorite_team_id,
      "prof_pic": self.prof_pic,
      "points": self.points
    }


class Team(db.Model):
  __tablename__ = "teams"

  id = col(num, primary_key = True)
  name = col(string(50), nullable = False)
  logo = col(string, nullable = False)
  abbr = col(string(3), nullable = False)
  season_wins = col(num, nullable = False)
  season_losses = col(num, nullable = False)
  championships = col(num, nullable = False)
  background = col(string, nullable = False)
  rival_id = col(num, fk("teams.id"), nullable=True)
  home_stadium_id = col(num, fk("stadiums.id"), nullable = False)
  div_id = col(num, fk("divisions.id"), nullable = False)

  fans = db.relationship("User", back_populates='favorite_team')
  stadium = db.relationship("Stadium", back_populates='team')
  home = db.relationship("Game", back_populates='home')
  away = db.relationship("Game", back_populates='away')
  division = db.relationship("Division", back_populates='teams')


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "logo": self.logo,
      "abbr": self.abbr,
      "season_wins": self.season_wins,
      "season_losses": self.season_losses,
      "championships": self.championships,
      "background": self.background,
      "rival": self.rival,
      "home_stadium_id": self.home_stadium_id
      "div_id": self.div_id
    }

class Stadium(db.Model):
  __tablename__ = "stadiums"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  image = col(string, nullable = False)
  city_st = col(string, nullable = False)
  lat = col(flo, nullable = False)
  lon = col(flo, nullable = False)
  home_team_id = col(num, fk("teams.id"), nullable = False)

  team = db.relationship("Team", back_populates='stadium')
  game = db.relationship("Game", back_populates='stadium')
  visitors = db.relationship("User", secondary=visited_stadiums, back_populates="stadiums")

  def to_dict(self):
    return {
      "id": self.id
      "name": self.name,
      "image": self.image,
      "city_st": self.city_st,
      "lat": self.lat,
      "lon": self.lon,
      "home_team_id": self.home_team_id
    }


class Photo(db.Model):
  __tablename__ = "photos"

  id = col(num, primary_key = True)
  image = col(string, nullable = False)
  caption = col(string(140), nullable = True)
  owner_id = col(num, fk("users.id"), nullable = False)
  game_id = col(num, fk("games.id"), nullable = False)
  owner = db.relationship("User", back_populates='photos')
  game = db.relationship("Game", back_populates='photos')

  def to_dict(self):
    return {
      "image": self.id,
      "caption": self.caption,
    }

class League(db.Model):
  __tablename__ = "leagues"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)

  divisions = db.relationship("Division", back_populates='league')

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name
    }

class Division(db.Model):
  __tablename__ = "divisions"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  league_id = col(num, fk("leagues.id"), nullable = False)

  league = db.relationship("Division", back_populates='divisions')
  teams = db.relationship("Team", back_populates='division')


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name
      "league_id": self.league_id
    }


class Event(db.Model):
  __tablename__ = "events"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  points = col(num, primary_key = True)

  games = db.relationship("Game", secondary=game_events, back_populates="events")
  witnesses = db.relationship("User", secondary=events_witnessed, back_populates="events")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "points": self.points
    }


class Game(db.Model):
  __tablename__ = "games"

  id = col(num, primary_key = True)
  home_team_id = col(num, fk("teams.id"), nullable = False)
  away_team_id = col(num, fk("teams.id"), nullable = False)
  home_score = col(num, nullable = False)
  away_score = col(num, nullable = False)
  innings = col(num, nullable = False)
  venue_id = col(num, fk("stadiums.id"), nullable = False)

  stadium = db.relationship("Stadium", back_populates='game')
  fans = db.relationship("User", secondary=games_seen, back_back='games')
  home = db.relationship("Team", back_populates='home')
  away = db.relationship("Team", back_populates='away')
  events = db.relationship("Event", secondary=game_events, back_populates='games')
  photos = db.realationship("Photo", back_populates='game')

  return {
    "id": self.id,
    "home_team_id": self.home_team_id,
    "away_team_id": self.away_team_id,
    "home_score": self.home_score,
    "away_score": self.away_score,
    "innings": self.innings,
    "venue_id": self.venue_id
  }


class Badge(db.Model):
  __tablename__ = "badges"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  image = col(string, nullable = False)

  owners = db.relationship("User", secondary=earned_badges, back_populates="badges")

  def to_dict(self):
  return {
    "id": self.id,
    "name": self.name,
    "image": self.image,
  }