const Note = require('../models/Note')

exports.getUserNotes = async (req, res) => {
    try {
        const userId = req.user.user_id; // token doğrulaması middlewareden gelen user
        const notes = await Note.findAll({ where: { user_id: userId } });
        res.json({ success: true, notes });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Sunucu hatası' })
    }
};


// Yeni not eklemek
exports.addNote = async (req, res) => {
    try {
        const userId = req.user.user_id;
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ success: false, message: "Başlık ve metin zorunlu" })
        }
        const newNote = await Note.create({ user_id: userId, title, content })
        res.json({ success: true, note: newNote })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: "Sunucu hatası" })
    }
}

//Not Silme
exports.deleteNote = async (req, res) => {
    try {
        const userId = req.user.user_id;
        const noteId = req.params.id;

        const deleted = await Note.destroy({ where: { note_id: noteId, user_id: userId } })

        if (!deleted) {
            return res.status(404).json({ success: false, message: "Not bulunamadı" })
        }
        res.json({ success: true, message: "Not silindi" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Sunucu hatası" })
    }
}