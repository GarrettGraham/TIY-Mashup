(function(){
var app = angular.module('EleanorQuotes', []);

app.controller('QuotesCtrl', ['$scope', '$http', 'angular-flexslider'
  function($scope, $http, angular-flexslider) {
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
  }
])
})();
