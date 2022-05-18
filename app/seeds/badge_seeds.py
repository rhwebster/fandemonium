from app.models import db, Badge

fan_c = Badge(name='Fan (Copper)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/fan_c.svg')
fan_b = Badge(name='Fan (Bronze)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/fan_b.svg')
fan_s = Badge(name='Fan (Silver)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/fan_s.svg')
fan_g = Badge(name='Fan (Gold)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/fan_g.svg')
fan_p = Badge(name='Fan (Platinum)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/fan_p.svg')
road_warrior_c = Badge(name='Road Warrior (Copper)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/road_warrior_c.svg')
road_warrior_b = Badge(name='Road Warrior (Bronze)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/road_warrior_b.svg')
road_warrior_s = Badge(name='Road Warrior (Silver)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/road_warrior_s.svg')
road_warrior_g = Badge(name='Road Warrior (Gold)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/road_warrior_g.svg')
road_warrior_p = Badge(name='Road Warrior (Platinum)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/road_warrior_p.svg')
witness_c = Badge(name='Witness History (Copper)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/witness_c.svg')
witness_b = Badge(name='Witness History (Bronze)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/witness_b.svg')
witness_s = Badge(name='Witness History (Silver)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/witness_s.svg')
witness_g = Badge(name='Witness History (Gold)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/witness_g.svg')
witness_p = Badge(name='Witness History (Platinum)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/witness_p.svg')
performance_c = Badge(name='See Individual Greatness (Copper)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/performance_c.svg')
performance_b = Badge(name='See Individual Greatness (Bronze)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/performance_b.svg')
performance_s = Badge(name='See Individual Greatness (Silver)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/performance_s.svg')
performance_g = Badge(name='See Individual Greatness (Gold)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/performance_g.svg')
performance_p = Badge(name='See Individual Greatness (Platinum)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/performance_p.svg')
winners_c = Badge(name='See Team Success (Copper)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/winners_c.svg')
winners_b = Badge(name='See Team Success (Bronze)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/winners_b.svg')
winners_s = Badge(name='See Team Success (Silver)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/winners_s.svg')
winners_g = Badge(name='See Team Success (Gold)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/winners_g.svg')
winners_p = Badge(name='See Team Success (Platinum)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/winners_p.svg')
journalist_c = Badge(name='Journalist (Copper)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/journalist_c.svg')
journalist_b = Badge(name='Journalist (Bronze)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/journalist_b.svg')
journalist_s = Badge(name='Journalist (Silver)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/journalist_s.svg')
journalist_g = Badge(name='Journalist (Gold)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/journalist_g.svg')
journalist_p = Badge(name='Journalist (Platinum)', image='https://fandemoniumpics.s3.us-east-2.amazonaws.com/badges/journalist_p.svg')

badges = [fan_c, fan_b, fan_s, fan_g, fan_p,
          road_warrior_c, road_warrior_b, road_warrior_s, road_warrior_g, road_warrior_p,
          witness_c, witness_b, witness_s, witness_g, witness_p,
          performance_c, performance_b, performance_s, performance_g, performance_p,
          winners_c, winners_b, winners_s, winners_g, winners_p,
          journalist_c, journalist_b, journalist_s, journalist_g, journalist_p]