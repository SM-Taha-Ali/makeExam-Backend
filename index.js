const connection = require('./dbconn.js');
var express = require('express');
var cors = require('cors');

// DATABASE CONNECTION 
connection();
const app = express();

// PORT DECLARATION
const PORT = process.env.PORT || 8000;

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
