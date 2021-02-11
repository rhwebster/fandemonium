.db import db, col, flo, num, fk, string, boo

class Photo(db.Model):
  __tablename__ = "photos"

  id = col(num, primary_key = True)
  image = col(string, nullable = False)
  caption = col(string(140), nullable = True)
  owner_id = col(num, fk("users.id"), nullable = False)
  game_id = col(num, fk("games.id"), nullable = False)

  owner = db.relationship("User", back_populates='photos')
  game = db.relationship("Game", back_populates='photos')

  def to_dict(self):
    return {
      "owner_id": self.owner_id,
      "game_id": self.game_id,
      "image": self.image,
      "caption": self.caption,
    }