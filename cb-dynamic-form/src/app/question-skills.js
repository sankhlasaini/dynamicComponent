"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_base_1 = require('./question-base');
var SkillsInfoQuestion = (function (_super) {
    __extends(SkillsInfoQuestion, _super);
    function SkillsInfoQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.controlType = 'skillsInfo';
        this.options = [];
        this.options = options['options'] || [];
    }
    return SkillsInfoQuestion;
}(question_base_1.QuestionBase));
exports.SkillsInfoQuestion = SkillsInfoQuestion;
//# sourceMappingURL=question-skills.js.map