const express = require('express');
const router = express.Router();
const ArticleAdminController = require('../../controllers/admin/article');

router.post('/article/create', ArticleAdminController.createArticle);
router.put('/admin/article/edit/:id', ArticleAdminController.updateArticle);

module.exports = router;