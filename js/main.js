(function(){
var app = angular.module('EleanorQuotes', ['angular-flexslider']);

$(function(){
  var body = $('body');
  var backgrounds = [
    'url(https://res.cloudinary.com/theyogime/image/upload/v1440793409/IMG_2253_pqbov8.jpg)',
    'url(https://res.cloudinary.com/theyogime/image/upload/v1440791164/Savannah_Sunset_q8l4l2.jpg)',
    'url(https://res.cloudinary.com/theyogime/image/upload/v1440791206/IMG_3493_ye8ppt.jpg)',
    'url(https://res.cloudinary.com/theyogime/image/upload/v1440793134/IMG_2400_vrn8u5.jpg)',
    'url(https://res.cloudinary.com/theyogime/image/upload/v1440791005/IMG_2232_anlbdp.jpg)'
  ];
  var current = 0;

  function nextBackground() {
    body.css(
      'background-image',
       backgrounds[current = ++current % backgrounds.length]
    );
    setTimeout(nextBackground, 5000);
  }
    setTimeout(nextBackground, 5000);
    body.css('background-image', backgrounds[0]);
});

  app.controller('QuotesCtrl',
    function($scope, $http) {
      $http.get('js/quotes.json').success(function(data) {
        $scope.quotes = []; //get data from json
        angular.forEach(data, function(quote) {
          $scope.quotes.push({
            text: quote.contents.quote,
            author: quote.contents.author
          });

        });
        console.log($scope.quotes);
      });
    });
})();
