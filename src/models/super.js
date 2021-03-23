const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuperSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true},
    origin: { type: String, required: true},
    id: { type: Number, required: true},
    stats: { type: []}
})


module.exports = mongoose.model("Super", SuperSchema);