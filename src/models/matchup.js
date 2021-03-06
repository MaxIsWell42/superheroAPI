const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchupSchema = new Schema({
    hero1: { type: Schema.Types.ObjectId, ref: "Hero" },
    hero2: { type: Schema.Types.ObjectId, ref: "Hero" },
    upVotes : [{ type: Schema.Types.ObjectId, ref: "User"}],
    voteScore : {type: Number},
})

module.exports = mongoose.model("Matchup", MatchupSchema);