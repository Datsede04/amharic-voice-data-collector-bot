const mongoose = require("mongoose");
const audioSchema = new mongoose.Schema({
  audio_id: {
    type: String,
    required: true,
  },
  audio_location: {
    type: String,
  },
  text_id: {
    type: mongoose.Schema.Types.text_id,
    ref: "sentence"
  },
});

module.exports = customer = mongoose.model("audio", audioSchema);
