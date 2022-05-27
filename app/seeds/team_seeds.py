from app.models import db, Team
from helper import *


yankees = Team(name='New York Yankees', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/nyy.png', abbr='NYY', season_wins=0, season_losses=0, championships=27, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/nyy.jpg', stadium=nyy, division=ale, twitter='Yankees')
red_sox = Team(name='Boston Red Sox', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/bos.jpg', abbr='BOS', season_wins=0, season_losses=0, championships=9, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/boston.jpg', stadium=bos, division=ale, twitter='RedSox')
blue_jays = Team(name='Toronto Blue Jays', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/tor.jpg', abbr='TOR', season_wins=0, season_losses=0, championships=2, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/blue_jays.jpg', stadium=tor, division=ale, twitter='BlueJays')
orioles = Team(name='Baltimore Orioles', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/bal.jpg', abbr='BAL', season_wins=0, season_losses=0, championships=3, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/orioles.jpg', stadium=bal, division=ale, twitter='Orioles')
rays = Team(name='Tampa Bay Rays', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/tbr.png', abbr='TB', season_wins=0, season_losses=0, championships=0, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/rays.jpg', stadium=tbr, division=ale, twitter='RaysBaseball')
indians = Team(name='Cleveland Indians', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/cle.jpg', abbr='CLE', season_wins=0, season_losses=0, championships=2, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/cleveland.jpg', stadium=cle, division=alc, twitter='Indians')
tigers = Team(name='Detroit Tigers', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/det.jpg', abbr='DET', season_wins=0, season_losses=0, championships=4, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/comerica_park.jpg', stadium=det, division=alc, twitter='tigers')
white_sox = Team(name='Chicago White Sox', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/cws.jpg', abbr='CWS', season_wins=0, season_losses=0, championships=3, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/white_sox.jpg', stadium=cws, division=alc, twitter='WhiteSox')
royals = Team(name='Kansas City Royals', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/kcr.png', abbr='KC', season_wins=0, season_losses=0, championships=2, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/royals.jpg', stadium=kcr, division=alc, twitter='royals')
twins = Team(name='Minnesota Twins', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/min.png', abbr='MIN', season_wins=0, season_losses=0, championships=2, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/twins.jpg', stadium=mnt, division=alc, twitter='Twins')
angels = Team(name='Los Angeles Angels', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/laa.jpg', abbr='LAA', season_wins=0, season_losses=0, championships=1, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/angels.jpg', stadium=laa, division=alw, twitter='Angels')
athletics = Team(name='Oakland Athletics', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/oak.jpg', abbr='OAK', season_wins=0, season_losses=0, championships=4, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/colliseum.jpg', stadium=oak, division=alw, twitter='OaklandAs')
mariners = Team(name='Seattle Mariners', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/sea.jpg', abbr='SEA', season_wins=0, season_losses=0, championships=0, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/mariners.jpg', stadium=sea, division=alw, twitter='Mariners')
rangers = Team(name='Texas Rangers', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/tex.png', abbr='TEX', season_wins=0, season_losses=0, championships=0, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/texas.jpg', stadium=tex, division=alw, twitter='Rangers')
astros = Team(name='Houston Astros', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/hou.jpg', abbr='HOU', season_wins=0, season_losses=0, championships=1, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/houston.jpg', stadium=hou, division=alw, twitter='astros')
mets = Team(name='New York Mets', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/nym.png', abbr='NYM', season_wins=0, season_losses=0, championships=2, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/mets.jpg', stadium=nym, division=nle, twitter='Mets')
phillies = Team(name='Philadelphia Phillies', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/phi.jpg', abbr='PHI', season_wins=0, season_losses=0, championships=2, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/philly.jpg', stadium=phi, division=nle, twitter='phillies')
nationals = Team(name='Washington Nationals', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/was.jpg', abbr='WAS', season_wins=0, season_losses=0, championships=1, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/nationals.jpg', stadium=was, division=nle, twitter='Nationals')
braves = Team(name='Atlanta Braves', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/atl.jpg', abbr='ATL', season_wins=0, season_losses=0, championships=1, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/braves.jpeg', stadium=atl, division=nle, twitter='Braves')
marlins = Team(name='Miami Marlins', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/mia.jpg', abbr='MIA', season_wins=0, season_losses=0, championships=2, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/marlins.jpg', stadium=mia, division=nle, twitter='Marlins')
reds = Team(name='Cincinatti Reds', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/cin.jpg', abbr='CIN', season_wins=0, season_losses=0, championships=5, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/reds_background.jpg', stadium=cin, division=nlc, twitter='cincinnatireds')
pirates = Team(name='Pittsburgh Pirates', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/pit.jpg', abbr='PIT', season_wins=0, season_losses=0, championships=5, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/prirates.jpeg', stadium=pit, division=nlc, twitter='Pirates')
cubs = Team(name='Chicago Cubs', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/chc.png', abbr='CHC', season_wins=0, season_losses=0, championships=3, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/chicago.jpg', stadium=chc, division=nlc, twitter='Cubs')
cardinals = Team(name='St Louis Cardinals', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/stl.jpg', abbr='STL', season_wins=0, season_losses=0, championships=11, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/stl_cardinals.jpg', stadium=stl, division=nlc, twitter='stlcardinals')
brewers = Team(name='Milwaukee Brewers', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/mil.jpg', abbr='MIL', season_wins=0, season_losses=0, championships=0, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/miller.jpg', stadium=mil, division=nlc, twitter='Brewers')
rockies = Team(name='Colorado Rockies', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/col.jpg', abbr='COL', season_wins=0, season_losses=0, championships=0, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/rockies.jpg', stadium=col, division=nlw, twitter='Rockies')
diamondbacks = Team(name='Arizona Diamondbacks', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/ari.jpg', abbr='ARI', season_wins=0, season_losses=0, championships=1, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/db.jpg', stadium=ari, division=nlw, twitter='dbacks')
padres = Team(name='San Diego Padres', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/sd.jpg', abbr='SD', season_wins=0, season_losses=0, championships=0, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/padres.jpg', stadium=sdp, division=nlw, twitter='Padres')
dodgers = Team(name='Los Angeles Dodgers', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/lad.jpg', abbr='LAD', season_wins=0, season_losses=0, championships=6, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/la.jpg', stadium=lad, division=nlw, twitter='Dodgers')
giants = Team(name='San Francisco Giants', logo='https://fandemoniumpics.s3.us-east-2.amazonaws.com/logos/sfg.jpg', abbr='SF', season_wins=0, season_losses=0, championships=3, background='https://fandemoniumpics.s3.us-east-2.amazonaws.com/team_backgrounds/attpark2.jpg', stadium=sfg, division=nlw, twitter='SFGiants')

teams = [yankees, red_sox, blue_jays, orioles, rays,
        indians, tigers, white_sox, royals, twins,
        angels, athletics, mariners, rangers, astros,
        mets, phillies, nationals, braves, marlins,
        reds, pirates, cubs, cardinals, brewers,
        rockies, diamondbacks, padres, dodgers, giants]