import mongoose from 'mongoose'

const subjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const model = mongoose.model('subjects', subjectSchema)

export default model