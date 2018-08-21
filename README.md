# Express-Portfolio

Travis CI build of master branch: [![Travis CI build of master branch](https://travis-ci.org/ty2k/express-portfolio.svg?branch=master)](https://travis-ci.org/ty2k/express-portfolio/)

**Express-Portfolio** serves my [portfolio website](https://tylerkrys.ca). It includes a project display, a blog, and an email contact form.

## Install

`npm install`

Knex migration files are included to create three tables in the database: `posts`, `projects`, and `users`. Run these with `knex migrate:latest`.

A Knex seed file is included to populate the `projects` table with my portfolio project data. Run this with `knex seed:run`.

## Contact form setup

Currently, `server.js` is set up to use Gmail to send mail using [Nodemailer](https://nodemailer.com). To create your own instance of this app, you would need to add your Gmail account and an [application-specific password](https://security.google.com/settings/security/apppasswords) to the environment:

```
export GMAIL_USER=youremailaddress@gmail.com
export GMAIL_PASS=YourGoogleAppSpecificPassword
```

Read more about [using Gmail with Nodemailer](https://nodemailer.com/usage/using-gmail/) on the offical site, and see [my blog post on the topic](https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app) for more info.

You can alternatively place the `GMAIL_USER` and `GMAIL_PASS` variables in a `.env` file, as detailed below.

## Environment variables using .env

The included `.env.example` file can be used to create a `.env` file to hold environment variables in an easily accessible place in the project directory. 

`server.js` contains a reference to an environment variable that can be used to hold a [Google Analytics tracking ID](https://support.google.com/analytics/answer/1008080?hl=en), which gets used in the `views/partials/_head.ejs` partial:

```
export GA_TRACKING_ID=YourGoogleAnalyticsTrackingID
```

The route file `routes/resume.js` contains a reference to the environment variable `RESUME_LINK`, which can be set in your `.env` file to create a short, easily-remembered link to an external resume file.

## Database setup

The included Knex migration files are used for creating tables of blog `posts` and portfolio `projects` in a Postgres database. These variables in the `.env` file can be used to configure your database:

```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_SSL=
DB_PORT=
```

## Test

`npm test` will run StandardJS linting (failing and exiting if there any errors) followed by Mocha/SuperTest unit and integration tests.

## Run

`npm start` to run on port 3000.

## Dependencies

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser) parses incoming request bodies
- [compression](https://www.npmjs.com/package/compression) gzips resources for speedy transmission
- [dotenv](https://www.npmjs.com/package/dotenv) loads environment variables from the `.env` file into `process.env`
- [Embedded JavaScript](http://www.embeddedjs.com/) for JavaScript templating
- [express-minify-html](https://www.npmjs.com/package/express-minify-html) minifies HTML in the Express response object for speedy transmission
- [Helmet](https://helmetjs.github.io/) for HTTP header security
- [Knex.js](http://knexjs.org/) builds SQL queries
- [knex-logger](https://www.npmjs.com/package/knex-logger) log Knex queries
- [moment](https://www.npmjs.com/package/moment) formats dates in the blog
- [Nodemailer](https://nodemailer.com) sends email from the contact form
- [node-sass-middleware](https://www.npmjs.com/package/node-sass-middleware) compiles SCSS into CSS
- [pg](https://www.npmjs.com/package/pg) as a Postgres client

## Dev dependencies

- [ejs-lint](https://www.npmjs.com/package/ejs-lint) for linting EJS templates
- [Mocha](https://mochajs.org/) for testing
- [StandardJS](https://standardjs.com/) for linting JavaScript
- [SuperTest](https://github.com/visionmedia/supertest) for testing HTTP routes

## Contact the Author

[Tyler Krys](https://tylerkrys.ca) made this.
