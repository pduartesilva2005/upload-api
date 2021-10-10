import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Image } from '../entities/Image';
import { ImagesView } from '../views/ImagesView';

export class ListImagesUploadedController {
  async handle(request: Request, response: Response) {
    const imagesRepository = getRepository(Image);

    const images = await imagesRepository.find();

    const imagesView = new ImagesView();

    return response.json(imagesView.renderMany(images));
  }
}
