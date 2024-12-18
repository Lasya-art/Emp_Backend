 require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const bodyParser = require('body-parser');
const {readdirSync} = require('fs');
const EmployeeRouter = require('./routes/EmployeeRoute');
//const mongodburi="mongodb+srv://lasyagwd:eNXHEiiEDHW1X8MN@cluster0.nsek3.mongodb.net/"
// dotenv.config();

const app = express();
const cors = require('cors');
app.use(bodyParser.json());
// Connect to MongoDB
//mongoose.connect("mongodb+srv://lasyagwd:eNXHEiiEDHW1X8MN@cluster0.nsek3.mongodb.net/")

 mongoose.connect(process.env.ATLAS_URI // 30 seconds timeout
)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));
// Routes

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, 
}));

// app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to the API.");
  });

//const EmployeeRouter = require('./routes/EmployeeRoute');
app.use('/api/employees', EmployeeRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
