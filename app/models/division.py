from .db import db, col, flo, num, fk, string, boo

class Division(db.Model):
  __tablename__ = "divisions"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  league_id = col(num, fk("leagues.id"), nullable = False)

  league = db.relationship("League", back_populates='divisions')
  teams = db.relationship("Team", back_populates='division')


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "league_id": self.league_id
    }