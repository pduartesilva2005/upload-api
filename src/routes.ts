import { Router } from 'express';
import multer from 'multer';

import { uploadConfig } from './config/upload';
import { ListImagesUploadedController } from './controllers/ListImagesUploadedController';
import { UploadImageController } from './controllers/UploadImageController';

export const routes = Router();

const upload = multer(uploadConfig);

const uploadImageController = new UploadImageController();
const listImagesUploadedController = new ListImagesUploadedController();

routes.get('/uploads', listImagesUploadedController.handle);
routes.post('/uploads', upload.single('image'), uploadImageController.handle);
