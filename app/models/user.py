from .db import db, col, flo, num, fk, string, boo

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = col(num, primary_key = True)
  username = col(string(40), nullable = False, unique = True)
  email = col(string(255), nullable = False, unique = True)
  hashed_password = col(string(255), nullable = False)
  favorite_team_id = col(num, fk("teams.id"), nullable = True)
  prof_pic = col(string, nullable = True)
  points = col(num, nullable = True)

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