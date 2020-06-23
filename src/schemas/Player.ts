import { Schema, model } from 'mongoose';

const PlayerSchema = new Schema(
    {
        name: { type: String, required: true },
        words_typed: { type: Number, required: true },
        letters_typed: { type: Number, required: true },
    },
    { timestamps: true }
);

export const Player = model('player', PlayerSchema);
