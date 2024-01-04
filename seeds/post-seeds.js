const { Post } = require('../models');

const postData = [{
        title: ' Benjamin Franklin',
        content: 'Beer is proof that God loves us and wants us to be happy',
        user_id: 1

    },
    {
        title: 'Abraham Lincoln',
        content: 'The problem with quotes on the internet is that they are ofeten not true',
        user_id: 2
    },
    {
        title: 'Alan Watts',
        content: 'Man suffers only because he takes seriously what the gods made for fun',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;