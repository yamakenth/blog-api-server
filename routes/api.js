var express = require('express');
var router = express.Router();

var article_controller = require('../controllers/articleController');
var comment_controller = require('../controllers/commentController');
var user_controller = require('../controllers/userController');

/* ARTICLES */

// post an article 
// protected 
router.post('/articles', article_controller.article_post);

// get list of all articles 
router.get('/articles', article_controller.article_list_get);

// get an article 
router.get('/articles/:articleid', article_controller.article_get);

// update an article 
// protected
router.put('/articles/:articleid', article_controller.article_put);

// delete an article 
// protected
router.delete('/articles/:articleid', article_controller.article_delete);

/* COMMENTS */

// post a comment by article id 
router.post('/articles/:articleid/comments', comment_controller.comment_post);

// get a list of comments by article id 
router.get('/articles/:articleid/comments', comment_controller.comment_list_get);

// delete a comment 
// protected
router.delete('/articles/:articleid/comments/:commentid', comment_controller.comment_delete);

/* USERS */

// post signup
router.post('/users/signup', user_controller.user_signup_post);

// post login
router.post('/users/login', user_controller.user_login_post);

// get a list of users 
// protected 
router.get('/users', user_controller.user_list_get);

module.exports = router;