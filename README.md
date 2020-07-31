# groupomaniac

## Project setup

```
npm install
```

### migrate db

```
The database data can be configured in app/config/config.json, and you can select the environment ("devlepment", "test", "production") in app/models/index.js.
The default of test environment configuration is =
name : "root", password : "", database: "testdb" port: "3308", host: "127.0.0.1", dialect : "Mysql"


Launch your server
Create a database with the name in your config (default : "testdb"), encoding : "utf8_general_ci"

in your terminal : cd app
npx sequelize db:migrate




```

### launch server

```
cd ../
nodemon server
or node server
```
