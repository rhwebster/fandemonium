import .db from db

class Team(db.Model):
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False)
    logo = db.Column(db.String, nullable = False)
    season_wins = db.Column(db.Integer, nullable = False)
    season_losses = db.Column(db.Integer, nullable = False)
    championships = db.Column(db.Integer, nullable = False)
    home_stadium = db.Column(db.Integer, db.ForeignKey("stadiums.id"), nullable = False)

    def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "logo": self.logo,
      "season_wins": self.season_wins,
      "season_losses": self.season_losses,
      "championships": self.championships,
      "home_stadium": self.home_stadium
    }
