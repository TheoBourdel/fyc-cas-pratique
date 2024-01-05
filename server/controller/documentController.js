const Document = require('../models/document.js');

exports.getDocuments = async (req, res) => {
    try {
        const documents = await Document.findAll();

        return res.json(documents);
    } catch (error) {
        console.error(error)
        return res.json({ error: error.message });
    }
}