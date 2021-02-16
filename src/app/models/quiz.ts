import {BaseModel} from './base-model';
import {Question} from './question';

export class Quiz extends BaseModel{
  questions: Question[];
}
