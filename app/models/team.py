from .db import db, col, flo, num, fk, string, boo

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
  stadium_id = col(num, fk("stadiums.id"), nullable = False)
  div_id = col(num, fk("divisions.id"), nullable = False)

  fans = db.relationship("User", back_populates='favorite_team')
  stadium = db.relationship("Stadium", back_populates='team')
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
      "home_stadium_id": self.home_stadium_id,
      "div_id": self.div_id
    }