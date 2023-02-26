import { Request, Response, NextFunction } from 'express';
import Sticker from '../services/stickerService';

const previewSticker = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const stickerName = req.params.stickerName;
        const height = req.query.height;
        const width = req.query.width;

        const htmlFilePath = `${stickerName}`;
        const data = {
            title: stickerName,
            height: height,
            width: width,
        }

        res.render(htmlFilePath, data);
    } catch (err: any) {
        next(err);
    }
}

const generateSticker = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const stickerName = req.params.stickerName;
        const height = Number(req.query.height);
        const width = Number(req.query.width);
        
        Sticker.generate(stickerName, height, width);
        res.send();
    } catch (err: any) {
        next(err);
    }
}

export {
    previewSticker,
    generateSticker,
}