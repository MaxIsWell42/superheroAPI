const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuperSchema = new Schema({
    name: { type: String, required: true },
    origin: { type: String, required: true },
    stats: { type: [], required: true }
})

module.exports = mongoose.model("Super", PostSchema);