import .db from db

class Badge(db.Model):
    __tablename__ = "badges"

    id = db.Column(db.Integer, primary_key = True)
    caption = db.Column(db.String(140), nullable = True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    image = db.Column(db.String, nullable = False)
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"), nullable = False)

    def to_dict(self):
    return {
      "id": self.id,
      "caption": self.caption,
      "owner_id": self.owner_id,
      "image": self.image,
      "game_id": self.game_id
    }