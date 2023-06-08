const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema for Thought model with Reaction schema embedded
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

thoughtSchema.virtual("formattedCreatedAt").get(function () {
    const date = this.createdAt;
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;