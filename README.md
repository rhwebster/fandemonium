# fandemonium

Fandemonium is an app to show off how much of a fan you are. Baseball fans everywhere can document their game experiences. From uploading photos and having an album for their favorite memories, to checking into new ballparks with the interactive map, to following their favorite team's news via twitter on their home page, all while earning badges for all of those activities. Visit [Fandemonium](https://fandemonium.herokuapp.com).

##Built with:

### Front End

<a href="https://www.javascript.com/"><img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" /></a>
<a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
<a href="https://redux.js.org/"><img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" /></a>
<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=React-Router&logoColor=white" /></a>
<a href="https://developers.google.com/maps"><img alt="Google Maps" src="https://img.shields.io/badge/-Google%20Maps-4285F4?style=flat-square&logo=Google%20Maps&logoColor=white" /></a>
<a href="https://devdocs.io/css/"><img alt="CSS3" src="https://img.shields.io/badge/-CSS3%20-61DAFB?style=flat-square&logo=CSS3&logoColor=white&color=brightgreen"/></a>
<a href="https://devdocs.io/html/"><img alt="HTML5" src="https://img.shields.io/badge/-HTML5%20-61DAFB?style=flat-square&logo=HTML5&logoColor=white&color=blue"/></a>


### Back End

<a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
<a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
<a href="https://www.postgresql.org/"><img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white" /></a>
<a href="https://aws.amazon.com/"><img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon%20AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white" /></a>
<a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html"><img alt="boto3" src="https://img.shields.io/badge/-boto3-000000?style=flat-square&logo=boto3&logoColor=yellow&color=yellow" /></a>


### Deployment and Package Management

<a href="https://docker.com/"><img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" /></a>
<a href="#"><img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" /></a>
<a href="https://www.npmjs.com/"><img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" /></a>
<a href="https://heroku.com/"><img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" /></a>

### Installation

1. Clone the repo `git clone https://github.com/rhwebster/fandemonium.git`
2. Create .env file based on example .env-example file `touch .env`
3. Create frontend .env file based on example .env-frontend-example `cd react-app/ && touch .env`
4. Install backend dependencies `cd fandemonium/ && pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
5. Install frontend dependencies `cd ../react-app && npm install`
6. Start virtual environment in frontend `cd .. && pipenv shell`
7. Apply the migration to the database `flask db upgrade`
8. Seed the database `flask seed all`
9. Start backend `flask run`
10. Open new terminal and start frontend `cd ../react-app && npm start`
11. Open browser to http://localhost:3000/
