const express = require('express');
const connectDB = require('../homecare_App2/config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json());

//Define Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
