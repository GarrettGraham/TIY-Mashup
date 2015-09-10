(function(){
var app = angular.module('EleanorQuotes', ['angular-flexslider']);

app.controller('QuotesCtrl', function($scope){
  $scope.quotes = [
    // {
    //   text:"People grow through experience if they meet life honestly and courageously. This is how character is built."
    // }
    {
        "success": {
            "total": 1
        },
        "contents": {
            "quote": "People grow through experience if they meet life honestly and courageously. This is how character is built.",
            "author": "Eleanor Roosevelt",
            "id": "oPmrJij8JxaKuZttCxNBaAeF",
            "requested_category": null,
            "categories": [
"character",
"experience",
"life",
"people"
]
        }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "I believe that anyone can conquer fear by doing the things he fears to do, provided he keeps doing them until he gets a record of successful experience behind him.",
//             "author": "Eleanor Roosevelt",
//             "id": "Azh8yQeLeTivSWlrJbbC6AeF",
//             "requested_category": null,
//             "categories": [
// "experience"
// ]
//         }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "Don't call a woman a bitch. Call her an ass-hole. It still gets your point across and it's not sexist.",
//             "author": "Eleanor Roosevelt",
//             "id": "Zc_jFz69rqwNgaBsx5zBfgeF",
//             "requested_category": null,
//             "categories": [
// "funny",
// "humor",
// "sexism",
// "vocabulary"
// ]
//         }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "What could we accomplish if we knew we could not fail?",
//             "author": "Eleanor Roosevelt",
//             "id": "2s4HIn1xsfvDqpb6zpyHkweF",
//             "requested_category": null,
//             "categories": [
// "confidence",
// "timidity"
// ]
//         }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "I think if the people of this country can be reached with the truth, their judgment will be in favor of the many, as against the privileged few",
//             "author": "Eleanor Roosevelt",
//             "id": "GZcU4A5YTNFVc6Cna19JGweF",
//             "requested_category": null,
//             "categories": [
// "citizenship",
// "judgement",
// "truth"
// ]
//         }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "No one can make you feel inferior without your consent.",
//             "author": "Eleanor Roosevelt",
//             "id": "MF3ZuyMj4HWW3ydaifWNDgeF",
//             "requested_category": null,
//             "categories": [
// "inferiority"
// ]
//         }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "Perhaps nature is our best assurance of immortality.",
//             "author": "Eleanor Roosevelt",
//             "id": "dMyt_SXzSz98CxXlKsgcDgeF",
//             "requested_category": null,
//             "categories": [
// "nature"
// ]
//         }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "It takes courage to love, but pain through love is the purifying fire which those who love generously know. We all know people who are so much afraid of pain that they shut themselves up like clams in a shell and, giving out nothing, receive nothing and therefore shrink until life is a mere living death.",
//             "author": "Eleanor Roosevelt",
//             "id": "X7lrfVv0RhEXX_9xGVRZGQeF",
//             "requested_category": null,
//             "categories": [
// "love"
// ]
//         }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "Do one thing everyday that scares you.",
//             "author": "Eleanor Roosevelt",
//             "id": "CLLdacjYfmMxSRKHLv_ulQeF",
//             "requested_category": null,
//             "categories": [
// "change",
// "courage",
// "growth"
// ]
//         }
// },
//     {
//         "success": {
//             "total": 1
//         },
//         "contents": {
//             "quote": "People grow through experience if they meet life honestly and courageously. This is how character is built.",
//             "author": "Eleanor Roosevelt",
//             "id": "OU4aMVEF1C6vwt3WmN7pVweF",
//             "requested_category": null,
//             "categories": [
// "character"
// ]
//         }
//       }
  ];
  console.log($scope.quotes);

  });
// });
// app.controller('QuotesCtrl', ['$scope', '$http'
//   function($scope, $http) {
//     $http.get('js/quotes.json').success(function(data) {
//       $scope.quotes = []; //get data from json
//       angular.forEach(data, function(quote) {
//         $scope.quotes.push({
//           text: quote.contents.quote,
//           author: quote.contents.author
//         });
//
//       });
//       console.log($scope.quotes);
//     });
//   }
// ]);
})();
