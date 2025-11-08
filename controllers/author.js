const { Article, Author } = require('../models'); 

const models = require('../models');
class AuthorController {

    getAllAuthors = async (req, res) => {
        try {
            const authors = await Author.findAll()
                res.status(200).json({ authors });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch authors' });
        }
    }

    getAuthorById = async (req, res) => {
        try {
            const author = await Author.findByPk(req.params.id, {
                include: [{ model: Article, as: 'Articles' }]
            });
            if (author) {
                res.status(200).json({ author });
            } else {
                res.status(404).json({ error: 'Author not found' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch author' });
        }
    }
}

module.exports = new AuthorController();