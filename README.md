# Getting started

## Database

This application use MySQL database.
install MySQL if necessary
(installation details:

1. follow the link: https://dev.mysql.com/downloads/installer/
2. download the installer
3. Follow the installation instructions )

### Create a user in DBMS with the name: "user" and password: "1234"

## Start server

1. open the folder with the project and go to the server folder
2. enter the command **npm install**
3. enter the command **npm instal -g mysql sequelize-auto-v3**
4. enter the command **npm run firststart** , she

- created a database named "note_archive",
  -- (if an error occurred at this stage, perhaps the user does not have the authority to create new databases, try entering the following SQL command in your DBMS:
  ALTER USER 'user' IDENTIFIED WITH mysql_native_password BY '1234';
  flush privileges;
  )
- run migrations up
- start the server
  this can be checked by clicking on the link
  http://localhost:8000/notes

In case of error:

1. create the database manually
2. in the project folder, enter the command **npm run migrateup**
3. enter the command **npm run sequelizetable**
4. enter the command **npm run devstart**

#### Congratulations the server is running!

## Start client

1. open the second console window and go to the client folder
2. enter the command **npm install**
3. run the command **npm start**

#### Congratulations you launched the client!

you can check by clicking on the link http://localhost:3000/

## Start E2E test

1. open the second console window and go to the client folder
2. enter the command **npm install**
3. run the command **npm run test**
