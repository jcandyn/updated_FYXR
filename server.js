
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;



// Configuring our data parsing
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());

app.post('/contact', (req, res) => {
    // res.sendFile(path.join(__dirname + '/contact-us.html'));
    //TODO
    //send email here
    const { name, subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }
    });
    // res.json({ message: 'Message received!!!' })
});

// Star Wars Characters (DATA)
// =============================================================

// Routes
// =============================================================
app.use(express.static(__dirname + '/public'));
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/contact.html"));
  });

  app.get("/gallery", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/gallery.html"));
  });


// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

