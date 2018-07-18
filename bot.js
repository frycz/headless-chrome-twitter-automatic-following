import HeadlessChrome from 'simple-headless-chrome';
import {credentials, config} from './config';
import twitterScreenNames from './data';
 
const browser = new HeadlessChrome({
  headless: true,
})

async function navigateWebsite (actionData) {

    const {
      username,
      password
    } = credentials;

    const {
      loginPageUrl,
      usernameInput,
      passwordInput,
      loginButton,
      timeForRedirections,
      timeBetweenActions,
      getActionUrl,
      actionButton
    } = config;

    await browser.init()
 
    const mainTab = await browser.newTab({ privateTab: false });
 
    // Navigate to a URL
    await mainTab.goTo(loginPageUrl);
 
    // Fill an element
    await mainTab.fill(usernameInput, username);
 
    // Type in an element
    await mainTab.fill(passwordInput, password);
 
    // Click on a button
    await mainTab.click(loginButton);
 
    // Log some info in your console
    await mainTab.log('Login button clicked');

    // Wait some time! (2s)
    await mainTab.wait(timeForRedirections);
    
    await mainTab.log('Redirecting...');

    for(let i = 0; i < actionData.length; i++) {

      console.log(`Executing action with argument: ${actionData[i]}`);
      
      // Navigate to a URL
      const actionUrl = getActionUrl(actionData[i]);
	    await mainTab.goTo(actionUrl);

      // Click login button
      await mainTab.click(actionButton);

	    // Wait some time [ms]
	    await mainTab.wait(timeForRedirections);
      
	    await mainTab.log('Success. Redirecting...');

      // Check if all users followed
      if (i == actionData.length - 1) {
        process.exit();
      }    	

	  	await mainTab.wait(timeBetweenActions);
	}

    // Close the browser
    await browser.close();
}

async function run(bot, ...params) {
  try {
    await bot(...params);
  } catch (err) {
    console.log('ERROR:', err)
    process.exit();
  }
}

run(navigateWebsite, twitterScreenNames);
