from werkzeug.security import generate_password_hash
from app.models import db, User, Stadium, Photo, Badge, Team, League, Division, Event, Game
from league_seeds import leagues
from division_seeds import divisions
from stadium_seeds import stadiums
from team_seeds import teams
from event_seeds import events
from badge_seeds import badges
from user_seeds import users


def seed_leagues():
    db.session.add_all(leagues)
    db.session.commit()

def seed_divisions():
    db.session.add_all(divisions)
    db.session.commit()
    
def seed_stadiums():
    db.session.add_all(stadiums)
    db.session.commit()

def seed_teams():
    db.session.add_all(teams)
    db.session.commit()

def seed_badges():
    db.session.add_all(badges)
    db.session.commit()

def seed_users():
    db.session.add_all(users)
    db.session.commit()

def seed_games():
    db.session.add_all(games)
    db.session.commit()

def seed_events():
    db.session.add_all(events)
    db.session.commit()

def seed_photos():
    db.session.add_all(photos)
    db.session.commit()

def undo_leagues():
    db.session.execute('TRUNCATE leagues CASCADE;')
    db.session.commit()

def undo_divisions():
    db.session.execute('TRUNCATE divisions CASCADE;')
    db.session.commit() 

def undo_stadiums():
    db.session.execute('TRUNCATE stadiums CASCADE;')
    db.session.commit()

def undo_teams():
    db.session.execute('TRUNCATE teams CASCADE;')
    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()

def undo_games():
    db.session.execute('TRUNCATE games CASCADE;')
    db.session.commit()
    
def undo_events():
    db.session.execute('TRUNCATE events CASCADE;')
    db.session.commit()

def undo_badges():
    db.session.execute('TRUNCATE badges CASCADE;')
    db.session.commit()

def undo_photos():
    db.session.execute('TRUNCATE photos CASCADE;')
    db.session.commit()

