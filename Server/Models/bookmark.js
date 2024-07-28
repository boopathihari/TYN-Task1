
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'Company', // Assuming you have a Company model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
