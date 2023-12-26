const sequelize = require('express');

const User = require('./User');
const Song = require('./Song');
const UserLikedSong = require('./UserLikedSong');

User.belongsToMany(Song, {through: UserLikedSong});
Song.belongsToMany(User, {through: UserLikedSong});

module.exports = {
    User,
    Song,
    UserLikedSong
};


