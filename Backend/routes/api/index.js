var express = require('express');
var router = express.Router();

var passport = require('passport');
var passportJWT = require('passport-jwt');
var ExtractJWT = passportJWT.ExtractJwt;
var JWTStrategy = passportJWT.Strategy;

function initApiRouter(db){

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'cuandolosgatosnoestanlosratonesfiestahacen'
    },
    (payload, next)=>{
      var user = payload;
      return next(null, user);
    }
  )
);


//Rutas de Cada Entidad
var reserApiRoutes = require('./reservaciones/index')(db);
var securityApiRoutes = require('./security/index')(db);


//localhost:3000/api/sec/

router.use('/rsv',
    passport.authenticate('jwt', {session:false}),
    reserApiRoutes
);

router.use('/sec', securityApiRoutes);



return router;
}// end initApiRouter;

module.exports = initApiRouter;