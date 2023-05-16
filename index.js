const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 9000 ;



// Middleware 
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome to Car Doctor Server')
})




app.listen(port, () => {
    console.log(`Our Car Doctor Server is Running on the PORT: ${port}`);
})