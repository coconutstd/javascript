const path = require('path');
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/user/:id', (req, res) => {
    if (!req.headers['token']) {
        return res.status(403).send({
            status: 'Error'
        });
    }

    
});