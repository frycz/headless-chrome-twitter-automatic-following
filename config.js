export const credentials = {
    username: '',
    password: ''
  };
  
export const config = {
    loginPageUrl: 'http://www.twitter.com/login',
    usernameInput: '.js-username-field',
    passwordInput: '.js-password-field',
    loginButton: '.t1-form .submit',
    timeForRedirections: 5000, // [ms]
    timeBetweenActions: 60000, // [ms]
    getActionUrl: (params) => `https://twitter.com/intent/follow?screen_name=${params}`,
    actionButton: '#follow_btn_form > button'
};