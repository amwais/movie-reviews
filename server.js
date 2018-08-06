const express = require('express');
const ratings = require('./routes/ratings');

const app = express();

app.use('/ratings', ratings);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
