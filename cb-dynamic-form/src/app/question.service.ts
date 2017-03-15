import { Injectable } from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { DivisionQuestion } from './question-division';
import { PersonalInfoQuestion } from './question-personalInfo';
import { SkillsInfoQuestion } from './question-skills';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      // persnal info
      new PersonalInfoQuestion({
        key: 'personalInfo',
        label: 'PERSONAL INFO',
        order: 1,
        options: [
          { "key": "Name", "value": "sheenam" },
          { "key": "Email", "value": "sankhlasiaNI@gmail.com" },
          { "key": "AGE  and sex", "value": "23"}
        ]
      }),

      new SkillsInfoQuestion({
        key: 'skillsInfo',
        label: 'SKILLS INFO',
        order: 2,
        options: [
          { "key": "JAVA", "value": "EXP 2" },
          { "key": ".NET", "value": "EXP 4" }
        ]
      }),



      new DivisionQuestion({
        key: 'division',
        label: 'MY DIV',
        order: 4
      }),

      new DivisionQuestion({
        key: 'division',
        label: 'Pernal',
        order: 4
      }), new DivisionQuestion({
        key: 'division',
        label: 'MY DIV',
        order: 4
      }),

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     { key: 'solid', value: 'Solid' },
      //     { key: 'great', value: 'Great' },
      //     { key: 'good', value: 'Good' },
      //     { key: 'unproven', value: 'Unproven' }
      //   ],
      //   order: 3
      // }),

      // new TextboxQuestion({
      //   key: 'firstName',
      //   label: 'First name',
      //   value: 'Bombasto',
      //   required: true,
      //   order: 1
      // }),

      // new TextboxQuestion({
      //   key: 'emailAddress',
      //   label: 'Email',
      //   type: 'email',
      //   order: 2
      // })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
