"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_base_1 = require('./question-base');
var PersonalInfoQuestion = (function (_super) {
    __extends(PersonalInfoQuestion, _super);
    function PersonalInfoQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'personalInfo';
        this.options = [];
        this.options = options['options'] || [];
    }
    return PersonalInfoQuestion;
}(question_base_1.QuestionBase));
exports.PersonalInfoQuestion = PersonalInfoQuestion;
//# sourceMappingURL=question-personalInfo.js.map