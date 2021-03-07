require('dotenv').config

const express = require('express');
const cors = require('cors');
const routes = require('./routes')


const app = express()

app.use(cors('https://printshot.hookod.com'));
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000)
