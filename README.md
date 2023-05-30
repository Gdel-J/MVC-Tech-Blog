# MVC-Tech-Blog



![MIT](https://img.shields.io/badge/license-MIT-green)


## Description


This is a full-stack CMS-style blog site where users can publish posts . With login authentication, logged-in users have access to the dashboard where they can also edit or delete their posts. 
Moreover, this application is MVC structured and  uses o multiple packages such as handlebars, bcrypt, express.sessions, sequelize  to eenhance the app experience.


## Table of Contents 


 
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  7. [Features](#features)
  8. [Credits](#credits)

## Installation

 

                                                First:

In order to use this project make sure to have the following programs installed on your computer:

1. VS Code

2. GitBash

3. Node.js

4. Mysql2

5. Heroku







                                                Second:

In order to initialize the project:


Copy Link: click the `Code` button within this GitHub SSH repository to copy link

Clone: inside GitBash, use the command `git clone paste link here`



link to application : 

https://github.com/Gdel-J/MVC-Tech-Blog.git



link to deplyed application:


https://mymvctechblog39.herokuapp.com/












                                                 Third: 

If you don't have the dependencies :
In the terminal, use the command `npm init -y` to initialize and create a `package.json file` .

Then you will have to install 
-some node_modules and `package-lock.json` dependencies by running `npm install `.


You will need to install `npm i mysql2` 

Also you will need to install `npm i dotenv`


`npm i sequelize`

`npm i express`

`npm i express session`

`npm i bcrypt`

`npm i express-handlebars`

`npm i connect-session-sequelize`



Create a `.env file` in the root directory of the app.
Create three variables in the `.env file`:

-`DB_NAME`=ecommerce_db
-`DB_USER`=[your MySQL username]
-`DB_PW`=[your MySQL password]
-`DB_SESSION_SECRET`= [your secret word or sentence]

 


Then, you will need to run :

`mysql -u root -p`

then
`SOURCE db/schema.sql` to create the database and initialize the database.


TIPS: Open a second time, the repository in the integrated terminal and run : ``node seeds/index.js` to seed the databse.(you don't have to close the frist one in the case you want to interact with mysql, otherwise you can close mysql and then run  the two node actions)



Finally, you will want to run `node server.js` to start the app.



## Usage

After the installation process:

Open the terminal  and run the command `npm start` or `node server.js`

In you browser you will want to run `localhost:3001/`,



![Screenshot 1](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/e0e95fea-fddc-4c3d-a302-62ef738b7ae6)
![Screenshot 2](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/533d7296-7a7d-4c90-83d3-152ff3505fea)
![Screenshot 3](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/53e7d9a2-e17b-4ba8-85b5-d7c57e542cc5)
![Screenshot 4](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/5194c37a-314e-4ea2-8f1a-f46f0165bf81)





## License

This project is licensed under the MIT license.

## How to Contribute

Please contact me

## Tests

N/A

## Questions

If you have any questions about this repository, you might want to open an issue or contact me  at (email:`jesdelevecchio@gmail.com`)
Also you can find more of my work at (`https://www.github.com/Gdel-J`).

## Features

N/A


## Credits

This application has been made by Gérard Del Vecchio during the UCF bootcamp program,  made with online ressources, Bootcamp classes and recordings.