import mongoose, { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username required"],
        unique: [true,"Username must be unique"]
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique: [true,"Email must be unique"]
    },
    image: {
        type: String
    }
})

export const User = models.TestUser || model("TestUser",userSchema)
