const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
    res.json({
        meta: {
            status: true,
            message: "Docker rockss!!!",
            code: 200
        }
    });
});

app.listen(port, () => console.log(`Server running on port number: ${port}...`));

module.exports = app;