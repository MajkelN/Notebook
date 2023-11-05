const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URLSlugs = require('mongoose-url-slugs');

const Note = new Schema({
    title: String,
    content: String,
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true
})

Note.plugin(URLSlugs('title', {field: 'slug', update: true}));

module.exports = mongoose.models.Note || mongoose.model("Note", Note)