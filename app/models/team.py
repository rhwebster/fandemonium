import .db from db, col, num, string, flo, fk

class Team(db.Model):
    __tablename__ = "teams"

    id = col(num, primary_key = True)
    name = col(string(50), nullable = False)
    logo = col(string, nullable = False)
    season_wins = col(num, nullable = False)
    season_losses = col(num, nullable = False)
    championships = col(num, nullable = False)
    home_stadium = col(num, fk("stadiums.id"), nullable = False)

    def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "logo": self.logo,
      "season_wins": self.season_wins,
      "season_losses": self.season_losses,
      "championships": self.championships,
      "home_stadium": self.home_stadium
    }c
