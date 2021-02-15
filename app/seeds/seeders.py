from werkzeug.security import generate_password_hash
from app.models import db, User, Stadium, Photo, Badge, Team, League, Division, Event, Game

al = League(name="American League")
nl = League(name="National League")

leagues = [al, nl]

ale = Division(name="AL East", league=al)
alc = Division(name="AL Central", league=al)
alw = Division(name="AL West", league=al)
nle = Division(name="NL East", league=nl)
nlc = Division(name="NL Central", league=nl)
nlw = Division(name="NL West", league=nl)

divisions = [ale, alc, alw, nle, nlc, nlw]

mil = Stadium(name='American Family Field', city_st='Milwaukee, WI', lat=43.027978, lng=-87.97115, image='../../public/stadium_images/miller.jpg')
laa = Stadium(name='Angel Stadium', city_st='Anaheim, CA', lat=33.800308, lng=-117.882732, image='../../public/stadium_images/angels.jpg')
stl = Stadium(name='Busch Stadium', city_st='St Louis, MO', lat=38.622619, lng=-90.192821, image='../../public/stadium_images/busch.jpg')
ari = Stadium(name='Chase Field', city_st='Phoenix, AZ', lat=33.445526, lng=-112.066664, image='../../public/stadium_images/chase.jpg')
nym = Stadium(name='Citi Field', city_st='New York, NY', lat=40.757008, lng=-73.845821, image='../../public/stadium_images/citi.png')
phi = Stadium(name='Citizens Bank Park', city_st='Philadelphia, PA', lat=39.906057, lng=-75.166495, image='../../public/stadium_images/cbp.jpg')
det = Stadium(name='Comerica Park', city_st='Detroit, MI', lat=42.338998, lng=-83.04852, image='../../public/stadium_images/comerica.jpg')
col = Stadium(name='Coors Field', city_st='Denver, CO', lat=39.755882, lng=-104.994178, image='../../public/stadium_images/coors.jpg')
lad = Stadium(name='Dodger Stadium', city_st='Los Angeles, CA', lat=34.073851, lng=-118.239958, image='../../public/stadium_images/dodgers.jpg')
bos = Stadium(name='Fenway Park', city_st='Boston, MA', lat=42.346676, lng=-71.097218, image='../../public/stadium_images/fenway.jpg')
tex = Stadium(name='Globe Life Field', city_st='Arlington, TX', lat=32.75128, lng=-97.082504, image='../../public/stadium_images/globe_life.jpg')
cin = Stadium(name='Great American Ballpark', city_st='Cincinnati, OH', lat=39.097931, lng=-84.508151, image='../../public/stadium_images/gabp.jpg')
cws = Stadium(name='Guarenteed Rate Field', city_st='Chicago, IL', lat=41.829902, lng=-87.633752, image='../../public/stadium_images/guaranteed.jpg')
kcr = Stadium(name='Kauffman Stadium', city_st='Kansas City, MO', lat=39.051672, lng=-94.480314, image='../../public/stadium_images/kauffman.jpeg')
mia = Stadium(name='Marlins Park', city_st='Miami, FL', lat=25.778318, lng=-80.219597, image='../../public/stadium_images/marlins.jpg')
hou = Stadium(name='Minute Maid Park', city_st='Houston, TX', lat=29.757697, lng=-95.354538, image='../../public/stadium_images/minute_maid.jpg')
was = Stadium(name='Nationals Park', city_st='Washington, DC', lat=38.87301, lng=-77.007433, image='../../public/stadium_images/nat_park.jpg')
oak = Stadium(name='Oakland Coliseum', city_st='Oakland, CA', lat=37.752483, lng=-122.19821, image='../../public/stadium_images/collesium.jpg')
sfg = Stadium(name='Oracle Park', city_st='San Francisco, CA', lat=37.778595, lng=-122.38927, image='../../public/stadium_images/att.jpg')
bal = Stadium(name='Oriole Park at Camden Yards', city_st='Baltimore, MD', lat=39.284052, lng=-76.621512, image='../../public/stadium_images/camden_yards.jpg')
sdp = Stadium(name='Petco Park', city_st='San Diego, CA', lat=32.707656, lng=-117.156904, image='../../public/stadium_images/petco.jpg')
pit = Stadium(name='PNC Park', city_st='Pittsburgh, PA', lat=40.446855, lng=-80.005666, image='../../public/stadium_images/pnc.jpg')
cle = Stadium(name='Progressive Field', city_st='Cleveland, OH', lat=41.496211, lng=-81.685229, image='../../public/stadium_images/progressive.jpg')
tor = Stadium(name='Rogers Centre', city_st='Toronto, ON', lat=43.641438, lng=-79.389353, image='../../public/stadium_images/rogers_centre.jpg')
sea = Stadium(name='T-Mobile Park', city_st='Seattle, WA', lat=47.591391, lng=-122.332327, image='../../public/stadium_images/t_mobile.jpg')
mnt = Stadium(name='Target Field', city_st='Minneapolis, MN', lat=44.981712, lng=-93.27776, image='../../public/stadium_images/target.jpg')
tbr = Stadium(name='Tropicana Field', city_st='St Petersburg, FL', lat=25.778318, lng=-80.219597, image='../../public/stadium_images/tropicana.jpg')
atl = Stadium(name='Truist Park', city_st='Cumberland, GA', lat=33.8907, lng=-84.467684, image='../../public/stadium_images/truist.jpg')
chc = Stadium(name='Wrigley Field', city_st='Chicago, IL', lat=41.948438, lng=-87655333, image='../../public/stadium_images/wrigley.jpg')
nyy = Stadium(name='Yankee Stadium', city_st='New York, NY', lat=40.829643, lng=-73.926175, image='../../public/stadium_images/yankee_stadium.jpg')

stadiums = [mil, laa, stl, ari, nym, phi, det, col, lad, bos,
            tex, cin, cws, kcr, mia, hou, was, oak, sfg, bal,
            sdp, pit, cle, tor, sea, mnt, tbr, atl, chc, nyy]

yankees = Team(name='New York Yankees', logo='../../public/logos/nyy.png', abbr='NYY', season_wins=0, season_losses=0, championships=27, background='../../public/team_backgrounds/yankees.jpg', stadium=nyy, division=ale)
red_sox = Team(name='Boston Red Sox', logo='../../public/logos/bos.jpg', abbr='BOS', season_wins=0, season_losses=0, championships=9, background='../../public/team_backgrounds/red_sox.jpg', stadium=bos, division=ale)
blue_jays = Team(name='Toronto Blue Jays', logo='../../public/logos/tor.jpg', abbr='TOR', season_wins=0, season_losses=0, championships=2, background='../../public/team_backgrounds/blue_jays.jpg', stadium=tor, division=ale)
orioles = Team(name='Baltimore Orioles', logo='../../public/logos/bal.jpg', abbr='BAL', season_wins=0, season_losses=0, championships=3, background='../../public/team_backgrounds/orioles.jpg', stadium=bal, division=ale)
rays = Team(name='Tampa Bay Rays', logo='../../public/logos/tbr.png', abbr='TB', season_wins=0, season_losses=0, championships=0, background='../../public/team_backgrounds/rays.jpg', stadium=tbr, division=ale)
indians = Team(name='Cleveland Indians', logo='../../public/logos/cle.jpg', abbr='CLE', season_wins=0, season_losses=0, championships=2, background='../../public/team_backgrounds/indians.jpg', stadium=cle, division=alc)
tigers = Team(name='Detroit Tigers', logo='../../public/logos/det.jpg', abbr='DET', season_wins=0, season_losses=0, championships=4, background='../../public/team_backgrounds/tigers.jpg', stadium=det, division=alc)
white_sox = Team(name='Chicago White Sox', logo='../../public/logos/cws.jpg', abbr='CWS', season_wins=0, season_losses=0, championships=3, background='../../public/team_backgrounds/indians.jpg', stadium=cws, division=alc)
royals = Team(name='Kansas City Royals', logo='../../public/logos/kcr.png', abbr='KC', season_wins=0, season_losses=0, championships=2, background='../../public/team_backgrounds/royals.jpg', stadium=kcr, division=alc)
twins = Team(name='Minnesota Twins', logo='../../public/logos/min.png', abbr='MIN', season_wins=0, season_losses=0, championships=2, background='../../public/team_backgrounds/twins.jpeg', stadium=mnt, division=alc)
angels = Team(name='Los Angeles Angels', logo='../../public/logos/laa.jpg', abbr='LAA', season_wins=0, season_losses=0, championships=1, background='../../public/team_backgrounds/angels.jpg', stadium=laa, division=alw)
athletics = Team(name='Oakland Athletics', logo='../../public/logos/oak.jpg', abbr='OAK', season_wins=0, season_losses=0, championships=4, background='../../public/team_backgrounds/as.jpg', stadium=oak, division=alw)
mariners = Team(name='Seattle Mariners', logo='../../public/logos/sea.jpg', abbr='SEA', season_wins=0, season_losses=0, championships=0, background='../../public/team_backgrounds/mariners.jpg', stadium=sea, division=alw)
rangers = Team(name='Texas Rangers', logo='../../public/logos/tex.png', abbr='TEX', season_wins=0, season_losses=0, championships=0, background='../../public/team_backgrounds/rangers.jpg', stadium=tex, division=alw)
astros = Team(name='Houston Astros', logo='../../public/logos/hou.jpg', abbr='HOU', season_wins=0, season_losses=0, championships=1, background='../../public/team_backgrounds/astros.jpg', stadium=hou, division=alw)
mets = Team(name='New York Mets', logo='../../public/logos/nym.png', abbr='NYM', season_wins=0, season_losses=0, championships=2, background='../../public/team_backgrounds/mets.jpg', stadium=nym, division=nle)
phillies = Team(name='Philadelphia Phillies', logo='../../public/logos/phi.jpg', abbr='PHI', season_wins=0, season_losses=0, championships=2, background='../../public/team_backgrounds/phillies.jpg', stadium=phi, division=nle)
nationals = Team(name='Washington Nationals', logo='../../public/logos/was.jpg', abbr='WAS', season_wins=0, season_losses=0, championships=1, background='../../public/team_backgrounds/nationals.jpg', stadium=was, division=nle)
braves = Team(name='Atlanta Braves', logo='../../public/logos/atl.jpg', abbr='ATL', season_wins=0, season_losses=0, championships=1, background='../../public/team_backgrounds/braves.jpeg', stadium=atl, division=nle)
marlins = Team(name='Miami Marlins', logo='../../public/logos/mia.jpg', abbr='MIA', season_wins=0, season_losses=0, championships=2, background='../../public/team_backgrounds/marlins.jpg', stadium=mia, division=nle)
reds = Team(name='Cincinatti Reds', logo='../../public/logos/cin.jpg', abbr='CIN', season_wins=0, season_losses=0, championships=5, background='../../public/team_backgrounds/reds.jpg', stadium=cin, division=nlc)
pirates = Team(name='Pittsburgh Pirates', logo='../../public/logos/pit.jpg', abbr='PIT', season_wins=0, season_losses=0, championships=5, background='../../public/team_backgrounds/pirates.jpg', stadium=pit, division=nlc)
cubs = Team(name='Chicago Cubs', logo='../../public/logos/chc.png', abbr='CHC', season_wins=0, season_losses=0, championships=3, background='../../public/team_backgrounds/cubs.jpg', stadium=chc, division=nlc)
cardinals = Team(name='St Louis Cardinals', logo='../../public/logos/stl.jpg', abbr='STL', season_wins=0, season_losses=0, championships=11, background='../../public/team_backgrounds/cardinals.jpg', stadium=stl, division=nlc)
brewers = Team(name='Milwaukee Brewers', logo='../../public/logos/mil.jpg', abbr='MIL', season_wins=0, season_losses=0, championships=0, background='../../public/team_backgrounds/brewers.jpg', stadium=mil, division=nlc)
rockies = Team(name='Colorado Rockies', logo='../../public/logos/col.jpg', abbr='COL', season_wins=0, season_losses=0, championships=0, background='../../public/team_backgrounds/rockies.jpg', stadium=col, division=nlw)
diamondbacks = Team(name='Arizona Diamondbacks', logo='../../public/logos/ari.jpg', abbr='ARI', season_wins=0, season_losses=0, championships=1, background='../../public/team_backgrounds/diamondbacks.jpg', stadium=ari, division=nlw)
padres = Team(name='San Diego Padres', logo='../../public/logos/sdp.png', abbr='SD', season_wins=0, season_losses=0, championships=0, background='../../public/team_backgrounds/padres.jpg', stadium=sdp, division=nlw)
dodgers = Team(name='Los Angeles Dodgers', logo='../../public/logos/lad.jpg', abbr='LAD', season_wins=0, season_losses=0, championships=6, background='../../public/team_backgrounds/dodgers.jpg', stadium=lad, division=nlw)
giants = Team(name='San Francisco Giants', logo='../../public/logos/sfg.jpg', abbr='SF', season_wins=0, season_losses=0, championships=3, background='../../public/team_backgrounds/giants.jpg', stadium=sfg, division=nlw)

teams = [yankees, red_sox, blue_jays, orioles, rays,
        indians, tigers, white_sox, royals, twins,
        angels, athletics, mariners, rangers, astros,
        mets, phillies, nationals, braves, marlins,
        reds, pirates, cubs, cardinals, brewers,
        rockies, diamondbacks, padres, dodgers, giants]

game = Event(name='Attend a game', points=5)
park = Event(name='Visit a new ballpark', points=100)
team = Event(name='See a new team', points=10)
homer = Event(name='Witness a home run', points=1)
grand_slam = Event(name='Witness a grand slam', points=10)
cycle = Event(name='Witness a cycle', points=50)
walk_off = Event(name='Witness a walk off', points=25)
extras = Event(name='See an extra inning game', points=10)
no_hitter = Event(name='Witness a no hitter', points=200)
perfect_game = Event(name='Witness a perfect game', points=250)
debut = Event(name='See a rookie debut', points=25)
first_hit = Event(name="Witness a player's first hit", points=50)
first_homer = Event(name="Witness a player's first home run", points=100)
playoffs = Event(name="Attend a playoff game", points=25)
world_series = Event(name='Attend a world series game', points=35)
clincher = Event(name='Witness a playoff clinching game', points=50)
three_thousand = Event(name="Witness a player's 3000th hit", points=250)
five_hundred = Event(name="Witness a player's 500th hit", points=250)
ten_ks = Event(name='Witness a pitcher strikeout 10', points=10)
complete_game = Event(name='Witness a pitcher throw a complete game', points=10)
four_homers = Event(name='Witness a player hit 4 homers', points=25)
three_thousand_ks = Event(name="Witness a pitcher's 3000th strikeout", points=250)
comeback = Event(name='Watch your favorite team come from behind', points=10)
championship = Event(name='Watch your favorite team win a World Series', points=200)
road = Event(name='Watch your favorite team play on the road', points=25)
rival = Event(name='Watch your favorite team play their rival', points=10)
triple_play = Event(name='Witness a triple play', points=75)
back_back = Event(name='Witness back to back home runs', points=25)
multi_homer = Event(name='Witness a player hit multiple home runs', points=25)
triple = Event(name='Witness a player hit a triple', points=50)

events = [game, park, team, homer, grand_slam, cycle,
          walk_off, extras, no_hitter, perfect_game, debut, first_hit,
          first_homer, playoffs, world_series, clincher, three_thousand, five_hundred,
          ten_ks, complete_game, four_homers, three_thousand_ks, comeback, championship,
          road, rival, triple_play, back_back, multi_homer, triple]


fan_c = Badge(name='Fan (Copper)', image='../../public/badges/fan_c.svg')
fan_b = Badge(name='Fan (Bronze)', image='../../public/badges/fan_b.svg')
fan_s = Badge(name='Fan (Silver)', image='../../public/badges/fan_s.svg')
fan_g = Badge(name='Fan (Gold)', image='../../public/badges/fan_g.svg')
fan_p = Badge(name='Fan (Platinum)', image='../../public/badges/fan_p.svg')
road_warrior_c = Badge(name='Road Warrior (Copper)', image='../../public/badges/road_warrior_c.svg')
road_warrior_b = Badge(name='Road Warrior (Bronze)', image='../../public/badges/road_warrior_b.svg')
road_warrior_s = Badge(name='Road Warrior (Silver)', image='../../public/badges/road_warrior_s.svg')
road_warrior_g = Badge(name='Road Warrior (Gold)', image='../../public/badges/road_warrior_g.svg')
road_warrior_p = Badge(name='Road Warrior (Platinum)', image='../../public/badges/road_warrior_p.svg')
witness_c = Badge(name='Witness History (Copper)', image='../../public/badges/witness_c.svg')
witness_b = Badge(name='Witness History (Bronze)', image='../../public/badges/witness_b.svg')
witness_s = Badge(name='Witness History (Silver)', image='../../public/badges/witness_s.svg')
witness_g = Badge(name='Witness History (Gold)', image='../../public/badges/witness_g.svg')
witness_p = Badge(name='Witness History (Platinum)', image='../../public/badges/witness_p.svg')
performance_c = Badge(name='See Individual Greatness (Copper)', image='../../public/badges/performance_c.svg')
performance_b = Badge(name='See Individual Greatness (Bronze)', image='../../public/badges/performance_b.svg')
performance_s = Badge(name='See Individual Greatness (Silver)', image='../../public/badges/performance_s.svg')
performance_g = Badge(name='See Individual Greatness (Gold)', image='../../public/badges/performance_g.svg')
performance_p = Badge(name='See Individual Greatness (Platinum)', image='../../public/badges/performance_p.svg')
winners_c = Badge(name='See Team Success (Copper)', image='../../public/badges/winners_c.svg')
winners_b = Badge(name='See Team Success (Bronze)', image='../../public/badges/winners_b.svg')
winners_s = Badge(name='See Team Success (Silver)', image='../../public/badges/winners_s.svg')
winners_g = Badge(name='See Team Success (Gold)', image='../../public/badges/winners_g.svg')
winners_p = Badge(name='See Team Success (Platinum)', image='../../public/badges/winners_p.svg')
journalist_c = Badge(name='Journalist (Copper)', image='../../public/badges/journalist_c.svg')
journalist_b = Badge(name='Journalist (Bronze)', image='../../public/badges/journalist_b.svg')
journalist_s = Badge(name='Journalist (Silver)', image='../../public/badges/journalist_s.svg')
journalist_g = Badge(name='Journalist (Gold)', image='../../public/badges/journalist_g.svg')
journalist_p = Badge(name='Journalist (Platinum)', image='../../public/badges/journalist_p.svg')

badges = [fan_c, fan_b, fan_s, fan_g, fan_p,
          road_warrior_c, road_warrior_b, road_warrior_s, road_warrior_g, road_warrior_p,
          witness_c, witness_b, witness_s, witness_g, witness_p,
          performance_c, performance_b, performance_s, performance_g, performance_p,
          winners_c, winners_b, winners_s, winners_g, winners_p,
          journalist_c, journalist_b, journalist_s, journalist_g, journalist_p]

demo = User(username='Demo', email='demo@aa.io', password='password', points=100)
ryan = User(username='Ryan', email='ryan@aa.io', password='password', points=50, favorite_team=yankees,
            stadiums=[ari, nym, phi, lad, bos, cws, was, bal, pit, sea, nyy, chc, atl, col, tbr],
            badges=[fan_c, fan_b, fan_s, fan_g, performance_c, performance_s, road_warrior_c, road_warrior_b, winners_c, winners_g, winners_p])
users = [demo, ryan]

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

