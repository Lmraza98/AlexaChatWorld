"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    // say .listen if the user says an unexpected response
    this.response.speak("Hello, Welcome to Chat World! The hot topic of today is: What's your favorite operating system?").listen("You didn't answer the question");
    this.emit(':responseReady');
  },

  'myOperatingSystemIntent': function () { 
    var mySystem = this.event.request.intent.slots.systems.value;
    //while (mySystem )
    if (mySystem == "windows" || mySystem == "pc" || mySystem == "microsoft") {
      this.response.speak("Hey! That's my favorite too!");
    } else {
      this.response.speak("Thank you, your answer has been recorded");
    }
    this.emit(':responseReady');
    
    
   /* var post_options = {
      host: 'https://api.airtable.com',
      path: '/v0/appXMZRuL9POsuuix/Table%201',
      method: 'POST',
  };

  // Set up the request
  var post_req = HTTP.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  var data = {
    "fields": {
      "operating_system": mySystem
    }
  };
  
  post_req.write(data);
  post_req.end();*/

/*

  function performGetRequest() {
    axios.post("https://api.airtable.com"), {
base('Table 1').create({
  "myOperatingSystemIntent": "mySystem"
}, function(err, record) {
    if (err) { console.error(err); return; }
    console.log(mySystem.getId());
});
    })
  .then(function (mySystem))
  }*/

//Attempts at trying to get user responses onto airtable 

  var Airtable = require('airtable');
  //var YOUR_API_KEY = "keyLfYC16laU773LA"
  
  Airtable.configure({
    endpointUrl:  'https://api.airtable.com',
    apiKey: 'keyLfYC16laU773LA'
  })
  var base = Airtable.base('');
  

  
  }
  
  
  
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};