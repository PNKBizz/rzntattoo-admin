const express = require('express')
const cors = require('cors')
const cloudinaryUpload = require('./src/vue-cloudinary-management')

const app = express()
const cloudName = 'rzntattoo'
const apiKey = '842863162776522'
const apiSecret = '54iNJbmcDbgEWJsBnCBF1jW5r8U'
const masters = [{name: 'Швед', folder: 'shwed'}]

app.use(express.json())
app.use(cors())

app.use(cloudinaryUpload(cloudName, apiKey, apiSecret))

app.get('/api/getMasters', (req, res) => res.json(masters));

app.post('/api/setMaster', (req, res) => {
    masters.push(req.body)
    res.json(masters)
})

app.use(express.static(`${__dirname}/`))
app.listen(process.env.PORT || 4002, () => {
    console.log('App listening on port 4002')
})
