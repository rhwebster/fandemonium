from werkzeug.security import generate_password_hash
from app.models import db, User
from helper import *


demo = User(username='Demo', email='demo@aa.io', password='password', points=100,
            stadiums=[ari, lad, pit, col],
            badges=[fan_c, fan_b, performance_c, road_warrior_c])
ryan = User(username='Ryan', email='ryan@aa.io', password='password', points=50, favorite_team=yankees,
            stadiums=[nym, phi, bos, cws, was, bal, nyy, chc],
            badges=[fan_c, fan_b, fan_s, fan_g, performance_c, performance_s, road_warrior_c, road_warrior_b, winners_c, winners_g, winners_p])
users = [demo, ryan]

# # Adds a demo user, you can add other users here if you want
# def seed_users():

#     demo = User(username='Demo', email='demo@aa.io',
#                 password='password')

#     db.session.add(demo)

#     db.session.commit()

# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and resets
# # the auto incrementing primary key
# def undo_users():
#     db.session.execute('TRUNCATE users;')
#     db.session.commit()
