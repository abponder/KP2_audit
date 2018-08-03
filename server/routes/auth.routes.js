import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

//signin
router.route('/auth/signin')
  .post(authCtrl.signin)

//signout
router.route('/auth/signout')
  .get(authCtrl.signout)

export default router


/* -----------------------------------------------------------------------
To protect access to the read, update, and delete routes, the server will need to check that the requesting client is actually an authenticated and authorized user. To check if the requesting user is signed in and has a valid JWT when a protected route is accessed, we will use the express-jwt module. 
****** The express-jwt module is middleware that validates JSON Web Tokens.********
--------------------------------------------------------------------------  */