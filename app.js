const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
    const fruits = [
        {
            fruit : "apel"
        },
        {
            fruit : "mangga"
        },
        {
            fruit : "jeruk"
        }
    ]
  res.render('index', {
      nama : "sigit wahyudi",
      umur : 19,
      fruits : fruits
  })
})

app.get('/:name', (req, res) => {
    res.send(`nama saya ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})