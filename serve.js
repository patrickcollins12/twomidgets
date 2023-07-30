const express = require('express')
const app = express()
const port = 3000


app.use(function(req, res, next) {
  // check for .xls extension
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(fullUrl)
  // req.baseUrl
  next();
});


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  