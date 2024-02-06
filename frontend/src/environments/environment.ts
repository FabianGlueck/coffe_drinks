/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: "http://127.0.0.1:5000", // the running FLASK api server url
  auth0: {
    url: "dev-nrde5lo3luejkmi3.us", // the auth0 domain prefixdev-nrde5lo3luejkmi3.us.auth0.com
    audience: "my-coffee", // the audience set for the auth0 app
    clientId: "Ud91cn0T7RIts5fv5A8jSmBwe7sEBeba", // the client id generated for the auth0 app
    callbackURL: "http://localhost:8101", // the base url of the running ionic application.
  },
};
