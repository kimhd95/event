// const models = require('../../models');
const config = require('../../../config');
// const crypto = require('crypto');
// const schedule = require('node-schedule');
// const request = require('request');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const qs = require('qs');

function test(req, res) {
  console.log("test api")
  res.status(200).json({msg: 'test success'})
}


module.exports = {
  test,
}
