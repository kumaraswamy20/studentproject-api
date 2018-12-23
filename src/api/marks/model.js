import mongoose from 'mongoose'

const marksSchema = new mongoose.Schema({
    student: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'students',
        required: true
    },
    subject: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'subjects',
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const model = mongoose.model('Marks', marksSchema)

export default model