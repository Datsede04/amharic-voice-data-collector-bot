const mongoose = require("mongoose");
const textSchema = new mongoose.Schema({
  text_id: {
    type: String,
    required: true,
  },
  text : {
    type: String,
    required: true,
  },
});

module.exports = customer = mongoose.model("sentence", textSchema);
