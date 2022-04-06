//Import express shit
const express = require("express");
const router = express.Router();

//Import Google shit
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//Initialize Firebase
initializeApp();
const db = getFirestore();

//Routes (for reference)
    //Get
    //Post
    //Delete

    router.get('/messages', async (req, res) => {
        //Get messages
        const messages = await db.collection('messages').get().then(() => { console.log('recieved messages') }).catch(err => { console.log(err); });
        return res.status(202).send(messages);
    });
    
    router.post('/messages', (req, res) => {
        const message = req.body;
        const name = message.name;
        const email = message.email;
        const body = message.body;
        const id = Math.floor(100000 + Math.random() * 900000);
        //post it to firestore
        const docRef = db.collection('messages').doc(`${id}`);
        docRef.set({ 
            "name": name,
            "email": email,
            "body": body,
            "id": id
         });

        console.log(`Added ${id} to the database`);

        return res.sendStatus(201);
    });
    
    router.delete('/messages/delete', (req, res) => {
        //Delete messages
        const target = req.body;
        const id = target.id;
        const docRef = db.collection('messages').doc(`${id}`).delete();
        return res.sendStatus(202);
    });

module.exports = router;
