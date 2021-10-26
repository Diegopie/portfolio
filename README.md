# My Portfolio

[![project-languages-used](https://img.shields.io/github/languages/count/diegopie/The-Smartest-Among-Us?color=important)](https://github.com/Diegopie/portfolio)
[![project-top-languages-used](https://img.shields.io/github/languages/top/diegopie/The-Smartest-Among-Us?color=important)](https://github.com/Diegopie/portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

!["play" screen of app](./public/assets/img/app.png)

## Description

This my personal refactor of a project I worked on with two of my [colleagues](#Contributors). I'm happy with the work we did but I know there are opportunities for efficiency and I would like to eventually add more features to the site!

This application acts as a fun quiz site. Users can access global quizzes to familiarize themselves with the site and compete in a global leaderboard. They may also play randomly generated quizzes with many categories and options to choose from! Users can even save random quizzes they enjoy to their account, where they can try and beat their scores and share the quiz with their friends. Users can even create their own quiz, either by editing a random quiz they liked or creating one from scratch!

&NewLine;
&NewLine;

## Table of Contents

- [Development](#Development)
- [Bugs](#Bugs)
- [Future Development](#Future-Development)
- [Contributors](#Contributors)
- [Contact](#Contact)
- [Reference Material](#Reference-Material)
- [License](#License)

## Development

- [Technology Overview](#Technology-Overview)
- [Installation](#Installation)
- [Dependencies/Packages](#Dependencies/Packages)
- [Server](#Server)
- [Client](#Client)

### Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – Handlebars, Bootstrap,  
Backend – Node, Express
Database – mySQL, Sequelize
Authentication – Express-session, passport-local, bcrypt
```

### Installation

If you'd like to play with this code you may fork this repo and run on your machines. You will need [node.js](https://nodejs.org/en/) and [mySQL](https://dev.mysql.com/downloads/mysql/) installed. Outside of cloning the project and installing the dependencies, there are a few things to take care of to get the app running.

- Create a mySQL database named quizapp
- run server.js in a node environment to create all the necessary SQL tables

Next is setting up the global quizzes. I plan to change this in the [future](#Future-Development), but to use the globally accessible quizzes we first need to create a user in the db, known as global, then create the quizzes using this first user as the creator. It's not very efficient but it allows us to write global leaderboards to the server and do server-side updates to the quizzes. I do all this in [Postman](https://www.postman.com/downloads/). Make sure you change the password! 😅

- To create the initial, global user, make a POST request to localhost:8080/api/user with raw JSON. The needed JSON can be found in db/seeds/user.json

`{
  "username":"global",
  "password": "impstr"
}`

- Now the quizzes can be created and assigned to this first user. Make a POST request to localhost:8080/api/quiz with raw JSON. Our JSON quiz files can be found in db/seeds/HKquiz.json and AUquiz.json, but you can create your own as well using this same setup. A template of how quizzes are stored in the database can be found in that same folder under quiz.json


&NewLine;
&NewLine;

### Dependencies/Packages

&NewLine;
&NewLine;

| | | |
| ------ | ------ | ------ |
| [bcryptjs](https://www.npmjs.com/package/bcryptjs) |  [dotenv](https://www.npmjs.com/package/dotenv) | [express](https://www.npmjs.com/package/express) |
| [express-handlebars](https://www.npmjs.com/package/express-handlebars) | [express-session](https://www.npmjs.com/package/express-session)  | [mysql2](https://www.npmjs.com/package/mysql2) |
| [passport](https://www.npmjs.com/package/passport) | [passport-local](https://www.npmjs.com/package/passport-local)  | [sequelize](https://www.npmjs.com/package/sequelize) |

&NewLine;
&NewLine;

#### Dev Dependencies

&NewLine;
&NewLine;

| | | |
| ------ | ------ | ------ |
| [eslint](https://www.npmjs.com/package/eslint) | [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) | [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)|
| [nodemon](https://www.npmjs.com/package/nodemon) | [prettier](https://www.npmjs.com/package/prettier) |

&NewLine;
&NewLine;

> [Back To Development](#Development) || [Back To Table of Contents](#Table-of-Contents)

### Server

- [Database](#Database)
- [Routes](#Routes)
- [Authentication](#Authentication)

#### Database

&NewLine;
&NewLine;

We use a SQL database to service our application, with mySQL and mySQL Workbench being our interface of choice.

![Database Map](./public/assets/img/dbmap.png)

#### Routes

Currently, all HTTP and API routes are in controller/routes.js. It's a fairly straightforward file that also handles the site's CRUD operators.

#### Authentication

Express-session, Passport, Passport-Local Strategy, bcryptjs

These packages are used to hash and secure user passwords. We also have simple redirects for when unauthenticated users hit a page they are not allowed to see.

> [Back To Server](#Server) || [Back To Development](#Development)

### Client

This app is rendered using Handlebars.js. It's not a very complex implementation but is of great help to render a user's saved quizzes from the database.

## Bugs

- ProjectCards has it's text and Learn More button set on a 0 opacity setting until the user hovers over the card or clicks on it on mobile. This means that mobile users may click on the card where the Learn More button is hiding, thus popping up modal and creating a confusing experience.
  - I'm a little torn on a solution. I like that desktop users can click the button before the opacity changes to create a power user feeling but the experience does not translate at all to mobile. I may just add additional code to detect for a mobile device so that the text and buttons aren't display: none; then changed to display: block; to resume the normal opacity fade in.
- While the ProjectModal is displayed, other ProjectCards Learn More buttons can still be clicked. This causes a second modal to layer on top of the other and re-enables scrolling the body

## Future Development

I would like to continually update my portfolio as I learn and grow as a developer. I would love to get a grip on Three.js to make it look impressive. I would also like to dive into either Sass or Tailwind, I just have to decide which one to learn first. But as I learned as a kid, gotta catch 'em all 😎

- Write a custom hook for changing DOM for Dark Mode toggle
  - This will serve to clean up a lot of the code and more easily add more dark mode styling
- Use existing onMouse event to do grow animation on project cards
  - I think this will help the All Projects page pop a little more, but that page needs a lot of love regardless 😅
- Filter Projects Page
  - The Page just feels very dry at the moment and I would like to have more interactive elements to make it feel more exciting 

## Resources

Adobe Icons [freepik.com](https://www.freepik.com)

LinkedIn, CV Icons [iconmonstr](https://iconmonstr.com/)

Diego Hernandez || [GitHub](https://github.com/Diegopie) || [LinkedIn](https://www.linkedin.com/in/diego-hernandez-7327381b2/)

## Contact

If you have any feedback our questions, please reach me at diegopie@outlook.com!

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed