const app = require('express')();
const port = 5000;

app.get('/ping', (req, res) => {
    res.status(200);
    res.json({'pong': true});
});

app.listen(5000, _ => {
    console.log(`listening on port ${port}`);
});