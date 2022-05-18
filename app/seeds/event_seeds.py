from app.models import db, Event

game = Event(name='Attend a game', points=5)
park = Event(name='Visit a new ballpark', points=50)
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