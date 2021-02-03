import .db from db

class Stadium(db.Model):
    __tablename__ = "stadiums"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    image = db.Column(db.String, nullable = False)
    city_state = db.Column(db.String, nullable = False)
    lat = db.Column(db.Float, nullable = False)
    lon = db.Column(db.Float, nullable = False)
    home_team = db.Column(db.Integer, db.ForeignKey("teams.id"), nullable = False)

    def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "image": self.image,
      "city_state": self.city_state,
      "lat": self.lat,
      "lon": self.lon,
      "home_team": self.home_team
    }

