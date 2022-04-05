const port = 8080

//Import express shit
const express = require('express');
const app = express();

//Import Google shit
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//Prepare Google shit
initializeApp();
const db = getFirestore();

//Routes
    //Get
    //Post
    //Put
    //Delete

app.get('/messages', (req, res) => {
    //Get messages
});

app.post('/messages', (req, res) => {
    //Post messages
    const user = req.body.user;

    const msg = db.collection('messages').doc(`${req.name}`);

    msg.set(res);

    return res.sendStatus(201, 'Message posted');
});

app.put('/messages', (req, res) => {
    //Put messages
});

app.delete('/messages', (req, res) => {
    //Delete messages
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});