const mongoose = require('mongoose')

const contactsSchmea = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
},

    gender: {
        type: String,
        required: true,
        trim: true
    },

    // date: {
    //     type: Date,
        
        
    // },

    date: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        collection: 'contacts',
    },

)



module.exports = mongoose.model('contacts', contactsSchmea)

