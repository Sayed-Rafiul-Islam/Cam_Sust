import mongoose, { Schema, models } from "mongoose"

const commentsSchema = new Schema(
        {
            name : {
                type : String,
                required : true
            },
            comment : {
                type : String,
                required : true
            },
            slug : {
                type : String,
                required : true
            },
        },
        {
            timestamps : true
        }

)

const Comments = models.Comments || mongoose.model("Comments", commentsSchema)

export default Comments