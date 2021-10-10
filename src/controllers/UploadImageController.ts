import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Image } from '../entities/Image';
import { ImagesView } from '../views/ImagesView';

export class UploadImageController {
  async handle(request: Request, response: Response) {
    const { filename } = request.file as Express.Multer.File;

    const imagesRepository = getRepository(Image);

    const image = imagesRepository.create({
      path: filename
    });

    await imagesRepository.save(image);

    const imagesView = new ImagesView();

    return response.status(201).json(imagesView.render(image));
  }
}
