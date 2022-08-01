require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
// const { errorHandler } = require("./middleware/errorHandler");

const corsOptions = require("./config/corsOptions");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions)); // Cross origin resource sharing
app.use(express.static("./public"));

// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
    // // Monitor memory usage
    // setInterval(() => {
    //     console.log(process.memoryUsage().rss);
    // }, 1000);
});
