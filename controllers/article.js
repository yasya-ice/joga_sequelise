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

    getArticleBySlug = async (req, res) => {
        try {
            const article = await Article.findOne({ 
                where: { slug: req.params.slug },
                include: [
                    'Author',
                    'Tags'
                ] 
            });
            if (article) {
                res.status(200).json(article);
            } else {
                res.status(404).json({ error: 'Article not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve article' });
        }
    }

}


module.exports = new ArticleController();