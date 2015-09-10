(function(){
var app = angular.module('EleanorQuotes', []);

app.controller('QuotesCtrl', ['$scope', '$http',
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
  }
])
})();
