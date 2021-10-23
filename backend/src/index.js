const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9090;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({'message': 'okdsss'});
})

app.listen(port, () => {
    console.log(`Anonymous forum application backend running at http://localhost:${port}`)
});