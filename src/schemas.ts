/**
 * @author WMXPY
 * @namespace Mongoose
 * @description Schemas
 */

import { Schema } from "mongoose";

export const RonpaThesisSchema: Schema = new Schema({

    insiders: {
        type: [String],
        required: true,
    },
    extras: {
        type: Schema.Types.Mixed,
        required: false,
    },
}, {
    _id: false,
});

export const ReactionSchema: Schema = new Schema({

    at: {
        type: Date,
        required: true,
    },
    by: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
}, {
    _id: false,
});

export const EditHistorySchema: Schema = new Schema({

    at: {
        type: Date,
        required: true,
    },
    by: {
        type: String,
        required: true,
    },
    before: {
        type: Schema.Types.Mixed,
        required: true,
    },
    after: {
        type: Schema.Types.Mixed,
        required: true,
    },
}, {
    _id: false,
});

export const RonpaFlatRecordSchema: Schema = new Schema({

    // Required
    id: {
        type: String,
        required: true,
    },
    at: {
        type: Date,
        required: true,
    },
    by: {
        type: String,
        required: true,
    },
    story: {
        type: String,
        required: true,
    },
    content: {
        type: Schema.Types.Mixed,
        required: true,
    },

    // Optional
    thesis: {
        type: RonpaThesisSchema,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    reactions: {
        type: [ReactionSchema],
        required: false,
    },
    editHistories: {
        type: [EditHistorySchema],
        required: false,
    },
    reply: {
        type: String,
        required: false,
    },

    // Notations
    isRobot: {
        type: Schema.Types.Boolean,
        required: false,
    },
    isGenerated: {
        type: Schema.Types.Boolean,
        required: false,
    },

    // Read
    readBy: {
        type: [String],
        required: false,
    },

    // Extras
    extras: {
        type: Schema.Types.Mixed,
        required: false,
    },
}, {
    _id: false,
});
