const express = require('express')
const app1 = express()
app1.disable("x-powered-by");
const port = 3000

app1.get('/', (req, res) => {
  res.send('Hello World.!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})