//use below as an array to be looped through and populate the html with quote data 

var quotesER = require('../TIY-Mashup/EleanorRoosevelt.json')

var quote = quotesER.filter(function(item) {
   return item.quote = 'Quote' 
});