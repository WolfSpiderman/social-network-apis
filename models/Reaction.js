const { Schema, Types } = require('mongoose');

// Reaction Schema which is embedded within Thought model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

reactionSchema.virtual("formattedCreatedAt").get(function () {
    const date = this.createdAt;
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  });

  module.exports = reactionSchema;