# Table of contents
1. [Installation](#installation)
2. [Overview](#overview)
    1. [Beeves Base](#beeves-base)
    2. [Beeves Server](#beeves-server)

## Installation <a name="installation"></a>
Clone this repo
```
git clone https://github.com/beevesuw/beeves
```
Install the speech server dependencies using the install.sh script
```
cd speech-server
./install.sh
cd ..
```
Install base dependencies
```
cd base
npm install 
```
Build using webpack
```
npm run build
```
Run the base extension in Firefox
```
npm run test
```


## Overview <a name="overview"></a>
The Browser ExtEnsion Voice Enhancement System (Beeves) provides a framework for enhancing existing browser extensions using hotword-initiated voice commands. There are two components: Beeves Base and Beeves Server. ...

### Beeves Base <a name="beeves-base"></a>
Beeves Base loads metadata from a Beeves-compliant extension and (does what to index/store it?). Then it uses native messaging to transfer the extension identifier and audio input to Beeves Server whenever it is received. ...

### Beeves Server <a name="beeves-server"></a>
Beeves server handles dispatches from Beeves Base, uses an NLP-trained model to match the audio to a loaded intent in some skill. ...

## Anatomy of a Beeves-Compliant Extension <a name="beeves-compliant-ext"></a>
Your Beeves-compliant extension must include a SNIPS json file. This file parses spoken intents and maps them to functions defined in your extension along with parameter assignments via slots.

<What a Beeves-compliant extension looks like in contrast with a traditional one>
    
.. code-block:: text

   "What will be the weather in paris at 9pm?"
    
Example SNIPS specification (replace with real SNIPS)

.. code-block:: json

   {
      "intent": {
         "intentName": "searchWeatherForecast",
      },
      "slots": [
         {
            "value": "paris",
            "entity": "locality",
            "slotName": "forecast_locality"
         },
         {
            "value": {
               "kind": "InstantTime",
               "value": "2018-02-08 20:00:00 +00:00"
            },
            "entity": "snips/datetime",
            "slotName": "forecast_start_datetime"
         }
      ]
   }

### Mapping Intents to Function Calls

After an intent is returned from Beeves Server, ...


