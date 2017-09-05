# Portfolio

This Express app is used for my [portfolio website](https://tylerkrys.ca).

## Install

`npm install`

## Contact Form Setup

Currently, `server.js` is set up to use Gmail to send mail using [Nodemailer](https://nodemailer.com). To create your own instance of this app, you would need to add your Gmail account and an [application-specific password](https://security.google.com/settings/security/apppasswords) to the environment:

```
export GMAIL_USER=youremailaddress@gmail.com
export GMAIL_PASS=YourGoogleAppSpecificPassword
```

Read more about [using Gmail with Nodemailer](https://nodemailer.com/usage/using-gmail/) on the offical site.

## Run

`npm start`

App runs on port 3000 by default.

## Dependencies

- [Node](https://nodejs.org)
- [Express](https://expressjs.com/) as the server
- [body-parser](https://www.npmjs.com/package/body-parser) to parse incoming request bodies
- [EJS](http://www.embeddedjs.com/) for JavaScript templating
- [Nodemailer](https://nodemailer.com) to send email in the Node environment

## Contact the Author

[Tyler Krys](https://tylerkrys.ca) made this to learn about web development.
