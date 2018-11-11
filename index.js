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
    
    var toPost = {
      "fields" : {
        "operating_systems": mySystem
      }
    }
  // An object of options to indicate where to post to
  var post_options = {
      host: 'https://api.airtable.com',
      path: '/v0/appXMZRuL9POsuuix/Table%201',
      method: 'POST',
      headers: {
          "Authorization": "Bearer keyLfYC16laU773La",
          "Content-Type": "application/json"
      }
  };

  // Set up the request
  var post_req = HTTP.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(toPost);
  post_req.end();
  }
  
  
  
}



exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
