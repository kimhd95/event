const
    express = require('express'),
    eventAPI = require('../../../src/users/event_api');

let router = express.Router();

console.log('apis/users/index.js called');
/**
 * api/v1/kafka/
 */

router.use('/get_kafka_addr', eventAPI.getKafkaAddr)
router.use('/get_topics', eventAPI.getTopics)
router.use('/get_trace', eventAPI.getTrace)


// ^Middleware. Make sure to put all the routes which needs authentication below this middleware.

module.exports = router;
