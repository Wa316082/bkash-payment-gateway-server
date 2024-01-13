const router = require('express').Router()
const paymentController = require('../controllers/paymentController')
const paymentMiddleware = require('../middleware/paymentMiddleware')

router.post('/bkash/payment/create', paymentMiddleware.bkash_auth, paymentController.payment_create)

router.get('/bkash/payment/callback', paymentMiddleware.bkash_auth, paymentController.call_back)

router.get('/bkash/payment/callback', paymentMiddleware.bkash_auth, paymentController.call_back)

router.get('/bkash/payment/refund/:trxID', paymentMiddleware.bkash_auth, paymentController.refund)



module.exports = router