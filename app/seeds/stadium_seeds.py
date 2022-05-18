from app.models import db, Stadium
from helper import *

mil = Stadium(name='American Family Field', city_st='Milwaukee, WI', lat=43.027978, lng=-87.97115, division=nlc, image='https://fandemoniumpics.s3.amazonaws.com/stadium_images/miller.jpg')
laa = Stadium(name='Angel Stadium', city_st='Anaheim, CA', lat=33.800308, lng=-117.882732, division=alw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/angels.jpg')
stl = Stadium(name='Busch Stadium', city_st='St Louis, MO', lat=38.622619, lng=-90.192821, division=nlc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/busch.jpg')
ari = Stadium(name='Chase Field', city_st='Phoenix, AZ', lat=33.445526, lng=-112.066664, division=nlw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/chase.jpg')
nym = Stadium(name='Citi Field', city_st='New York, NY', lat=40.757008, lng=-73.845821, division=nle, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/citi.png')
phi = Stadium(name='Citizens Bank Park', city_st='Philadelphia, PA', lat=39.906057, lng=-75.166495, division=nle, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/cbp.jpg')
det = Stadium(name='Comerica Park', city_st='Detroit, MI', lat=42.338998, lng=-83.04852, division=alc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/comerica.jpg')
col = Stadium(name='Coors Field', city_st='Denver, CO', lat=39.755882, lng=-104.994178, division=nlw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/coors_field.jpg')
lad = Stadium(name='Dodger Stadium', city_st='Los Angeles, CA', lat=34.073851, lng=-118.239958, division=nlw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/dodgers.jpg')
bos = Stadium(name='Fenway Park', city_st='Boston, MA', lat=42.346676, lng=-71.097218, division=ale, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/fenway.jpeg')
tex = Stadium(name='Globe Life Field', city_st='Arlington, TX', lat=32.75128, lng=-97.082504, division=alw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/globe_life.jpg')
cin = Stadium(name='Great American Ballpark', city_st='Cincinnati, OH', lat=39.097931, lng=-84.508151, division=nlc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/gabp.jpg')
cws = Stadium(name='Guarenteed Rate Field', city_st='Chicago, IL', lat=41.829902, lng=-87.633752, division=alc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/guarenteed.jpg')
kcr = Stadium(name='Kauffman Stadium', city_st='Kansas City, MO', lat=39.051672, lng=-94.480314, division=alc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/kauffman.jpeg')
mia = Stadium(name='Marlins Park', city_st='Miami, FL', lat=25.778318, lng=-80.219597, division=nle, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/marlins.jpg')
hou = Stadium(name='Minute Maid Park', city_st='Houston, TX', lat=29.757697, lng=-95.354538, division=alw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/minute_maid.jpg')
was = Stadium(name='Nationals Park', city_st='Washington, DC', lat=38.87301, lng=-77.007433, division=nle, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/nat_park.jpg')
oak = Stadium(name='Oakland Coliseum', city_st='Oakland, CA', lat=37.752483, lng=-122.19821, division=alw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/collesium.jpg')
sfg = Stadium(name='Oracle Park', city_st='San Francisco, CA', lat=37.778595, lng=-122.38927, division=nlw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/att.jpg')
bal = Stadium(name='Oriole Park at Camden Yards', city_st='Baltimore, MD', lat=39.284052, lng=-76.621512, division=ale, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/camden_yards.jpg')
sdp = Stadium(name='Petco Park', city_st='San Diego, CA', lat=32.707656, lng=-117.156904, division=nlw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/petco.jpg')
pit = Stadium(name='PNC Park', city_st='Pittsburgh, PA', lat=40.446855, lng=-80.005666, division=nlc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/pnc.jpg')
cle = Stadium(name='Progressive Field', city_st='Cleveland, OH', lat=41.496211, lng=-81.685229, division=alc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/progressive.jpg')
tor = Stadium(name='Rogers Centre', city_st='Toronto, ON', lat=43.641438, lng=-79.389353, division=ale, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/rogers_centre.jpg')
sea = Stadium(name='T-Mobile Park', city_st='Seattle, WA', lat=47.591391, lng=-122.332327, division=alw, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/t_mobile.jpg')
mnt = Stadium(name='Target Field', city_st='Minneapolis, MN', lat=44.981712, lng=-93.27776, division=alc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/target.jpg')
tbr = Stadium(name='Tropicana Field', city_st='St Petersburg, FL', lat=27.768225, lng=-82.653392, division=ale, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/tropicana.jpg')
atl = Stadium(name='Truist Park', city_st='Cumberland, GA', lat=33.8907, lng=-84.467684, division=nle, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/truist.jpg')
chc = Stadium(name='Wrigley Field', city_st='Chicago, IL', lat=41.948438, lng=-87.655333, division=nlc, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/wrigley.jpg')
nyy = Stadium(name='Yankee Stadium', city_st='New York, NY', lat=40.829643, lng=-73.926175, division=ale, image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/stadium_images/yankee_stadium.jpg')

stadiums = [mil, laa, stl, ari, nym, phi, det, col, lad, bos,
            tex, cin, cws, kcr, mia, hou, was, oak, sfg, bal,
            sdp, pit, cle, tor, sea, mnt, tbr, atl, chc, nyy]