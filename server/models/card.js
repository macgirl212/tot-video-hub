const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    previewPicture: {
        type: String,
        default: ""
    },
    basePicture: {
        type: String
    },
    evolPicture: {
        type: String
    },
    baseVid: {
        type: String
    },
    evolVid1: {
        type: String
    },
    evolVid2: {
        type: String
    },
    type: {
        type: String,
        enum: ["R", "MR", "SR", "SSR"],
        required: true
    },
    character: {
        type: String,
        enum: ["Artem", "Luke", "Marius", "Vyn"]
    }
})

module.exports = mongoose.model('Card', CardSchema)