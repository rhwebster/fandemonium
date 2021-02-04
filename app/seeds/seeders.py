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

stadiums = [mil = Stadium(name='American Family Field', city_st='Milwaukee, WI', lat=43.027978, lon=-87.97115, team=brewers, image='miller.jpg'),
            laa = Stadium(name='Angel Stadium', city_st='Anaheim, CA', lat=33.800308, lon=-117.882732, team=angels, image='angels.jpg'),
            stl = Stadium(name='Busch Stadium', city_st='St Louis, MO', lat=38.622619, lon=-90.192821, team=cardinals, image='busch.jpg'),
            ari = Stadium(name='Chase Field', city_st='Phoenix, AZ', lat=33.445526, lon=-112.066664, team=dbacks, image='chase.jpg'),
            nym = Stadium(name='Citi Field', city_st='New York, NY', lat=40.757008, lon=-73.845821, team=mets, image='citi.png'),
            phi = Stadium(name='Citizens Bank Park', city_st='Philadelphia, PA', lat=39.906057, lon=-75.166495, team=phillies, image='cbp.jpg'),
            det = Stadium(name='Comerica Park', city_st='Detroit, MI', lat=42.338998, lon=-83.04852, team=tigers, image='comerica.jpg'),
            col = Stadium(name='Coors Field', city_st='Denver, CO', lat=39.755882, lon=-104.994178, team=rockies, image='coors.jpg'),
            lad = Stadium(name='Dodger Stadium', city_st='Los Angeles, CA', lat=34.073851, lon=-118.239958, team=dodgers, image='dodgers.jpg'),
            bos = Stadium(name='Fenway Park', city_st='Boston, MA', lat=42.346676, lon=-71.097218, team=red_sox, image='fenway.jpg'),
            tex = Stadium(name='Globe Life Field', city_st='Arlington, TX', lat=32.75128, lon=-97.082504, team=rangers, image='globe_life.jpg'),
            cin = Stadium(name='Great American Ballpark', city_st='Cincinnati, OH', lat=39.097931, lon=-84.508151, team=reds, image='gabp.jpg'),
            cws = Stadium(name='Guarenteed Rate Field', city_st='Chicago, IL', lat=41.829902, lon=-87.633752, team=white_sox, image='guaranteed.jpg'),
            kcr = Stadium(name='Kauffman Stadium', city_st='Kansas City, MO', lat=39.051672, lon=-94.480314, team=royals, image='kauffman.jpeg'),
            mia = Stadium(name='Marlins Park', city_st='Miami, FL', lat=25.778318, lon=-80.219597, team=marlins, image='marlins.jpg'),
            hou = Stadium(name='Minute Maid Park', city_st='Houston, TX', lat=29.757697, lon=-95.354538, team=astros, image='minute_maid.jpg'),
            was = Stadium(name='Nationals Park', city_st='Washington, DC', lat=38.87301, lon=-77.007433, team=nationals, image='nat_park.jpg'),
            oak = Stadium(name='Oakland Coliseum', city_st='Oakland, CA', lat=37.752483, lon=-122.19821, team=athletics, image='collesium.jpg'),
            sfg = Stadium(name='Oracle Park', city_st='San Francisco, CA', lat=37.778595, lon=-122.38927, team=giants, image='att.jpg'),
            bal = Stadium(name='Oriole Park at Camden Yards', city_st='Baltimore, MD', lat=39.284052, lon=-76.621512, team=orioles, image='camden_yards.jpg'),
            sdp = Stadium(name='Petco Park', city_st='San Diego, CA', lat=32.707656, lon=-117.156904, team=padres, image='petco.jpg'),
            pit = Stadium(name='PNC Park', city_st='Pittsburgh, PA', lat=40.446855, lon=-80.005666, team=pirates, image='pnc.jpg'),
            cle = Stadium(name='Progressive Field', city_st='Cleveland, OH', lat=41.496211, lon=-81.685229, team=indians, image='progressive.jpg'),
            tor = Stadium(name='Rogers Centre', city_st='Toronto, ON', lat=43.641438, lon=-79.389353, team=blue_jays, image='rogers_centre.jpg'),
            sea = Stadium(name='T-Mobile Park', city_st='Seattle, WA', lat=47.591391, lon=-122.332327, team=mariners, image='t_mobile.jpg'),
            mnt = Stadium(name='Target Field', city_st='Minneapolis, MN', lat=44.981712, lon=-93.27776, team=twins, image='target.jpg'),
            tbr = Stadium(name='Tropicana Field', city_st='St Petersburg, FL', lat=25.778318, lon=-80.219597, team=rays, image='tropicana.jpg'),
            atl = Stadium(name='Truist Park', city_st='Cumberland, GA', lat=33.8907, lon=-84.467684, team=braves, image='truist.jpg'),
            chc = Stadium(name='Wrigley Field', city_st='Chicago, IL', lat=41.948438, lon=-87655333, team=cubs, image='wrigley.jpg'),
            nyy = Stadium(name='Yankee Stadium', city_st='New York, NY', lat=40.829643, lon=-73.926175, team=yankees, image='yankee_stadium.jpg')
]

teams = [yankees = Team(name='New York Yankees', logo='nyy.png', abbr='NYY', season_wins=0, season_losses=0, championships=27, background='yankees.jpg', rival=red_sox, stadium=nyy, division=ale),
         red_sox = Team(name='Boston Red Sox', logo='bos.jpg', abbr='BOS', season_wins=0, season_losses=0, championships=9, background='red_sox.jpg', rival=yankees, stadium=bos, division=ale),
         blue_jays = Team(name='Toronto Blue Jays', logo='tor.jpg', abbr='TOR', season_wins=0, season_losses=0, championships=2, background='blue_jays.jpg', rival=yankees, stadium=tor, division=ale),
         orioles = Team(name='Baltimore Orioles', logo='bal.jpg', abbr='BAL', season_wins=0, season_losses=0, championships=3, background='orioles.jpg', rival=nationals, stadium=bal, division=ale),
         rays = Team(name='Tampa Bay Rays', logo='tbr.png', abbr='TB', season_wins=0, season_losses=0, championships=0, background='rays.jpg', rival=yankees, stadium=tbr, division=ale),
         indians = Team(name='Cleveland Indians', logo='cle.jpg', abbr='CLE', season_wins=0, season_losses=0, championships=2, background='indians.jpg', rival=tigers, stadium=cle, division=alc),
         tigers = Team(name='Detroit Tigers', logo='det.jpg', abbr='DET', season_wins=0, season_losses=0, championships=4, background='tigers.jpg', rival=indians, stadium=det, division=alc),
         white_sox = Team(name='Chicago White Sox', logo='cws.jpg', abbr='CWS', season_wins=0, season_losses=0, championships=3, background='indians.jpg', rival=cubs, stadium=cws, division=alc),
         royals = Team(name='Kansas City Royals', logo='kcr.png', abbr='KC', season_wins=0, season_losses=0, championships=2, background='royals.jpg', rival=cardinals, stadium=kcr, division=alc),
         twins = Team(name='Minnesota Twins', logo='min.png', abbr='MIN', season_wins=0, season_losses=0, championships=2, background='twins.jpeg', rival=indians, stadium=mnt, division=alc),
         angels = Team(name='Los Angeles Angels', logo='laa.jpg', abbr='LAA', season_wins=0, season_losses=0, championships=1, background='angels.jpg', rival=dodgers, stadium=laa, division=alw),
         athletics = Team(name='Oakland Athletics', logo='oak.jpg', abbr='OAK', season_wins=0, season_losses=0, championships=4, background='as.jpg', rival=giants, stadium=oak, division=alw),
         mariners = Team(name='Seattle Mariners', logo='sea.jpg', abbr='SEA', season_wins=0, season_losses=0, championships=0, background='mariners.jpg', rival=athletics, stadium=sea, division=alw),
         rangers = Team(name='Texas Rangers', logo='tex.png', abbr='TEX', season_wins=0, season_losses=0, championships=0, background='rangers.jpg', rival=astros, stadium=tex, division=alw),
         astros = Team(name='Houston Astros', logo='hou.jpg', abbr='HOU', season_wins=0, season_losses=0, championships=1, background='astros.jpg', rival=rangers, stadium=hou, division=alw),
         mets = Team(name='New York Mets', logo='nym.png', abbr='NYM', season_wins=0, season_losses=0, championships=2, background='mets.jpg', rival=phillies, stadium=nym, division=nle),
         phillies = Team(name='Philadelphia Phillies', logo='phi.jpg', abbr='PHI', season_wins=0, season_losses=0, championships=2, background='phillies.jpg', rival=mets, stadium=phi, division=nle),
         nationals = Team(name='Washington Nationals', logo='was.jpg', abbr='WAS', season_wins=0, season_losses=0, championships=1, background='nationals.jpg', rival=braves, stadium=was, division=nle),
         braves = Team(name='Atlanta Braves', logo='atl.jpg', abbr='ATL', season_wins=0, season_losses=0, championships=1, background='braves.jpeg', rival=nationals, stadium=atl, division=nle),
         marlins = Team(name='Miami Marlins', logo='mia.jpg', abbr='MIA', season_wins=0, season_losses=0, championships=2, background='marlins.jpg', rival=rays, stadium=mia, division=nle),
         reds = Team(name='Cincinatti Reds', logo='cin.jpg', abbr='CIN', season_wins=0, season_losses=0, championships=5, background='reds.jpg', rival=pirates, stadium=cin, division=nlc),
         pirates = Team(name='Pittsburgh Pirates', logo='pit.jpg', abbr='PIT', season_wins=0, season_losses=0, championships=5, background='pirates.jpg', rival=reds, stadium=pit, division=nlc),
         cubs = Team(name='Chicago Cubs', logo='chc.png', abbr='CHC', season_wins=0, season_losses=0, championships=3, background='cubs.jpg', rival=cardinals, stadium=chc, division=nlc),
         cardinals = Team(name='St Louis Cardinals', logo='stl.jpg', abbr='STL', season_wins=0, season_losses=0, championships=11, background='cardinals.jpg', rival=cubs, stadium=stl, division=nlc),
         brewers = Team(name='Milwaukee Brewers', logo='mil.jpg', abbr='MIL', season_wins=0, season_losses=0, championships=0, background='brewers.jpg', rival=cubs, stadium=mil, division=nlc),
         rockies = Team(name='Colorado Rockies', logo='col.jpg', abbr='COL', season_wins=0, season_losses=0, championships=0, background='rockies.jpg', rival=diamondbacks, stadium=col, division=nlw),
         diamondbacks = Team(name='Arizona Diamondbacks', logo='ari.jpg', abbr='ARI', season_wins=0, season_losses=0, championships=1, background='diamondbacks.jpg', rival=rockies, stadium=ari, division=nlw),
         padres = Team(name='San Diego Padres', logo='sdp.png', abbr='SD', season_wins=0, season_losses=0, championships=0, background='padres.jpg', rival=dodgers, stadium=sdp, division=nlw),
         dodgers = Team(name='Los Angeles Dodgers', logo='lad.jpg', abbr='LAD', season_wins=0, season_losses=0, championships=6, background='dodgers.jpg', rival=giants, tadium=lad, division=nlw),
         giants = Team(name='San Francisco Giants', logo='sfg.jpg', abbr='SF', season_wins=0, season_losses=0, championships=3, background='giants.jpg', rival=dodgers, stadium=sfg, division=nlw)
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


    


   