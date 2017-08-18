const port = 3000; // Feel free to change the port number
module.exports = {
 PORT: port,
 MASSIVE_URI: 'postgres://ofgqhezx:TizVjU_-2idhROnrARmFDebvQ2VU2fjX@tantor.db.elephantsql.com:5432/ofgqhezx',
 SESSION_SECRET: 'spacexclonesecret',
 INITALIZE_LOG: true,
 AUTH_CONFIG: {
		domain: 'kemanewright.auth0.com',
		clientID: 'StmjGobTuOgWojSEUgyrr143vfKQD3pG',
		clientSecret: 'T5S3-lhE5iKz5aa1txkD9VYRNEJQwyim-S2bnw_3oEx8rlHz-NDeUaI2Ps5tvvgI',
		callbackURL: 'http://localhost:' + port + '/auth/callback'
	},
  STRIPE_KEYS: {
    secretKey: 'sk_test_BXsDR7cboQmpGohjYRDglFkh'
  }
};
