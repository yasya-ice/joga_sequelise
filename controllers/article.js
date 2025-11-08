const Article = require('../models').Article;

class ArticleController {

    getAllArticles = async (req, res) => {
        try {
            const articles = await Article.findAll();
            res.status(200).json(articles);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve articles' });
        }
    };

}


module.exports = new ArticleController();