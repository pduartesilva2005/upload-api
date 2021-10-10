import { Image } from '../entities/Image';

export class ImagesView {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3333/files/${image.path}`
    };
  }

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
}
