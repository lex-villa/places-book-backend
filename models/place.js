const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const placeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    creator: { type: String, required: true }
});

//placeSchema.set('toJSON', { getters: true });
//The above line will make unnecessary => this res.json({ places: places.map(place => place.toObject({ getters: true })) });

module.exports = mongoose.model('Place', placeSchema); // The convention for the model name is that it has to start with upper case letter and be in singular form