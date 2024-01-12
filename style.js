const baseUrl= 'https://api.thecatapi.com/v1/images/search'
fetch ('https://api.thecatapi.com/v1/images/search')
 .then (function(response){return response.json();})
  .then (function(data){console.log(data);console.log(`${data}`)});
 
