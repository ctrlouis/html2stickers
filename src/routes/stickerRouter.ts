import express from 'express';
import {
    previewSticker,
    generateSticker,
} from '../controllers/stickerController';
const router = express.Router();

router.get('/:stickerName', previewSticker);

router.post('/:stickerName/generate', generateSticker);

export default router;
