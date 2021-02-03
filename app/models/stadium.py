import .db from db, col, flo, num, string, fk
import .user from 

visited_stadiums = db.Table(
    "visited_stadiums",
    db.Model.metadata,
    col("user_id", num, fk("users.id"), primary_key = True)
    col("stadium_id", num, fk("stadiums.id"), primary_key = True)
)
ol
class Stadium(db.Model):
    __tablename__ = "stadiums"

    id = col(num, primary_key = True)
    name = col(string, nullable = False)
    image = col(string, nullable = False)
    city_state = col(string, nullable = False)
    lat = col(flo, nullable = False)
    lon = col(flo, nullable = False)
    home_team = col(num, fk("teams.id"), nullable = False)

    def to_dict(self):
    return {
      "id": self.id,num
      "name": self.name,
      "image": self.image,
      "city_state": self.city_state,
      "lat": self.lat,
      "lon": self.lon,
      "home_team": self.home_team
    }

