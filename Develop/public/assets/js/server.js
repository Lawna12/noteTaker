const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();
var PORT = process.env.PORT || 3660;




app.listen(PORT, () => {
    console.log("APP listening on PORT " + PORT)
})