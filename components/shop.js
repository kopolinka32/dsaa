// const express = require('express');
// const app = express();
// import { response } from 'express';


export function sendRequest(event) {

    event.preventDefault();
    
    fetch('http://localhost:3001/api/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })

  }

// app.listen(3000);