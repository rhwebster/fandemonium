import .db from db, c

class Badge(db.Model):
    __tablename__ = "badges"

    id = col(num, primary_key = True)
    caption = col(string(140), nullable = True)
    owner_id = col(num, fk("users.id"), nullable = False)
    image = col(string, nullable = False)
    game_id = col(num, fk("games.id"), nullable = False)

    def to_dict(self):
    return {
      "id": self.id,
      "caption": self.caption,
      "owner_id": self.owner_id,
      "image": self.image,
      "game_id": self.game_idc
    }