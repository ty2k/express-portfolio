
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          display_order: 0,
          name: 'GitHub Avatar Downloader',
          slug: 'github-avatar-downloader',
          screenshot_url: '/images/screenshot-github-avatar-downloader.jpg',
          tech_stack: JSON.stringify(['Node', 'Dotenv', 'request', 'GitHub API']),
          github_url: 'https://github.com/ty2k/github-avatar-downloader',
          github_caption: 'GitHub Repo',
          body: 'A Node app that consumes the GitHub API to pipe the avatar JPEGs of project contributors into a local directory.'
        },
        {
          display_order: 1,
          name: 'TinyApp',
          slug: 'tinyapp',
          screenshot_url: '/images/screenshot-tinyapp.jpg',
          tech_stack: JSON.stringify(['Node', 'Express', 'Embedded JavaScript', 'bcrypt', 'cookie-session']),
          github_url: 'https://github.com/ty2k/tinyapp',
          github_caption: 'GitHub Repo',
          body: 'A Bitly-like URL shortening service built with Node and Express and templated with EJS. User authentication is accomplished with bcrypt and cookie-session.'
        },
        {
          display_order: 2,
          name: 'Tweeter',
          slug: 'tweeter',
          screenshot_url: '/images/screenshot-tweeter.jpg',
          tech_stack: JSON.stringify(['Node', 'Express', 'jQuery', 'MongoDB', 'Vanillicon API']),
          github_url: 'https://github.com/ty2k/tweeter',
          github_caption: 'GitHub Repo',
          body: 'Tweeter is a single page app that uses jQuery and MongoDB to store and present Twitter-like tweets dynamically. The Vanillicon API is used to select random avatars for the tweets.'
        },
        {
          display_order: 3,
          name: 'WikiMaps',
          slug: 'wikimaps',
          screenshot_url: '/images/screenshot-wikimaps.jpg',
          tech_stack: JSON.stringify(['Node', 'Express', 'Embedded JavaScript', 'Postgres', 'Knex', 'Sass', 'Bootstrap', 'bcrypt', 'cookie-session']),
          github_url: 'https://github.com/ty2k/WikiMaps',
          github_caption: 'GitHub Repo',
          body: 'A group Node and Express app that uses the Google Maps JavaScript API to let users plot points on maps for sharing. The site is styled with Bootstrap and Sass using a mobile-first approach. User authentication is achieved with bcrypt and cookie-session.'
        },
        {
          display_order: 4,
          name: 'Chatty App',
          slug: 'chatty-app',
          screenshot_url: '/images/screenshot-chatty-app.jpg',
          tech_stack: JSON.stringify(['Node', 'React', 'Express', 'WebSockets', 'uuid']),
          github_url: 'https://github.com/ty2k/chatty-app',
          github_caption: 'Client GitHub Repo',
          secondary_url: 'https://github.com/ty2k/chatty-server',
          secondary_caption: 'Server GitHub Repo',
          body: 'Chatty App is a Node/React client with a matching Node/Express/WebSockets server (<a href="https://github.com/ty2k/chatty-server" title="Chatty Server on GitHub">Chatty Server</a>) that allows users to chat in a common chatroom in their web browser. Users can change their display names, and all messages are tagged with a UUID.'
        },
        {
          display_order: 5,
          name: 'Jungle Rails',
          slug: 'jungle-rails',
          screenshot_url: '/images/screenshot-jungle-rails.jpg',
          tech_stack: JSON.stringify(['Rails', 'RSpec', 'Postgres', 'Sass', 'Bootstrap', 'Stripe API']),
          github_url: 'https://github.com/ty2k/jungle-rails',
          github_caption: 'GitHub Repo',
          body: 'A Rails e-commerce project with an inherited codebase. I added admin functionality (adding and removing products and categories with HTTP basic authentication), product reviews, and RSpec testing.'
        },
        {
          display_order: 6,
          name: 'Community Calendar',
          slug: 'community-calendar',
          screenshot_url: '/images/screenshot-community-calendar.jpg',
          tech_stack: JSON.stringify(['Node', 'Express', 'Embedded JavaScript', 'Postgres', 'Knex', 'Sass', 'Bootstrap', 'bcrypt', 'cookie-session']),
          github_url: 'https://github.com/ty2k/CommunityCalendar',
          github_caption: 'GitHub Repo',
          deployment_url: 'https://ccalendar.ca',
          deployment_caption: 'Deployed App',
          body: 'Community Calendar is a group project that aggregates local events for easy browsing. Registered users are able to save their favorite events and event venues. NPM packages bcrypt and cookie-session are used for user authentication. <a href="https://ccalendar.ca">See it deployed</a> and check out what is happening in your neighborhood.'
        },
        {
          display_order: 7,
          name: 'Express Portfolio',
          slug: 'express-portfolio',
          screenshot_url: '/images/screenshot-express-portfolio.jpg',
          tech_stack: JSON.stringify(['Node', 'Express', 'Embedded JavaScript', 'Postgres', 'Knex', 'Sass', 'Bootstrap', 'Nodemailer']),
          github_url: 'https://github.com/ty2k/express-portfolio',
          github_caption: 'GitHub Repo',
          deployment_url: 'https://tylerkrys.ca',
          deployment_caption: 'Deployed App',
          body: 'This portfolio site is driven by a Node.js and Express app with a Postgres database accessed with Knex. Sass and Bootstrap are used for styling. The <a href="#contact-form">contact form</a> uses Nodemailer, which I have recently <a href="/blog/adding-nodemailer-email-contact-form-node-express-app" title="Adding a Nodemailer Email Contact Form to a Node and Express App">blogged about</a> using a custom blog template. The site is deployed on Heroku, served over HTTPS, and compressed and minified to load in a snap.'
        },
      ]);
    });
};
