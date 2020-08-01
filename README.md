# groupomaniac

## Project setup

```
npm install
```

### migrate db

```
The database data can be configured in app/config/config.json.
The default configuration is =
name : "root", password : "", database: "testdb" port: "3308", host: "127.0.0.1", dialect : "Mysql"


Launch your server
Create a database with the name in your config (default : "testdb"(must be the same name of the database name in config.json)), encoding : "utf8_general_ci"

in your terminal : cd app
npx sequelize db:migrate
```

### launch server

```
cd ../ (root backend folder)
nodemon server
or node server
```
