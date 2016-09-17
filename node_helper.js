var NodeHelper = require('node_helper');
var request = require('request');

module.exports = NodeHelper.create({
  start: function () {
    console.log('bitcoin helper started...');
  },

  getTickers: function (url) {
      var self = this;

      request({ url: url, method: 'GET' }, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            self.sendSocketNotification('TICKERS_RESULT', result);
          }
      });

  },

  //Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'GET_TICKERS') {
      this.getTickers(payload);
    }
  }

});
