from app.models import db, Division
from league_seeds import leagues

al = leagues[0]
nl = leagues[1]

ale = Division(name="AL East", league=al)
alc = Division(name="AL Central", league=al)
alw = Division(name="AL West", league=al)
nle = Division(name="NL East", league=nl)
nlc = Division(name="NL Central", league=nl)
nlw = Division(name="NL West", league=nl)

divisions = [ale, alc, alw, nle, nlc, nlw]