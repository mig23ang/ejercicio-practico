const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pdf: {
        type: String
    }

},
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model('User', UserSchema);