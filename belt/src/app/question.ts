export class Question {
    constructor(
        public id: string = "",
        public _item: Object = {},
        public name: string = "",
        public question_content: string = "",
        public option1: string = "",
        public answers: Array<object> = [],
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ){}
}
