.db import db, col, flo, num, fk, string, boo


class Game(db.Model):
  __tablename__ = "games"

  id = col(num, primary_key = True)
  away_team_id = col(num, fk("teams.id"), nullable = False)
  home_score = col(num, nullable = False)
  away_score = col(num, nullable = False)
  innings = col(num, nullable = False)
  venue_id = col(num, fk("stadiums.id"), nullable = False)
  rivalry_game  = col(boo, nullable = False)

  stadium = db.relationship("Stadium", back_populates='game')
  fans = db.relationship("User", secondary=games_seen, back_populates='games')
  away = db.relationship("Team", back_populates='away')
  events = db.relationship("Event", secondary=game_events, back_populates='games')
  photos = db.relationship("Photo", back_populates='game')

  def to_dict(self):
    return {
      "id": self.id,
      "home_team_id": self.home_team_id,
      "away_team_id": self.away_team_id,
      "home_score": self.home_score,
      "away_score": self.away_score,
      "innings": self.innings,
      "venue_id": self.venue_id,
      "rivalry_game": self.rivalry_game
    }
