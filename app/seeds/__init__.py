from flask.cli import AppGroup
from .seeders import seed_users, undo_users, seed_leagues, undo_leagues, seed_divisions, undo_divisions, seed_stadiums, undo_stadiums, seed_teams, undo_teams, seed_events, undo_events, seed_badges, undo_badges, seed_photos, undo_photos, seed_games, undo_games

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_leagues()
    seed_divisions()
    seed_badges()
    seed_stadiums()
    seed_teams()
    seed_users()
    seed_events()
    seed_photos()
    seed_games()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_photos()
    undo_events()
    undo_users()
    undo_games()
    undo_teams()
    undo_stadiums()
    undo_badges()
    undo_divisions()
    undo_leagues()
    # Add other undo functions here
