import mongoose from "mongoose"

export type UserType = {
    _id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        unique: true,
        type: String,

    },
    password: {
        required: true,
        type: String,

    },
    firstName: {
        required: true,
        type: String,
        maxLength: 50,

    },
    lastName: {
        required: true,
        type: String,
        maxLength: 50,

    }
})

const User = mongoose.model<UserType>("User", userSchema)

export default User