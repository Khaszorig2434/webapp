// server.mjs
import { createServer } from 'node:http';
import fs from 'node:fs';

const server = createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case "/about.html":

            fs.readFile("./static/about.html", (err, data) => {

                if (err !== null) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end("<p>Error</p>");
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            })
        default:
            fs.readFile("index.html", (err, data) => {

                if (err !== null) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end("<p>Error</p>");
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            })
    }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:3000');
});

// run with `node server.mjs`
