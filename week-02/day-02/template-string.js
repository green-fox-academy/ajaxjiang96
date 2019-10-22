'use strict';

module.exports = function log(timestamp, username, action) {
  console.log(`INFO - ${timestamp}
${username} : ${action}`);
};
