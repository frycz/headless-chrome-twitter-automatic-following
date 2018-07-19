# Automatic Twitter users following with headless Chrome
Bot for automatic Twitter users following, presenting possibilities of headless mode of Chrome web browser. The appliation logs into Twitter account, loads user names from predefined array, goes to user's page and clicks the follow button.

### Prerequisite
- latest Node.js version (>=10)
- active Twitter account

### Configuration
- Open `config.js` file and provide your Twitter account credentials in `credentials` object. The rest of parameters can stay unchanged unless you want to modify time between redirects (`timeForRedirections`) or time between following subsequent user (`timeBetweenActions`).
- Open `data.js` and provide Twitter users screen names.

#### All parameters

- `username` - Twitter user name
- `password` - Twitter password
- `loginPageUrl` - url of Twitter login page (default: `http://www.twitter.com/login`)
- `usernameInput` - jQuery selector of user name input (default: `.js-username-field`)
- `passwordInput` - jQuery selector of password input (default: `.js-password-field`)
- `loginButton` - jQuery selector of login button (default: `.t1-form .submit`),
- `timeForRedirections` - time between redirections in miliseconds (default: `5000`)
- `timeBetweenActions` - time between following users in miliseconds (default: `2000`)
- `getActionUrl` - function getting action parameter and returning action page url, in our case parameter is user screen name and action is following the user (default: ``(params) => `https://twitter.com/intent/follow?screen_name=${params}` ``,
- `actionButton` - jQuery selector of the follow button (default: `#follow_btn_form > button`)

### Setup
```
npm install
npm start
```
The application will start following users defined in `data.js` file.
