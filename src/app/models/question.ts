import {BaseModel} from './base-model';
import {Answer} from './answer';

export class Question extends BaseModel{
  imageUrl: string;
  answers: Answer[];
  multiSelect = false;
}
