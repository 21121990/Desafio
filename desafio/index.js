const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors"); //necessário para consumir API localmente - npm install cors --save

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var fs = require('fs');
var data = fs.readFileSync('db.json', 'utf8');
var db = JSON.parse(data);

app.get("/courses/:slug", (req, res) => {

    var courses = db.courses.find(x => x.slug == req.params.slug)

    if (courses == undefined) {
        res.send("Curso não encontrado");
    }
    else {
        res.send(courses);
    }

});

app.listen(3000, () => {
    console.log("API Online")
});