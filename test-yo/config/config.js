var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test-yo'
    },
    port: 3000,
    db: 'mongodb://localhost/test-yo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test-yo'
    },
    port: 3000,
    db: 'mongodb://localhost/test-yo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test-yo'
    },
    port: 3000,
    db: 'mongodb://localhost/test-yo-production'
  }
};

module.exports = config[env];
