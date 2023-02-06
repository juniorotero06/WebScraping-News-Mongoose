const mongoose = require("mongoose");
const { Schema } = mongoose;

const BreakingNewsSchema = new Schema(
  {
    title: { type: String },
    link: { type: String },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

module.exports = mongoose.model("BreakingNew", BreakingNewsSchema);
