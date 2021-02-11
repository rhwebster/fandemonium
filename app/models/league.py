.db import db, col, flo, num, fk, string, boo


class League(db.Model):
  __tablename__ = "leagues"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)

  divisions = db.relationship("Division", back_populates='league')

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name
    }