var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'qwe'
    },
    port: 3005,
    db: 'mongodb://localhost/qwe-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'qwe'
    },
    port: 3000,
    db: 'mongodb://localhost/qwe-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'qwe'
    },
    port: 3000,
    db: 'mongodb://localhost/qwe-production'
  }
};

module.exports = config[env];
