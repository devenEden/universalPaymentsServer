const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const indexRouter =  require('./src/api/routes');

require('dotenv').config({path: __dirname + '/config/.env'});
const PORT = process.env.PORT || 8000; 
const dbURI = process.env.DBURI;

//app 
const app = express(); 

//connect to database 
mongoose.connect('mongodb+srv://deven:@#123mattjohn@cluster0.m7ce6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser:true, useUnifiedTopology:true })
.then(() => {
    console.log('Database Connected',`Server listening on port ${PORT}`); 
    app.listen(PORT);
    })
.catch( error => console.error(`Database connection Failed error: ${error}`));

app.use(cors());
app.use(express.json());

//routing middleware
app.use(indexRouter);







