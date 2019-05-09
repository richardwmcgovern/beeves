/*
On startup, connect to the "ping_pong" app.
*/

class BeevesNativeRouter {
  constructor(target, mappings, mappingKey = "ns", logMesssages = true) {
    // mappings should be like:
    // {'hotword' : hotword_fn, 'stt' : stt_fn, 'nlu'}
    let beevesBackendPort = browser.runtime.connectNative(target);

    if (!_.isEmpty(beevesBackendPort)) {
      this.port = beevesBackendPort;
      this.logMessages = logMesssages;
      // Set up

      this.port.onMessage.addListener((response) => {
        if (this.logMessages) console.info("Received: " + JSON.stringify(response));
        this.mappings = mappings;
        this.mappingKey = mappingKey;

        if (_.has(response, this.mappingKey)) {
          const ns = response[this.mappingKey];
          let fn = _.get(this.mappings, response[this.mappingKey], console.log);
          fn();
        }
      });
    }
  }
}