const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchupSchema = new Schema({
    hero1: { type: Schema.Types.ObjectId, ref: "Super" },
    hero2: { type: Schema.Types.ObjectId, ref: "Super" },
    upVotes : [{ type: Schema.Types.ObjectId, ref: "User"}],
    hero1VoteScore : {type: Number},
    hero2VoteScore : {type: Number},
})

module.exports = mongoose.model("Matchup", MatchupSchema);