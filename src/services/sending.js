require('dotenv').config({path:'.env'});
const readline = require("readline");
const pmb = require('../api/pmb');
const pmbSecurityToken = process.env.PMB_SECURITY_TOKEN;
var fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



function questionLoop () {
  rl.question('your message (quit to leave): ', (answer) => {
    if (answer.match(/^q(uit)?$/i)) rl.close(); 
    else {
      // CHECK CURRENT CONVERSATION
      let conversation = '';
      fs.readFile("conversation.txt", function(err, buf) {
       
        conversation = buf.toString();
       
        // CREATE THE MESSAGE FOR PHONEMYBOT 
       const message = {
         from: '',
         to: '',
         conversation,
         body: answer
        } 

        // SEND THE MESSAGE TO PHONEMYBOT
        pmb.sendMessage({ message,  pmbSecurityToken}); 

        questionLoop();
        });
    }
  });
}



questionLoop();





