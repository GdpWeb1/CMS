const express = require('express');
const api = express.Router();
const https = require('https');
const http = require("http");

api.get('/', function (req, res) {
    res.render('home', {
        title: 'childrenmonitor'
    });
});
 
module.exports = api;
