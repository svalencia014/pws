const port = 8080

//Import express shit
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Initialize Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});