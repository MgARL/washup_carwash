const app = require('./app')
require('dotenv').config()

const portNumber = process.env.PORT

app.listen(portNumber, () => console.log(`listening on port ${portNumber}`))