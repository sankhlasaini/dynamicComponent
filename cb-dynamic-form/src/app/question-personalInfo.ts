
import { QuestionBase } from './question-base';

export class PersonalInfoQuestion extends QuestionBase<string> {
    controlType = 'personalInfo';
    options: { key: string, value: string,sex:string  }[] = [];


    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];

    }
}
