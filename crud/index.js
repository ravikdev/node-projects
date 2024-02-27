const axios = require('axios'); 

const apiKey = 'b4c347f3046b1678962d31ba63fff979FFFFNRAL'; 
const apiUrl = `https://insights-collector.newrelic.com/v1/accounts/4045645/events`; // this is available in the official documentation or this very URL can be used 
const postData = [ 
        
        {
          "eventType": "Purchase",
          "account": 3,
          "amount": 259.54
        },
        {
          "eventType": "Purchase",
          "account": 5,
          "amount": 12309,
          "product": "Item"
        }
      ]

     

const headers = { 
  'Content-Type': 'application/json', 
    'Api-Key': apiKey,
} 


axios.post(apiUrl, postData,{headers}) 
  .then(response => { 
    const metricData = response.data; 
//     console.log('Metric Data:', metricData); 
  }) 

  .catch(error => { 
    console.error('Error:', error.message); 
  }); 

