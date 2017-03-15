
import { QuestionBase } from './question-base';

export class SkillsInfoQuestion extends QuestionBase<string> {
    controlType = 'skillsInfo';
    options: { key: string, value: string }[] = [];


    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];

    }
}
