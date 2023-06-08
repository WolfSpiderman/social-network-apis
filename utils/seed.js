const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getUsername } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});
    const users = getUsername(15);

    await User.collection.insertMany(users);

    console.table(users);
    console.info('Seeding complete! *Plant emoji*');
    process.exit(0);
});