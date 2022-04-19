const connection = require('./dbconn.js');
var express = require('express');
var cors = require('cors');

// DATABASE CONNECTION 
connection();
const app = express();

// parse application/json
app.use(express.json())

app.use(cors())

// PORT DECLARATION
const PORT = process.env.PORT || 8000;

app.use('/api/auth', require('./routes/auth'))
app.use('/api/pastPaper', require('./routes/pastpapersKB.js'))

// HOSTING PURPOSES
if (process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
    const path = require("path");
    app.get("*", (req,res)=> {
        res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

// SERVER RUN
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})