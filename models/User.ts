import mongoose, { Schema, model, Model } from 'mongoose';

import { IUser } from '../interfaces';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: {
            values: ['admin', 'client', 'super-user', 'seo'],
            message: '{VALUE} no es un rol Válido',
            default: 'client',
            required: true,
        }
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

const User: Model<IUser> = mongoose.models.User || model('User', userSchema);
export default User;