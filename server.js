// Dependencies
const express = require('express');
const path = require("path");
const fs = require('fs');

// Setup database
let db = require('./develop/db/db.json');

// Setup PORT
const app = express();
const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
    console.log(`Now listening ${PORT}`);
});