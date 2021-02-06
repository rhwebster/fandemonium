from werkzeug.security import generate_password_hash
from app.models import db, User, Stadium, Photo, Badge, Team
from .stadium_images import *
from .logos import *
from .team_backgrounds import *

leagues = [al = League(name="American League"),
           nl = League(name="National League")
]

divisions = [ale = Division(name="AL East", league=al),
             alc = Division(name="AL Central", league=al),
             alw = Division(name="AL West", league=al),
             nle = Division(name="NL East", league=nl),
             nlc = Division(name="NL Central", league=nl),
             nlw = Division(name="NL West", league=nl),

]

stadiums = [mil = Stadium(name='American Family Field', city_st='Milwaukee, WI', lat=43.027978, lon=-87.97115, team=brewers, image='./stadium_images/miller.jpg'),
            laa = Stadium(name='Angel Stadium', city_st='Anaheim, CA', lat=33.800308, lon=-117.882732, team=angels, image='./stadium_images/angels.jpg'),
            stl = Stadium(name='Busch Stadium', city_st='St Louis, MO', lat=38.622619, lon=-90.192821, team=cardinals, image='./stadium_images/busch.jpg'),
            ari = Stadium(name='Chase Field', city_st='Phoenix, AZ', lat=33.445526, lon=-112.066664, team=dbacks, image='./stadium_images/chase.jpg'),
            nym = Stadium(name='Citi Field', city_st='New York, NY', lat=40.757008, lon=-73.845821, team=mets, image='./stadium_images/citi.png'),
            phi = Stadium(name='Citizens Bank Park', city_st='Philadelphia, PA', lat=39.906057, lon=-75.166495, team=phillies, image='./stadium_images/cbp.jpg'),
            det = Stadium(name='Comerica Park', city_st='Detroit, MI', lat=42.338998, lon=-83.04852, team=tigers, image='./stadium_images/comerica.jpg'),
            col = Stadium(name='Coors Field', city_st='Denver, CO', lat=39.755882, lon=-104.994178, team=rockies, image='./stadium_images/coors.jpg'),
            lad = Stadium(name='Dodger Stadium', city_st='Los Angeles, CA', lat=34.073851, lon=-118.239958, team=dodgers, image='./stadium_images/dodgers.jpg'),
            bos = Stadium(name='Fenway Park', city_st='Boston, MA', lat=42.346676, lon=-71.097218, team=red_sox, image='./stadium_images/fenway.jpg'),
            tex = Stadium(name='Globe Life Field', city_st='Arlington, TX', lat=32.75128, lon=-97.082504, team=rangers, image='./stadium_images/globe_life.jpg'),
            cin = Stadium(name='Great American Ballpark', city_st='Cincinnati, OH', lat=39.097931, lon=-84.508151, team=reds, image='./stadium_images/gabp.jpg'),
            cws = Stadium(name='Guarenteed Rate Field', city_st='Chicago, IL', lat=41.829902, lon=-87.633752, team=white_sox, image='./stadium_images/guaranteed.jpg'),
            kcr = Stadium(name='Kauffman Stadium', city_st='Kansas City, MO', lat=39.051672, lon=-94.480314, team=royals, image='./stadium_images/kauffman.jpeg'),
            mia = Stadium(name='Marlins Park', city_st='Miami, FL', lat=25.778318, lon=-80.219597, team=marlins, image='./stadium_images/marlins.jpg'),
            hou = Stadium(name='Minute Maid Park', city_st='Houston, TX', lat=29.757697, lon=-95.354538, team=astros, image='./stadium_images/minute_maid.jpg'),
            was = Stadium(name='Nationals Park', city_st='Washington, DC', lat=38.87301, lon=-77.007433, team=nationals, image='./stadium_images/nat_park.jpg'),
            oak = Stadium(name='Oakland Coliseum', city_st='Oakland, CA', lat=37.752483, lon=-122.19821, team=athletics, image='./stadium_images/collesium.jpg'),
            sfg = Stadium(name='Oracle Park', city_st='San Francisco, CA', lat=37.778595, lon=-122.38927, team=giants, image='./stadium_images/att.jpg'),
            bal = Stadium(name='Oriole Park at Camden Yards', city_st='Baltimore, MD', lat=39.284052, lon=-76.621512, team=orioles, image='./stadium_images/camden_yards.jpg'),
            sdp = Stadium(name='Petco Park', city_st='San Diego, CA', lat=32.707656, lon=-117.156904, team=padres, image='./stadium_images/petco.jpg'),
            pit = Stadium(name='PNC Park', city_st='Pittsburgh, PA', lat=40.446855, lon=-80.005666, team=pirates, image='./stadium_images/pnc.jpg'),
            cle = Stadium(name='Progressive Field', city_st='Cleveland, OH', lat=41.496211, lon=-81.685229, team=indians, image='./stadium_images/progressive.jpg'),
            tor = Stadium(name='Rogers Centre', city_st='Toronto, ON', lat=43.641438, lon=-79.389353, team=blue_jays, image='./stadium_images/rogers_centre.jpg'),
            sea = Stadium(name='T-Mobile Park', city_st='Seattle, WA', lat=47.591391, lon=-122.332327, team=mariners, image='./stadium_images/t_mobile.jpg'),
            mnt = Stadium(name='Target Field', city_st='Minneapolis, MN', lat=44.981712, lon=-93.27776, team=twins, image='./stadium_images/target.jpg'),
            tbr = Stadium(name='Tropicana Field', city_st='St Petersburg, FL', lat=25.778318, lon=-80.219597, team=rays, image='./stadium_images/tropicana.jpg'),
            atl = Stadium(name='Truist Park', city_st='Cumberland, GA', lat=33.8907, lon=-84.467684, team=braves, image='./stadium_images/truist.jpg'),
            chc = Stadium(name='Wrigley Field', city_st='Chicago, IL', lat=41.948438, lon=-87655333, team=cubs, image='./stadium_images/wrigley.jpg'),
            nyy = Stadium(name='Yankee Stadium', city_st='New York, NY', lat=40.829643, lon=-73.926175, team=yankees, image='./stadium_images/yankee_stadium.jpg')
]

teams = [yankees = Team(name='New York Yankees', logo='./logos/nyy.png', abbr='NYY', season_wins=0, season_losses=0, championships=27, background='./team_backgrounds/yankees.jpg', stadium=nyy, division=ale),
         red_sox = Team(name='Boston Red Sox', logo='./logos/bos.jpg', abbr='BOS', season_wins=0, season_losses=0, championships=9, background='./team_backgrounds/red_sox.jpg', stadium=bos, division=ale),
         blue_jays = Team(name='Toronto Blue Jays', logo='./logos/tor.jpg', abbr='TOR', season_wins=0, season_losses=0, championships=2, background='./team_backgrounds/blue_jays.jpg', stadium=tor, division=ale),
         orioles = Team(name='Baltimore Orioles', logo='./logos/bal.jpg', abbr='BAL', season_wins=0, season_losses=0, championships=3, background='./team_backgrounds/orioles.jpg', stadium=bal, division=ale),
         rays = Team(name='Tampa Bay Rays', logo='./logos/tbr.png', abbr='TB', season_wins=0, season_losses=0, championships=0, background='./team_backgrounds/rays.jpg', stadium=tbr, division=ale),
         indians = Team(name='Cleveland Indians', logo='./logos/cle.jpg', abbr='CLE', season_wins=0, season_losses=0, championships=2, background='./team_backgrounds/indians.jpg', stadium=cle, division=alc),
         tigers = Team(name='Detroit Tigers', logo='./logos/det.jpg', abbr='DET', season_wins=0, season_losses=0, championships=4, background='./team_backgrounds/tigers.jpg', stadium=det, division=alc),
         white_sox = Team(name='Chicago White Sox', logo='./logos/cws.jpg', abbr='CWS', season_wins=0, season_losses=0, championships=3, background='./team_backgrounds/indians.jpg', stadium=cws, division=alc),
         royals = Team(name='Kansas City Royals', logo='./logos/kcr.png', abbr='KC', season_wins=0, season_losses=0, championships=2, background='./team_backgrounds/royals.jpg', stadium=kcr, division=alc),
         twins = Team(name='Minnesota Twins', logo='./logos/min.png', abbr='MIN', season_wins=0, season_losses=0, championships=2, background='./team_backgrounds/twins.jpeg', stadium=mnt, division=alc),
         angels = Team(name='Los Angeles Angels', logo='./logos/laa.jpg', abbr='LAA', season_wins=0, season_losses=0, championships=1, background='./team_backgrounds/angels.jpg', stadium=laa, division=alw),
         athletics = Team(name='Oakland Athletics', logo='./logos/oak.jpg', abbr='OAK', season_wins=0, season_losses=0, championships=4, background='./team_backgrounds/as.jpg', stadium=oak, division=alw),
         mariners = Team(name='Seattle Mariners', logo='./logos/sea.jpg', abbr='SEA', season_wins=0, season_losses=0, championships=0, background='./team_backgrounds/mariners.jpg', stadium=sea, division=alw),
         rangers = Team(name='Texas Rangers', logo='./logos/tex.png', abbr='TEX', season_wins=0, season_losses=0, championships=0, background='./team_backgrounds/rangers.jpg', stadium=tex, division=alw),
         astros = Team(name='Houston Astros', logo='./logos/hou.jpg', abbr='HOU', season_wins=0, season_losses=0, championships=1, background='./team_backgrounds/astros.jpg', stadium=hou, division=alw),
         mets = Team(name='New York Mets', logo='./logos/nym.png', abbr='NYM', season_wins=0, season_losses=0, championships=2, background='./team_backgrounds/mets.jpg', stadium=nym, division=nle),
         phillies = Team(name='Philadelphia Phillies', logo='./logos/phi.jpg', abbr='PHI', season_wins=0, season_losses=0, championships=2, background='./team_backgrounds/phillies.jpg', stadium=phi, division=nle),
         nationals = Team(name='Washington Nationals', logo='./logos/was.jpg', abbr='WAS', season_wins=0, season_losses=0, championships=1, background='./team_backgrounds/nationals.jpg', stadium=was, division=nle),
         braves = Team(name='Atlanta Braves', logo='./logos/atl.jpg', abbr='ATL', season_wins=0, season_losses=0, championships=1, background='./team_backgrounds/braves.jpeg', stadium=atl, division=nle),
         marlins = Team(name='Miami Marlins', logo='./logos/mia.jpg', abbr='MIA', season_wins=0, season_losses=0, championships=2, background='./team_backgrounds/marlins.jpg', stadium=mia, division=nle),
         reds = Team(name='Cincinatti Reds', logo='./logos/cin.jpg', abbr='CIN', season_wins=0, season_losses=0, championships=5, background='./team_backgrounds/reds.jpg', stadium=cin, division=nlc),
         pirates = Team(name='Pittsburgh Pirates', logo='./logos/pit.jpg', abbr='PIT', season_wins=0, season_losses=0, championships=5, background='./team_backgrounds/pirates.jpg', stadium=pit, division=nlc),
         cubs = Team(name='Chicago Cubs', logo='./logos/chc.png', abbr='CHC', season_wins=0, season_losses=0, championships=3, background='./team_backgrounds/cubs.jpg', stadium=chc, division=nlc),
         cardinals = Team(name='St Louis Cardinals', logo='./logos/stl.jpg', abbr='STL', season_wins=0, season_losses=0, championships=11, background='./team_backgrounds/cardinals.jpg', stadium=stl, division=nlc),
         brewers = Team(name='Milwaukee Brewers', logo='./logos/mil.jpg', abbr='MIL', season_wins=0, season_losses=0, championships=0, background='./team_backgrounds/brewers.jpg', stadium=mil, division=nlc),
         rockies = Team(name='Colorado Rockies', logo='./logos/col.jpg', abbr='COL', season_wins=0, season_losses=0, championships=0, background='./team_backgrounds/rockies.jpg', stadium=col, division=nlw),
         diamondbacks = Team(name='Arizona Diamondbacks', logo='./logos/ari.jpg', abbr='ARI', season_wins=0, season_losses=0, championships=1, background='./team_backgrounds/diamondbacks.jpg', stadium=ari, division=nlw),
         padres = Team(name='San Diego Padres', logo='./logos/sdp.png', abbr='SD', season_wins=0, season_losses=0, championships=0, background='./team_backgrounds/padres.jpg', stadium=sdp, division=nlw),
         dodgers = Team(name='Los Angeles Dodgers', logo='./logos/lad.jpg', abbr='LAD', season_wins=0, season_losses=0, championships=6, background='./team_backgrounds/dodgers.jpg', tadium=lad, division=nlw),
         giants = Team(name='San Francisco Giants', logo='./logos/sfg.jpg', abbr='SF', season_wins=0, season_losses=0, championships=3, background='./team_backgrounds/giants.jpg', stadium=sfg, division=nlw)
]

events = [game = Event(name='Attend a game', points=5),
          park = Event(name='Visit a new ballpark', points=100),
          team = Event(name='See a new team', points=10),
          homer = Event(name='Witness a home run', points=1),
          grand_slam = Event(name='Witness a grand slam', points=10),
          cycle = Event(name='Witness a cycle', points=50),
          walk_off = Event(name='Witness a walk off', points=25),
          extras = Event(name='See an extra inning game', points=10),
          no_hitter = Event(name='Witness a no hitter', points=200),
          perfect_game = Event(name='Witness a perfect game', points=250),
          debut = Event(name='See a rookie debut', points=25),
          first_hit = Event(name="Witness a player's first hit", points=50),
          first_homer = Event(name="Witness a player's first home run", points=100),
          playoffs = Event(name="Attend a playoff game", points=25),
          world_series = Event(name='Attend a world series game', points=35),
          clincher = Event(name='Witness a playoff clinching game', points=50),
          three_thousand = Event(name="Witness a player's 3000th hit", points=250),
          five_hundred = Event(name="Witness a player's 500th hit", points=250),
          ten_ks = Event(name='Witness a pitcher strikeout 10', points=10),
          complete_game = Event(name='Witness a pitcher throw a complete game', points=10),
          four_homers = Event(name='Witness a player hit 4 homers', points=25),
          three_thousand_ks = Event(name="Witness a pitcher's 3000th strikeout", points=250),
          comeback = Event(name='Watch your favorite team come from behind', points=10),
          championship = Event(name='Watch your favorite team win a World Series', points=200),
          road = Event(name='Watch your favorite team play on the road', points=25),
          rival = Event(name='Watch your favorite team play their rival', points=10),
          triple_play = Event(name='Witness a triple play', points=75),
          back_back = Event(name='Witness back to back home runs', points=25),
          multi_homer = Event(name='Witness a player hit multiple home runs', points=25),
          triple = Event(name'Witness a player hit a triple', points=50),
]


badges = [fan_c = Badge(name='Fan (Copper)', image=),
          fan_b = Badge(name='Fan (Bronze)', image=),
          fan_s = Badge(name='Fan (Silver)', image=),
          fan_g = Badge(name='Fan (Gold)', image=),
          fan_p = Badge(name='Fan (Platinum)', image=),
          road_warrior_c = Badge(name='Road Warrior (Copper)', image=),
          road_warrior_b = Badge(name='Road Warrior (Bronze)', image=),
          road_warrior_s = Badge(name='Road Warrior (Silver)', image=),
          road_warrior_g = Badge(name='Road Warrior (Gold)', image=),
          road_warrior_p = Badge(name='Road Warrior (Platinum)', image=),
          witness_c = Badge(name='Witness History (Copper)', image=),
          witness_b = Badge(name='Witness History (Bronze)', image=),
          witness_s = Badge(name='Witness History (Silver)', image=),
          witness_g = Badge(name='Witness History (Gold)', image=),
          witness_p = Badge(name='Witness History (Platinum)', image=),
          performance_c = Badge(name='See Individual Greatness (Copper)', image=),
          performance_b = Badge(name='See Individual Greatness (Bronze)', image=),
          performance_s = Badge(name='See Individual Greatness (Silver)', image=),
          performance_g = Badge(name='See Individual Greatness (Gold)', image=),
          performance_p = Badge(name='See Individual Greatness (Platinum)', image=),
          winners_c = Badge(name='See Team Success (Copper)', image=),
          winners_b = Badge(name='See Team Success (Bronze)', image=),
          winners_s = Badge(name='See Team Success (Silver)', image=),
          winners_g = Badge(name='See Team Success (Gold)', image=),
          winners_p = Badge(name='See Team Success (Platinum)', image=),
          journalist_c = Badge(name='Journalist (Copper)', image=),
          journalist_b = Badge(name='Journalist (Bronze)', image=),
          journalist_s = Badge(name='Journalist (Silver)', image=),
          journalist_g = Badge(name='Journalist (Gold)', image=),
          journalist_p = Badge(name='Journalist (Platinum)', image=),
]

def seed_leagues(leagues):
    return [db.seesion.add() for league in leagues]

def seed_divisions(divisions):
    return [db.session.add() for division in divisions]
    
def seed_stadiums(stadiums):
    return [db.session.add() for stadium in stadiums]

def seed_teams(teams):
    return [db.session.add() for team in teams]

def seed_experiences(experiences):
    return [db.session.add() for experience in experiences]

def seed_badges(badges):
    return [db.session.add() for experience in experiences]

def seed_photos(photos):
    return [db.session.add() for photo in photos]


    


   