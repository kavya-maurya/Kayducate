const mongoose= require ("mongoose");

const userSchema = mongoose.Schema(
    {
        name: String,
        course: String

    }
)

const User = mongoose.model("user",userSchema);

module.exports = User;