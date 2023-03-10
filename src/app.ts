import cors from 'cors';
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import { errorHandler } from './middlewares/errorHandler';

import stickerRouter from './routes/stickerRouter';

const stickersDir = './dist/public/stickers';

if (!fs.existsSync(stickersDir)){
    fs.mkdirSync(stickersDir, { recursive: true });
    console.log(`Directory ${stickersDir} created !`);
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.send("Welcome to html2stickers! 📄");
});

app.use('/api/stickers', stickerRouter);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application started on port ${port}! 🚀`);
});
