const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    book:{type: String, unique:true},
    author:String,
    link:String,
});
const Books = mongoose.model("Books", booksSchema);
module.exports = Books;

Books.create(
    {
        book: "Cybersecurity for dummies",
        author: "Joseph Steinberg",
        link: "https://www.amazon.ca/Cybersecurity-Dummies-Joseph-Steinberg/dp/1119560322/ref=sr_1_1"
    },
    {
        book: "HOW TO LIVE A GOOD LIFE",
        author: "Massimo Pigliucci",
        link: "https://www.amazon.ca/How-Live-Good-Life-Philosophy/dp/0525566147/ref=sr_1_3"
    },
    {
        book: "JavaScript The Definitive Guide",
        author: "Daniel Flanagan",
        link: "https://www.amazon.ca/JavaScript-Definitive-Guide-Activate-Pages/dp/0596805527/ref=sr_1_2"
    },
    function (error, savedDocument) {
        if (error) console.log(error);
        //console.log(savedDocument);
    }
);