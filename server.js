const express = require('express')
//var fs = require('fs')
//var bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

//app.use(bodyParser.json())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET route
app.get('/api/itemsData', (req, res) => {
    res.send({
        items: [

            {
                name: 'name1',
                price: 10,
                type: 'clothes'
            },
            {
                name: 'name2',
                price: 20,
                type: 'foods'
            },
            {
                name: 'name3',
                price: 30,
                type: 'toys'
            }
        ]
    })
})

// app.get('/api/balance', (req, res) => {
//     res.send({
//         walletBalance: 500
//     })
// })

// app.post('/api/authentication', (req, res) => {
//     console.log(req.body)
//     res.send({
//         isUserAlreadyRegistered: false
//     })
// })