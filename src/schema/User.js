import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    watchlist: {
        type: Object,
    }
});

const User = mongoose.model("User", userSchema);

export default User;