const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Kayıt ve giriş route'ları
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = 'gizliAnahtar123'

// router.post('/register', async (req, res) => {
//     const { name, surname, email, password } = req.body;
//     if (!name || !surname || !email || !password) {
//         return res.status(400).json({ success: false, message: 'Tüm alanlar zorunlu' });
//     }

//     try {
//         const existingUser = await User.findOne({ where: { email } });
//         if (existingUser) {
//             return res.status(400).json({ success: false, message: 'Bu e-posta zaten kayıtlı' });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await User.create({ name, surname, email, password: hashedPassword });

//         res.json({ success: true, message: 'Kayıt başarılı' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: 'Sunucu hatası' });
//     }
// });

// // login işlemi
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ success: false, message: 'Email ve şifre zorunlu' });
//     }
//     try {
//         const user = await User.findOne({ where: { email } });
//         if (!user) {
//             return res.status(400).json({ success: false, message: "Kullanıcı bulunamadı" });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ success: false, message: "Geçersiz şifre" });
//         }
//         const token = jwt.sign(
//             { id: user.user_id, name: user.name, email: user.email },
//             JWT_SECRET,
//             { expiresIn: '1d' }
//         );
//         res.cookie('token', token, {
//             httpOnly: true,
//             secure: false,
//             sameSite: 'lax',
//             maxAge: 24 * 60 * 60 * 1000
//         });

//         res.json({ succed: true, message: "Giriş Başarılı", token });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ succed: false, message: "Sunucu hatası" });

//     }
// })
// module.exports = router;
