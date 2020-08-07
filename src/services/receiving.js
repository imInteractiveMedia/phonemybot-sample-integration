require('dotenv').config({path:'.env'});
var express = require("express");
var bodyParser = require('body-parser');
var fs = require("fs");

const secretToken = process.env.YOUR_SECURITY_TOKEN;
const port=process.env.YOUR_PORT;

var app = express();
app.listen(port, () => {
 console.log('PMB DEMO: receiving server running on port ' + port);
});
app.use(bodyParser.json());

app.post("", async (req, res) => {

  // CHECK AUTHORIZATION
  if (req.headers.authorization !== 'Basic ' + secretToken) {
    res.status(401).json({
      code: 'NOK',
      message: 'unauthorized'
    });
    console.warn('Secret token received is wrong: %s', secretToken);

    return;
   }

  // REPLY TO PMB AND CONTINUE
    res.status(200).json({
    code: 'OK',
    message: 'your message will be processed',
  });

  // STORE THE SESSION DATA
  let conversation = req.body.conversation;
  fs.writeFile("conversation.txt", conversation, (err) => {
    if (err) console.error(err);
  });

  //IDENTIFY MESSAGE TYPE
  let isNew = req.body.new;
  let isLast = req.body.last;
  let messageType = isNew  ?  'start' : isLast  ? 'stop' : 'other';
  if(req.body.hints) {
    pHints = JSON.parse(req.body.hints);
    if (pHints.event === 'endofprompt') messageType = 'endOfPrompt';
  }

  switch(messageType) {
    case 'start': 
      console.log('received call from %s to %s', req.body.from, req.body.to);
      break;
    case 'other':
      console.log('received message: \'%s\'', req.body.body);
      break;
    case 'endOfPrompt':
      console.log('your message has been delivered!');
      break;
    case 'stop':
      console.log('end of call!');
      break;
    default: 
     console.log('Unknown message type: %s', messageType);
  }

}); 