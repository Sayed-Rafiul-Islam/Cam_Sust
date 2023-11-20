import mongoose, { Schema, models } from "mongoose"

const usersSchema = new Schema(
        {
            email : {
                type : String,
                required : true
            },
            name : {
                type : String,
                required : true
            },
            role : {
                type : String,
                required : true
            }
        },
        {
            timestamps : true
        }

)

const Users = models.Users || mongoose.model("Users", usersSchema)

export default Users