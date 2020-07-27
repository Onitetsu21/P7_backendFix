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

for use seeders for testing app : npx sequelize-cli db:seed:all
    for test a no-admin mode : 
        log with 
            email : "alix1@gmail.com"
            passeword: "Alix1@gmail"
    for test a admin mode : 
        log with 
            email : "admin@admin.com"
            passeword: "admin"

```

### launch server

```
cd ../
nodemon server
or node server
```
