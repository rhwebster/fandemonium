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


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = col(num, primary_key = True)
  username = col(string(40), nullable = False, unique = True)
  email = col(string(255), nullable = False, unique = True)
  hashed_password = col(string(255), nullable = False)
  favorite_team = col(num, fk("teams.id"), nullable = False)
  profile_pic = col(string, nullable = True)
  points = col(num, nullable = False)

  stadiums = db.relationship("Stadium", secondary=visited_stadiums, back_populates="users")
  badges = db.relationship("Badge", secondary=earned_badges, back_populates="users")



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
      "favorite_team": self.favorite_team,
      "points": 0
    }


class Team(db.Model):
    __tablename__ = "teams"

    id = col(num, primary_key = True)
    name = col(string(50), nullable = False)
    logo = col(string, nullable = False)
    season_wins = col(num, nullable = False)
    season_losses = col(num, nullable = False)
    championships = col(num, nullable = False)
    rival = col(num, fk("teams.id"), nullable=True)
    home_stadium = col(num, fk("stadiums.id"), nullable = False)


    def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "logo": self.logo,
      "season_wins": 0,
      "season_losses": 0,
      "championships": self.championships,
      "home_stadium": self.home_stadium
    }


class Stadium(db.Model):
    __tablename__ = "stadiums"

    id = col(num, primary_key = True)
    name = col(string, nullable = False)
    image = col(string, nullable = False)
    city_st = col(string, nullable = False)
    lat = col(flo, nullable = False)
    lon = col(flo, nullable = False)
    home_team = col(num, fk("teams.id"), nullable = False)

    team = db.relationship("Team", back_populates='stadium')
    users = db.relationship("User", secondary=visited_stadiums, back_populates="stadiums")

    def to_dict(self):
    return {
      "id": self.id,num
      "name": self.name,
      "image": self.image,
      "city_st": self.city_state,
      "lat": self.lat,
      "lon": self.lon,
      "home_team": self.home_team
    }


class Photo(db.Model):
    __tablename__ = "photos"

    id = col(num, primary_key = True)
    caption = col(string(140), nullable = True)
    owner_id = col(num, fk("users.id"), nullable = False)
    image = col(string, nullable = False)
    game_id = col(num, fk("games.id"), nullable = False)

    def to_dict(self):
    return {
      "id": self.id,
      "caption": self.caption,
      "owner_id": self.owner_id,
      "image": self.image,
      "game_id": self.game_idc
    }


class Experience(db.Model):
  __tablename__ = "experiences"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  points = col(num, primary_key = True)

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "points": self.points
    }




class Badge(db.Model):
    __tablename__ = "badges"

    id = col(num, primary_key = True)
    name = col(string, nullable = False)
    image = col(string, nullable = False)
    points = col(num, nullable= False)

    users = db.relationship("User", secondary=earned_badges, back_populates="badges")

    def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "image": self.image,
    }