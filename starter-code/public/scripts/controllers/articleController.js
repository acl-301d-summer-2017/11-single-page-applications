'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  // DONE TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.init = () => {
    $('#articles').hide();
    $('#about').hide();
    
    app.articleView.initIndexPage();

    $('#articles').show();
    //does order matter?
  }
  module.articleController = articleController;
})(app);
