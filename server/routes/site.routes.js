import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import siteCtrl from '../controllers/site.controller'

const router = express.Router()

router.route('/api/home')
  .get(siteCtrl.locationList)

  router.route('/api/shops/by/:userId')
  .post(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.isAdmin, siteCtrl.create)
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, siteCtrl.listBylocation)