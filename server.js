var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path')

mongoose.connect('mongodb://localhost/authors');
var AuthorSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String, default: " " },
    completed: { type: Boolean, default: false }
}, { timestamp: true });

mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author')
app.use(express.static(__dirname + '/public/dist/public'));

app.get('/', function (req, res) {
    Author.find({}, function (err, authors) {
        if (err) {
            res.json({ message: "error", error: err })
        }
        else {
            res.json({ message: 'Success!', data: authors })
        }
    })
})

// GET: Retrieve all Author
app.get('/authors', function (req, res) {
    Author.find({}, function (err, authors) {
        if (err) {
            res.json({ message: "error", error: err })
        }
        else {
            res.json({ message: 'Success! All authors!', data: authors })
        }
    })
})

// GET: Retrieve a Author by ID
app.get('/author/:id', function (req, res) {
    Author.findOne({ _id: req.params.id }, function (err, author) {
        if (err) {
            res.json({ message: 'error', data: err })
        } else {
            console.log(author)
            res.json({ message: 'Success! Author by ID!', data: author })
        }
    })
})

// POST: Create a Author
app.post('/authors', function (req, res) {
    console.log('Harden');
    var author = new Author({
        name: req.body.name,
    })
    author.save(function (err, authors) {
        if (err) {
            res.json({ message: 'error', error: err })
        } else {
            res.json({ message: 'Success! Created a Author!', data: authors })
        }
    })
})

// PUT: Update a Author by ID
app.put('/authors/:id', function (req, res) {
    Author.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
        }
    }, function (err, authors) {
        if (err) {
            res.json({ message: 'error' })
        } else {
            res.json({ message: 'Success! Update a Author by ID', data: authors })
        }
    })
})

// DELETE: Delete a Author by ID
app.delete('/authors/:id', function (req, res) {
    Author.remove({ _id: req.params.id }, function (err) {
        if (err) {
            console.log('Returned Error:', err);
            res.json({ message: 'error' })
        }
        else {
            res.json({ message: "Success" })
        }
    })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

const server = app.listen(8000);