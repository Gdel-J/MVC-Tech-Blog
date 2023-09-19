# MVC-Tech-Blog



![MIT](https://img.shields.io/badge/license-MIT-green)


## Description


This is a full-stack CMS-style blog site where users can publish posts . With login authentication, logged-in users have access to the dashboard where they can also edit or delete their posts. 
Moreover, this application is MVC structured and  uses o multiple packages such as handlebars, bcrypt, express.sessions, sequelize  to eenhance the app experience.


## Table of Contents 


 
- [MVC-Tech-Blog](#mvc-tech-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Features](#features)
  - [Credits](#credits)

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


https://mymvctechblog777-91a7da73e3ed.herokuapp.com/






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


TIPS: Open a second time, the repository in the integrated terminal and run : `node seeds/index.js` to seed the databse.(you don't have to close the frist one in the case you want to interact with mysql, otherwise you can close mysql and then run  the two node actions)



Finally, you will want to run `node server.js` to start the app.



## Usage

After the installation process:

Open the terminal  and run the command `npm start` or `node server.js`

In you browser you will want to run `localhost:3001/`,



![Screenshot 1](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/4b9b6af2-9f66-4207-8d19-80042c525224)
![Screenshot 2](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/e35b56d7-3df1-463f-b98e-abec57ffc2a2)
![Screenshot 3](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/eb93aafe-18c2-4056-9a8c-800c65dbd6e8)
![Screenshot 4](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/cfced1ef-e53a-4b25-a3fb-1fd940715f3f)
![Screenshot 5](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/1c06e189-3842-4d30-9e84-4ecdf5171515)
![Screenshot 6](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/58be391f-a7f0-4df0-b516-2e194caa90a9)
![Screenshot 7](https://github.com/Gdel-J/MVC-Tech-Blog/assets/120201085/2d9f2450-bd1b-4b9a-a453-b7ae4714ac34)





## License

This project is licensed under the MIT license.

## How to Contribute

Please contact me

## Tests

N/A

## Questions

If you have any questions about this repository, you might want to open an issue or contact me  at (email:`jessygdelevecchio@gmail.com`)
Also you can find more of my work at (`https://www.github.com/Gdel-J`).

## Features

N/A


## Credits

This application has been made by Gérard Del Vecchio during the UCF bootcamp program,  made with online ressources, Bootcamp classes and recordings.