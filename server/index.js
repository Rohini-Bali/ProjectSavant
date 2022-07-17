const express = require('express')
const helmet = require('helmet') //Helmet is Express middleware. (It also works with Connect or no library at all! If you need support for other frameworks or languages, see this list.) The top - level helmet function is a wrapper around 15 smaller middlewares.
const cors = require('cors')
const app = express()
const port = 3000
var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(helmet());
app.get('/', cors(corsOptions), (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`CORS-enabled web server listening on port ${port}`)
})