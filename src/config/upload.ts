import { Options, diskStorage } from 'multer';
import { resolve } from 'path';
import { randomBytes } from 'crypto';

export const uploadConfig = {
  dest: resolve(__dirname, '..', '..', 'uploads'),
  storage: diskStorage({
    destination: (request, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (request, file, callback) => {
      randomBytes(16, (err, hash) => {
        if (err) {
          callback(err, file.filename);
        }

        const filename = `${hash.toString('hex')}.png`;

        callback(null, filename);
      });
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: (request, file, callback) => {
    const formats = ['image/jpeg', 'image/jpg', 'image/pngh'];

    if (formats.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Format not accepted'));
    }
  }
} as Options;
