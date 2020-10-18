const express = require('express');
const app = express();
require('dotenv').config()
console.log(232342342);

const router = require('./routes')

app.use(express.json())
app.use(router)


console.log(232342342);



const port = 3000
// ||process.env.PORT
app.listen(port, () => {
  console.log(`AUTH ON at http://localhost:${port}`);
});



