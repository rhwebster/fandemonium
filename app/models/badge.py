from .db import db, col, flo, num, fk, string, boo


class Badge(db.Model):
  __tablename__ = "badges"

  id = col(num, primary_key = True)
  name = col(string, nullable = False)
  image = col(string, nullable = False)

  owners = db.relationship("User", secondary=earned_badges, back_populates="badges")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "image": self.image,
    }