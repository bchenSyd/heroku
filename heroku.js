import express from 'express';
const port = process.env.port || 8000;

const app = express();
app.use(express.static('./'));

app.listen(port);
console.log('server listening on http://localhost:'+port);