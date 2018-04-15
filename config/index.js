var configValues = require('./config');

// 27017

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://localhost/test'
  }
}