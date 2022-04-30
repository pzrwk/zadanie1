// zaimportowanie niezbednych frameworkow
import express from 'express';
import fetch from 'cross-fetch';
import moment from 'moment-timezone';

// deklaracja stalej przechowujacej numer portu
const PORT = 3000;

// inicjalizacja aplikacji
const app = express();

// funkcja zwracajaca aktualna date i czas
const getCurrentDateAndTime = () => {
    let date = new Date();
    let currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    let currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    return currentDate + ' ' + currentTime;
}

app.get('/', (req, res) => {
    fetch('http://ip-api.com/json').then(response => response.json())
    .then(data => {
        res.send(`IP: ${data.query}<br>Date in client timezone: ${moment.tz(data.timezone).format('yyyy-MM-DD HH:mm:ss')}`);
    })
})

app.listen(PORT, () => {
    console.log(`${getCurrentDateAndTime()}`);
    console.log("Author: Piotr Pożarowsczyk");
    console.log(`Listening on port: ${PORT}`);
    console.log(`Open in browser: http://localhost:${PORT}`);
})