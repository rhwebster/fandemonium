from .db import db, col, flo, num, fk, string, boo

class Stadium(db.Model):
  __tablename__ = "stadiums"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  image = col(string, nullable = False)
  city_st = col(string, nullable = False)
  lat = col(flo, nullable = False)
  lon = col(flo, nullable = False)

  team = db.relationship("Team", back_populates='stadium')
  game = db.relationship("Game", back_populates='stadium')
  visitors = db.relationship("User", secondary=visited_stadiums, back_populates="stadiums")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "image": self.image,
      "city_st": self.city_st,
      "lat": self.lat,
      "lon": self.lon,
      "home_team_id": self.home_team_id
    }
