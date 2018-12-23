import mongoose from "mongoose"

const sutdentSchema = new mongoose.Schema({
    rollno:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    }
}, { timestamps: true 
});

const model=mongoose.model("students", sutdentSchema)

export default model