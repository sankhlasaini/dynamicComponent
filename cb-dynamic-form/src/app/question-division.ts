import { QuestionBase } from './question-base';

export class DivisionQuestion extends QuestionBase<string> {
  controlType = 'division';
  
  constructor(options: {} = {}) {
    super(options);
  }
}
