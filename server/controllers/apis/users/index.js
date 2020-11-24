const
    express = require('express'),
    userSrc = require('../../../src/users'),
    // models = require('../../../models'),
    auth = require('../../../src/users/auth');

let router = express.Router();

console.log('apis/users/index.js called');
/**
 * api/v1/users/
 */

 router.use('/test', auth.test)

// ^Middleware. Make sure to put all the routes which needs authentication below this middleware.

module.exports = router;
