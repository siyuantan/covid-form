# covid-form
covid-form

## Backend
Built on Java `1.8` with Springboot `2.6.7`
You should have these pre-installed
- jdk `v1.8` or higher
- gradle `v7.4.2`
- Docker (for local database)

### How to run backend on local machine?
#### Database
1) Open terminal, from root navigate into `Backend` folder.
2) Run `docker-compose up -d` to start mysql service
3) You can use your mysql client to access the local database. Details can be found in `application.properties` file

#### Springboot
1) Open terminal, from root navigate into `Backend` folder.
2) Your IDE should detect `covidform` as java project, if not, open `build.gradle` if you are using Intellij
3) Run `CovidDeclarationApplication` as java application
4) End points are hosted on `localhost:8080`

## Frontend
Built using Angular `13`

### How to run frontend on local machine?
You should have these pre-installed
- Nodejs `v16.13.0` or higher
- npm `v8.1.0`, should come together with Nodejs

1) Open terminal, from root navigate into `Frontend` folder.
2) Run `npm install`
3) If all npm packages are downloaded successfully, you can run `ng serve` to start local development server for frontend
4) Enter this url `localhost:4200` on your browser, it will show the web page of Covid Form

