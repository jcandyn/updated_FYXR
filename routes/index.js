var express = require('express');
var router = express.Router();
require('dotenv').config()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/views/index.html')
});

router.get('/contact', function(req, res, next) {
  res.sendFile('/views/contact.html')
});

router.get('/about', function(req, res, next) {
  res.sendFile('/views/about.html')
});

router.get('/gallery', function(req, res, next) {
  res.sendFile('/views/gallery.html')
});

// POST route from contact form
app.post('/contact', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: GMAIL_USER,
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('contact-failure') // Show a page indicating failure
    }
    else {
      res.render('contact-success') // Show a page indicating success
    }
  })
})

module.exports = router;
