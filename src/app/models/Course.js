const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;



const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String,},
    video: {type: String, require: true},
    slug: {type: String, slug: 'name', unique: true},
}, {
    timestamps: true,
});

//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Course', Course);