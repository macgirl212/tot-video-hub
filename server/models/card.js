const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	previewPicture: {
		type: String,
	},
	basePicture: {
		type: String,
	},
	evolPicture: {
		type: String,
	},
	baseVid: {
		type: String,
	},
	evolVid1: {
		type: String,
	},
	evolVid2: {
		type: String,
	},
	youTubeSrc: {
		type: String,
	},
	youTubeSrc2: {
		type: String,
	},
	type: {
		type: String,
		enum: ['r', 'mr', 'sr', 'ssr'],
		required: true,
	},
	character: {
		type: String,
		enum: ['artem', 'luke', 'marius', 'vyn'],
		required: true,
	},
});

module.exports = mongoose.model('Card', CardSchema);
