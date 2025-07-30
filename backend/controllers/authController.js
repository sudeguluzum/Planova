const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { name, surname, email, password } = req.body;
    if (!name || !surname || !email || !password) {
        return res.status(400).json({ success: false, message: 'Tüm alanlar zorunlu' });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Bu e-posta zaten kayıtlı' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, surname, email, password: hashedPassword });

        res.json({ success: true, message: 'Kayıt başarılı' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Sunucu hatası' });
    }
};