const SongModel = require("../models/SongModel");

async function index(req, res) {
    res.render('songs/index', {songs: await SongModel.getAll({}, req.db)})
}

module.exports = {
    index
}