import express from 'express';
import {
    previewSticker,
    generateSticker,
} from '../controllers/stickerController';
const router = express.Router();

router.get('/:stickerName', previewSticker);

router.get('/:stickerName/generate', generateSticker);

export default router;
