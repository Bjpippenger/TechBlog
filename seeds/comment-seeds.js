const { Comment } = require('../models');

const commentData = [{
        comment_text: "There never is, or was, or will be anything except the present",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "In a time of deceit, telling the truth is a revolutionary act",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Life is not a problem to be solved, but an experience to be had",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;