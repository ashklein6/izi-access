# MarnitaConnect

This application for Marnita's Table displays the reports (360s) generated from Intentional Social Interactions (IZI). It allows visitors and clients to search through and view the 360s. The application also features a managing suite that allows Employees and Admins to create 360s, edit them, publish them, and control user viewing permissions.

## Built With

JavaScript, Node.js, React, Redux, Saga, Material-UI, PostgreSQL

## Features

### Completed

- [x] Users are able to create an account and log-in
- [x] Users can edit their profile and change their password
- [x] Users can reset forgotten passwords
- [x] Users are able to request client access
- [x] Employees and Administrators are able to create new 360s and input information that   will be automatically formatted
- [x] Administrators can manage users and 360s
- [x] Employees and Administrators are able to set privacy levels of different 360 sections
- [x] Employees and Administrators are able to publish 360s
- [x] Employees and Administrators can give client level access to a 360
- [x] Users can search for public 360s from the homepage
- [x] Users can view sections of a 360 based on access level on the view360 pagegit 

### Next Steps

- [ ] Implement a photo gallery on each 360
- [ ] Implement ability to comment on a 360, where comments are published after admin approval
- [ ] Implement file upload and download functionality
- [ ] Connect CSV interface for demographics
- [ ] Increase mobile viewability

## Getting Started

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/) 
- [NPM](https://www.npmjs.com/)

### Installing

To get a copy of marnita-connect running on your local machine:

1. Download this project.
2. Create a new database called `marnita_connect` and create tables using the marnita_connect.sql file. If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`
3. Install node modules using `npm install`.
4. Create a `.env` file at the root of the project and paste these lines into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    EMAIL_ADDRESS=emailAddress
    EMAIL_PASSWORD=emailPassword
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
    Additionally, replace `emailAddress` and `emailPassword` with the email address and corresponding password of the email that will be used to send the forgot password links.
5. Start postgres if not running already by using `brew services start postgresql`.
6. Start server with `npm run server` in one terminal.
7. Start client with `npm run client` in a separate terminal.
8. Navigate to `localhost:3000`.

### Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)


### Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

### Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

### Deployment

1. Create a Heroku account
1. Create a new Heroku project
    1. From the Heroku dashboard click "New"
    1. Enter app name
    1. Click "Create App"
1. Link the Heroku project to the project GitHub Repo
    1. From the Heroku dashboard, click on the app that was just created
    1. On the Deploy tab, select "GitHub" as the deployment method
    1. Click "Connect to Github"
    1. In new window, login to GitHub and select "Authorize Heroku"
    1. Search for repo name
    1. Click "Connect" on appropriate repo
    1. Under "Manual Deploy" select "Master Branch"
    1. Click "Deploy Branch"
        1. The build may take several minutes
1. Set up configuration variables on Heroku
    1. On the settings tab click "Reveal Config Vars"
    1. In an empty KEY box, add `EMAIL_ADDRESS`. In the corresponding VALUE box, enter the email address from which users will receive their password reset link.
    1. In an empty KEY box, add `EMAIL_ADDRESS`. In the corresponding VALUE box, enter the email address from which users will receive their password reset link. (Click the "Add" button to add another row if necessary)
    1. In an empty KEY box, add `SERVER_SESSION_SECRET`. In the corresponding VALUE box, enter a random string that will be used for encryption and security. (Click the "Add" button to add another row if necessary)
1. Create a Heroku Postgres database
    1. Click "Configure Add-ons" on the overview tab
    1. Search for Heroku Postgres
    1. Select "Hobby Basic" and click "Provision"
    1. Click on the Heroku Postgres
    1. Select "Settings" tab
    1. Click "View Credentials"
    1. Use the listed credentials to log into Postico or other database management software
1. Connect to the Heroku Postgres database from Postico and create necessary tables.
    1. Open Postico
    1. Click "New Favorite"
    1. Enter "marnita_connect" as the nickname
    1. Copy the information from the credentials on Heroku for host, port, user, and database
    1. Click "Connect" if prompted about verifying server identity
    1. Click "SQL Query"
    1. Click "Load Query"
    1. Load query `marnita_connect.sql` from the GitHub repo
    1. Select all and click "Execute Selection"
    1. If desired, repeat the previous 2 steps with `threesixty_demo_data_insert.sql` to fill database with test data.

## Authors

* Ashley Klein
* Jake Alexios
* Joe Evert
* Jonathan Reckinger
* Matt Hansen

## Acknowledgments

* Prime Digital Academy for starter code
