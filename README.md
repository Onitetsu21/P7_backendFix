# groupomaniac

## Project setup

```
npm install
```



### migrate db

```
Launch WAMP server
log with log = name : "root", password : "", dialect : "Mysql" 
create a database with name : "testdb", encoding : "utf8_general_ci"

in your terminal : cd app
npx sequelize db:migrate


```

### launch server

```
cd ../
nodemon server
or node server
```
