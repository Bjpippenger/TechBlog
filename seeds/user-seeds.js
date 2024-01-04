const { User } = require('../models');

const userData = [{
        username: 'Benjamin',
        password: 'Bkenjamin'

    },
    {
        username: 'Adam',
        password: 'Adam'
    },
    {
        username: 'Pippenger',
        password: 'Pippenger'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;