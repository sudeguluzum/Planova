const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

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

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: { email }
        });
        if (!user) {
            console.log("Kullanıcı bulunamadı:", email);
            return res.status(401).json({ message: "Email or password is incorrect!!" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Email or password is incorrect" });
        }

        //Token oluşturma
        const token = jwt.sign(
            {
                id: user.user_id, name: user.name, email: user.email
            },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        //cookie'ye token'ı yerleştir
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });
        return res.json({
            message: "Login successfull", user: {
                id: user.user_id, name: user.name, email: user.email
            }
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Internal server error" })
    }
}