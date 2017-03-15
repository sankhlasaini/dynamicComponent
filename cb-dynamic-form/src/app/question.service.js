"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var question_dropdown_1 = require('./question-dropdown');
var question_division_1 = require('./question-division');
var question_personalInfo_1 = require('./question-personalInfo');
var question_skills_1 = require('./question-skills');
var QuestionService = (function () {
    function QuestionService() {
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            // persnal info
            new question_personalInfo_1.PersonalInfoQuestion({
                key: 'personalInfo',
                label: 'PERSONAL INFO',
                order: 1,
                options: [
                    { "key": "Name", "value": "sheenam" },
                    { "key": "Email", "value": "sankhlasiaNI@gmail.com" },
                    { "key": "AGE  and sex", "value": "23" }
                ]
            }),
            new question_skills_1.SkillsInfoQuestion({
                key: 'skillsInfo',
                label: 'SKILLS INFO',
                order: 2,
                options: [
                    { "key": "JAVA", "value": "EXP 2" },
                    { "key": ".NET", "value": "EXP 4" }
                ]
            }),
            new question_division_1.DivisionQuestion({
                key: 'division',
                label: 'MY DIV',
                order: 4
            }),
            new question_division_1.DivisionQuestion({
                key: 'division',
                label: 'Pernal',
                order: 4
            }), new question_division_1.DivisionQuestion({
                key: 'division',
                label: 'MY DIV',
                order: 4
            }),
            new question_dropdown_1.DropdownQuestion({
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
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map