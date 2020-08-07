# PhoneMyBot: sample integration
## Introduction

This is an 'hello world' code to show how you can integrate your chatbot with [PhoneMyBot](https://www.phonemybot.com) API.

This sample code comes with no warranty and with many limitations :

- There is no chatbot integration: the user is impersonating the chatbot writing the messages using the command line interface. In a real integration you will implement the integration with your chatbot instead.
- The service is handling one conversation at a time. A real service implemented with PhoneMyBot can serve an unlimited number of contemporary conversations.
- Only a limited number of features (the basic ones) provided by the PhoneMyBot API are used. Please contact Interactive Media (www.imnet.com) if you are looking for more advanced features.

## Pre-requisites

Before using this sample code you need an active PhoneMyBot account. If you don't have yet an account you should visit the PhoneMyBot website (www.phonemybot.com) and regiser for a free trial.

Once you have an active account, you will be able to browse the dashboard of your subscription on the PhoneMyBot portal, edit the configuration and set the URL pointing to  the server where you will install this hello world service.  You will be able to view there also the security token associated with your subscription.

You need also [nodejs](https://nodejs.org/en/) installed in your system.


## Setting the evironment variables

This code uses [dotenv](https://www.npmjs.com/package/dotenv), so you are free to set the needed environment variables or load then from the `.env` file thatyou will place in the root of your project. The file `.env.example` show an example of how the `.env` file should be.

The environment variable to be set are the following:

+ PMB_SECURITY_TOKEN: the security token you get from PhoneMyBot for your subscription
+ YOUR_SECURITY_TOKEN: the security token you chose to access this hello world service (using basic + authentication)
+ YOUR_PORT: the port you want to expose for the hello world service 
+ BASE_PMB_URL: the base URL provided by PhoneMyBot for your subscription



## How to use this hello world service

+ Install all the packages executing `nmp install` from the root of the project
+ Execute `npm start receiving` from a shell, to see the messages sent from PhoneMyBot related with your subscription. These are the messages showing who is calling your subscription number and the transcription of the voice messages received from the caller
+ Execute `npm start sending` from a separate shell to send messages to PhoneMyBot. With this sample code you are impersonating the chatbot, sending the messages that the chatbot would send to the caller, and PhoneMyBot synthesize the the corresponding voice messages for the caller.

You will be able to call the number of your subscription and see how the messages are flowing from/to PhoneMyBot to/from the chatbot.

