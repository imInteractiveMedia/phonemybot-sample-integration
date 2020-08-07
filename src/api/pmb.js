const axios = require('axios');
require('dotenv').config({path:'.env'});

module.exports = {

  sendMessage: async function({message, pmbSecurityToken}) {
    const resource = '/cloudengine/rest/voicebot/send/' + message.conversation;
    const url = process.env.BASE_PMB_URL + resource;
    const httpConfig = {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + pmbSecurityToken,
      }
    };

    await axios.post(url, message, httpConfig)
    .then((response) => {
      resData = response.data;
    })
    .catch ( (err) => {
      console.error (message.conversation ? message.conversation : nd, 'sending message to PMB ', err);
      return false;
    });
    // If there are no issues exits success
    return resData;
  }
  
  };