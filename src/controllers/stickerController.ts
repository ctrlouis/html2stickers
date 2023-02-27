import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import Sticker from '../services/stickerService';

const previewSticker = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const stickerName = req.params.stickerName;
        const height = Number(req.query.height);
        const width = Number(req.query.width);

        verifiedParams(stickerName, height, width);

        const htmlFilePath = `${stickerName}`;
        const data = {
            stickerName: stickerName,
            ...req.query,
        }

        res.render(htmlFilePath, data);
    } catch (err: any) {
        next(err.message);
    }
}

const generateSticker = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const stickerName = req.params.stickerName;
        const height = Number(req.body.height);
        const width = Number(req.body.width);

        verifiedParams(stickerName, height, width);

        let data = req.body; // turn req.query into object/array
        delete data['height'];
        delete data['width'];
        
        Sticker.generate(stickerName, height, width, data);
        res.send();
    } catch (err: any) {
        next(err);
    }
}

const verifiedParams = (stickerName: String | undefined, height: number, width: number) => {
    if (typeof stickerName !== 'string') throw createHttpError(400, `Param stickerName should be a string`);
    console.log(width);
    console.log(Number.isNaN(width));
    if (Number.isNaN(height)) throw createHttpError(400, `Param height should be a number`);
    if (Number.isNaN(width)) throw createHttpError(400, `Param width should be a number`);
}

export {
    previewSticker,
    generateSticker,
}