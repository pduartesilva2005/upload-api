import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('images')
export class Image {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  path: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
