switch (process.argv[2]) {
    case 'receiving' : 
       const receiving = require('./services/receiving');
       break;
    case 'sending' : 
       const sending = require('./services/sending');
       break;
    default :
      console.log('Please use one of the following alternative options:\n');
      console.log('\t\'npm start receiving\': to receive messages sent from PhoneMyBot');
      console.log('\t\'npm start sending\': to send a message to PhoneMyBot\n');
}
