const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./config/database');
const authRoutes = require('./routers/auth');

const app = express();

// CORS ayarı
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser());

app.use(express.json());
app.use('/api', authRoutes);  // Tüm authRoutes için prefix "/api"

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Veritabanı bağlantısı başarılı');

        // Backend'i 3001 portunda çalıştır
        app.listen(3001, () => {
            console.log('Server 3001 portunda çalışıyor');
        });
    } catch (error) {
        console.error('Veritabanı bağlantı hatası:', error);
    }
};

startServer();
