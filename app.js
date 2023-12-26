const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');

const { User, Song, UserLikedSong } = require('./Models/index');
const UserRoute = require('./routes/UserRoute');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', UserRoute);

sequelize.sync().then(async () => {
    console.log('Database synced!');
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    })
});




