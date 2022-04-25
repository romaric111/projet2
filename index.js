var bodyParser = require("body-parser"),
    express = require("express"),
    fs = require("fs"),
    app = express();

var letters = {},
    lettersFileName = "./letters.json";

try {
  letters = JSON.parse(fs.readFileSync(lettersFileName));
} catch {};

app.use( express.static("public") );

app.get("/getLetters", (req,res) => res.json( Object.values( letters ) ));

app.post("/addLetter", bodyParser.text(), (req,res) => {
  letters[req.body] = req.body;
  res.end();
  fs.writeFile(lettersFileName, JSON.stringify(letters, 2, " "), err => 
    { if (err) console.error(err); });
} );

app.listen(3333,`localhost`,()=>{
  console.log('le serveur est en marche');
});