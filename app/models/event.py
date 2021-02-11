from .db import db, col, flo, num, fk, string, boo

class Event(db.Model):
  __tablename__ = "events"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  points = col(num, nullable = False)

  games = db.relationship("Game", secondary=game_events, back_populates="events")
  witnesses = db.relationship("User", secondary=events_witnessed, back_populates="events")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "points": self.points
    }

