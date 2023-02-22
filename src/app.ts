import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import indexRouter from './routes/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());
app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

// app.get('/', (req, res) => {
//     res.render('index');
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
