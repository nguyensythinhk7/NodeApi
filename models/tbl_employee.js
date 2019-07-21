const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: String,
    yearOld: Number,
    gender: String
}, {
        timestamps: true
    }
)
module.exports = mongoose.model('Employee', EmployeeSchema);
