const PORT = process.env.PORT || 3000;

// remove dev list (or create 2)
const whitelist = [
    // "http://www.mysite.co.uk",
    // "http://www.mohammed-ibrahim.co.uk",
    `http://127.0.0.1:${PORT}`,
    `http://localhost:${PORT}`,
    "https://www.youtube.com",
    // "https://www.google.com",
];
const dev_whitelist = [`http://127.0.0.1:${PORT}`, `http://localhost:${PORT}`];
const prod_whitelist = [
    // "http://www.mysite.co.uk",
    // "http://www.mohammed-ibrahim.co.uk",
    "https://www.youtube.com",
    // "https://www.google.com",
];
const corsOptions = {
    origin: (origin, callback) => {
        // remove !origin (or create prod version)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            // err, yes same origin
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};

module.exports = { corsOptions };
