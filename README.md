# groupomaniac

## Project setup

```
npm install
```

### migrate db

```
The default configuration is =
name : "root", password : "", database: "testdb" port: "3308", host: "127.0.0.1", dialect : "Mysql"
You can change it if needed in the app/config/config.json AND in the app/models/index.js file.

Launch WAMP/MAMP server
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
