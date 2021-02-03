import .db from db

class Badge(db.Model):
    __tablename__ = "badges"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    image = db.Column(db.String, nullable = False)

    def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "image": self.image,
    }

