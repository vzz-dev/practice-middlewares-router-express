const express = require('express')

// Instance of an Express application
const app = new express();

const port = 8080;

// Router to handle requests to the path "/"
app.get("/", (req, res) => {
    return res.send("Hello World");
});

app.get("/about", (req, res) => {
    return res.send("About");
});;

let server = app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);

});