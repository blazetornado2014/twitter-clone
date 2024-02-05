import {model, Schema, models} from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    username: String,
});

const User = models?.User || model('User', userSchema);

export default User;