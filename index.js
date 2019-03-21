const app = require('express')();
const port = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
    res.status(200);
    res.json({'pong': true});
});

app.listen( port, _ => {
    console.log(`listening on port ${port}`);
});