const articlesRouter = require('express').Router();
const {getArticles, getArticleById, getCommentsByArticle, postComment, patchArticleVotes} = require('../controllers/news.controllers');

articlesRouter
.route('/')
.get(getArticles);

articlesRouter
.route('/:article_id')
.get(getArticleById)
.patch(patchArticleVotes);

articlesRouter
.route('/:article_id/comments')
.get(getCommentsByArticle)
.post(postComment);

module.exports = articlesRouter;