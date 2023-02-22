import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send("Welcome to html2stickers! 📄");
});

router.get('/stickers/:stickerName', function(req, res, next) {
    const stickerName = req.params.stickerName;
    const height = 306;
    const width = 991;
    const data = {
        title: stickerName,
        height: height,
        width: width,
    }
    res.render(stickerName, data);
});

export default router;
