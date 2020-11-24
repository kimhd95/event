const environments = {
	local: {
		mysql: {
      host: '',
      username: '',
      password: '',
      database: '',
      logging: console.log
		},
		apikey: '',
		jwt_secret: ''
	},

	dev: {
		mysql: {
            host: '',
            username: '',
            password: '',
            database: '',
            logging: console.log
		},
		apikey: '',
		jwt_secret: ''
	},

	// production: {
	// 	mysql: {
	// 		host: productionKeys.prodDBHost,
	// 		username: productionKeys.prodDBUserName,
	// 		password: productionKeys.prodDBKey,
	// 		database: productionKeys.prodDBDatabase,
	// 		logging: console.log
	// 	},
	// 	apikey: productionKeys.prodAPIKey,
	// 	jwt_secret: productionKeys.prodJWTKey
	// }
}

const nodeEnv = process.env.NODE_ENV || 'local';
module.exports = environments[nodeEnv];
