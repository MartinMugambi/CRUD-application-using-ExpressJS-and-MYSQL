# CRUD application using ExpressJS and MYSQL.

🚧 Solution 🚧
 
## Table of Contents
- [Database Variable](#databasevariables)
- [Prerequisite](#prerequisite.)
- [Screenshots](#screenshots)


## Database variables
 - In the lib folder in this repo, change the db.js variables according to your MySQL's username and password.
```js 
 var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'ENTER MYSQL_USERNAME_HERE',
	password:'ENTER_MYSQL_PASSWORD HERE',
	database:'book'
});
```
- Find the project database on the exported mysql database folder on this repository and import to your mysql database
## Prerequisite.
- In order to run the application, you need to [clone]("link_to_clone)/[fork]("link_to_fork) the [CRUD application](https://github.com/MartinMugambi/-CRUD-application-using-ExpressJS-and-MYSQL.).
- Download [Node.js pre-built installer](https://nodejs.org/en/download/) in your computer
- Navigate to the cloned repository directory in your computer from the command terminal and run the following commands to install the project dependecies.

Used to save any specified packages into dependencies by default
```js
npm install
```
- To Run the project
```js
    npm start
```
- To See Output
```js
   http://localhost:3000/books
```
