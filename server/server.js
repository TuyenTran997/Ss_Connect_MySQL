const express = require('express');

const server = express();

const userRoute = require('./routes/user.routes')
// su dung file userRoute
server.use('/api/v1/users', userRoute);

server.listen(3000, (err, res) => {
    console.log(`http://localhost:3000`);
});

