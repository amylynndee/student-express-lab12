let express = require('express')
let api_routes = require('./routes/api.js')
// let path = require('path')      // just added to see if it fixed an issue

// create web application
let app = express()

// let vueClientPath = path.join(__dirname, 'student-sign-in-client', 'dist')      // just added to see if it fixed an issue
// app.use(express.static(vueClientPath))                                          // just added to see if it fixed an issue

// be able to handle JSON requests, convert data to JavaScript
app.use(express.json())

app.use('/api', api_routes)

app.use(function(req, res, next) {
    // response with a 404 to any otehr requests
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})

//Start server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})

