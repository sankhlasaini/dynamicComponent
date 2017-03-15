import { QuestionBase } from './question-base';
import { Injectable } from '@angular/core';
import { TextboxQuestion } from './question-textbox';
import { DivisionQuestion } from './question-division';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: { key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
