const express = require('express');
const database = require('./database');
const connections = require('./connections/manager');

const app = express();
app.use(express.json());

(async () => {
    await database.connect();
    app.listen(process.env.APP_PORT, (err) => {
        if (err) process.exit(0);
        console.log(`Server started on port: ${process.env.APP_PORT}`);
    });
})();