const passport = require('passport')

passport.use(require('./JwtStrategy'))

passport.use(require('./LocalStrategy'))