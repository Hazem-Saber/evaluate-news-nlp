const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

// API key
const dotenv = require('dotenv');
dotenv.config();

// Express to run server and routes
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// App Instance
const app = express()

// Dependencies
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware - Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

app.get('/', (req, res) => res.sendFile('dist/index.html'))

// Server and Port
app.listen(8081, () => console.log('The app listening on http://localhost:8081'))

// Test Route
app.get('/test', (req, res) => res.send(mockAPIResponse))

// Post Route
app.post('/add', postData);

async function postData(req, res) {
  const userURL = req.body.userURL;
  const response = await fetch(`${baseURL}?key=${process.env.apiKey}&url=${userURL}&lang=en`);

  try {
    const data = await response.json();
    const projectData = {
      agreement: data.agreement,
      confidence: data.confidence,
      subjectivity: data.subjectivity,
      irony: data.irony
    } 
    console.log(projectData);
    res.send(projectData);
  } catch (error) {
    console.error('error', error)
  }
}