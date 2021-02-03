import .db from db, col, string, num

class Badge(db.Model):
    __tablename__ = "badges"

    id = col(num, primary_key = True)
    name = col(string, nullable = False)
    image = col(string, nullable = False)

    def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "image": self.image,
    }

