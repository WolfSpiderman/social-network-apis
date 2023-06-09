const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID.' });
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            console.log(thought);
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            );
            console.log(user);

            if (!user) {
                return res.status(404).json({ message: 'Thought posted, but no user was found with that ID.' });
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found by that ID.' });
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID.' });
            }

            const user = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'Thought removed, but no associated user found..'});
            }

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try {} catch (err) {
            res.status(500).json(err);
        }
    }, 
    async removeReaction(req, res) {
        try {} catch (err) {
            res.status(500).json(err);
        }
    }
}