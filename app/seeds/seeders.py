from werkzeug.security import generate_password_hash
from app.models import db, User, Stadium, Photo, Badge, Team
from .stadium_images import *

def seed_stadiums():

    mil = Stadium(name='American Family Field', city_st='Milwaukee, WI', lat=43.027978, lon=-87.97115, home_team=brewers, image='miller.jpg')
    laa = Stadium(name='Angel Stadium', city_st='Anaheim, CA', lat=33.800308, lon=-117.882732, home_team=angels, image='angels.jpg')
    stl = Stadium(name='Busch Stadium', city_st='St Louis, MO', lat=38.622619, lon=-90.192821, home_team=cardinals, image='busch.jpg')
    ari = Stadium(name='Chase Field', city_st='Phoenix, AZ', lat=33.445526, lon=-112.066664, home_team=dbacks, image='chase.jpg')
    nym = Stadium(name='Citi Field', city_st='New York, NY', lat=40.757008, lon=-73.845821, home_team=mets, image='citi.png')
    phi = Stadium(name='Citizens Bank Park', city_st='Philadelphia, PA', lat=39.906057, lon=-75.166495, home_team=phillies, image='cbp.jpg')
    det = Stadium(name='Comerica Park', city_st='Detroit, MI', lat=42.338998, lon=-83.04852, home_team=tigers, image='comerica.jpg')
    col = Stadium(name='Coors Field', city_st='Denver, CO', lat=39.755882, lon=-104.994178, home_team=rockies, image='coors.jpg')
    laa = Stadium(name='Dodger Stadium', city_st='Los Angeles, CA', lat=34.073851, lon=-118.239958, home_team=dodgers, image='dodgers.jpg')
    bos = Stadium(name='Fenway Park', city_st='Boston, MA', lat=42.346676, lon=-71.097218, home_team=red_sox, image='fenway.jpg')
    tex = Stadium(name='Globe Life Field', city_st='Arlington, TX', lat=32.75128, lon=-97.082504, home_team=rangers, image='globe_life.jpg')
    cin = Stadium(name='Great American Ballpark', city_st='Cincinnati, OH', lat=39.097931, lon=-84.508151, home_team=reds, image='gabp.jpg')
    chw = Stadium(name='Guarenteed Rate Field', city_st='Chicago, IL', lat=41.829902, lon=-87.633752, home_team=white_sox, image='guaranteed.jpg')
    kcr = Stadium(name='Kauffman Stadium', city_st='Kansas City, MO', lat=39.051672, lon=-94.480314, home_team=royals, image='kauffman.jpeg')
    mia = Stadium(name='Marlins Park', city_st='Miami, FL', lat=25.778318, lon=-80.219597, home_team=marlins, image='marlins.jpg')
    hou = Stadium(name='Minute Maid Park', city_st='Houston, TX', lat=29.757697, lon=-95.354538, home_team=astros, image='minute_maid.jpg')
    was = Stadium(name='Nationals Park', city_st='Washington, DC', lat=38.87301, lon=-77.007433, home_team=nationals, image='nat_park.jpg')
    oak = Stadium(name='Oakland Coliseum', city_st='Oakland, CA', lat=37.752483, lon=-122.19821, home_team=athletics, image='collesium.jpg')
    sfg = Stadium(name='Oracle Park', city_st='San Francisco, CA', lat=37.778595, lon=-122.38927, home_team=giants, image='att.jpg')
    bal = Stadium(name='Oriole Park at Camden Yards', city_st='Baltimore, MD', lat=39.284052, lon=-76.621512, home_team=orioles, image='camden_yards.jpg')
    sdp = Stadium(name='Petco Park', city_st='San Diego, CA', lat=32.707656, lon=-117.156904, home_team=padres, image='petco.jpg')
    pit = Stadium(name='PNC Park', city_st='Pittsburgh, PA', lat=40.446855, lon=-80.005666, home_team=pirates, image='pnc.jpg')
    cle = Stadium(name='Progressive Field', city_st='Cleveland, OH', lat=41.496211, lon=-81.685229, home_team=indians, image='progressive.jpg')
    tor = Stadium(name='Rogers Centre', city_st='Toronto, ON', lat=43.641438, lon=-79.389353, home_team=blue_jays, image='rogers_centre.jpg')
    sea = Stadium(name='T-Mobile Park', city_st='Seattle, WA', lat=47.591391, lon=-122.332327, home_team=mariners, image='t_mobile.jpg')
    mnt = Stadium(name='Target Field', city_st='Minneapolis, MN', lat=44.981712, lon=-93.27776, home_team=twins, image='target.jpg')
    tbr = Stadium(name='Tropicana Field', city_st='St Petersburg, FL', lat=25.778318, lon=-80.219597, home_team=rays, image='tropicana.jpg')
    atl = Stadium(name='Truist Park', city_st='Cumberland, GA', lat=33.8907, lon=-84.467684, home_team=braves, image='truist.jpg')
    chc = Stadium(name='Wrigley Field', city_st='Chicago, IL', lat=41.948438, lon=-87655333, home_team=cubs, image='wrigley.jpg')
    nyy = Stadium(name='Yankee Stadium', city_st='New York, NY', lat=40.829643, lon=-73.926175, home_team=yankees, image='yankee_stadium.jpg')
   