'use strict';
var app = app || {};

// DONE TODO: Configure routes for this app with page.js, by registering each URL your app can handle, 
//linked to a single controller function to handle it. Note that these routes do not 
//need to wrapped in an IIFE.

page( '/', function () {console('@ index page');} );
page( '/about', app.aboutController.init );
page( '/article', app.articleController.init );
// TO DO MAYBE make a thing for New controller page( '/new', app.initNewArticlePage)


// TODO: What function do you call to activate page.js? Fire it off now, to execute.
// Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.

page.start();
