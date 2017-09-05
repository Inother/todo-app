export class Todo {
    name: string;
    detail?: string;
    completed: boolean;

    constructor(name: string, detail?: string ) {
      this.name = name;
      this.detail = detail;
      this.completed = false;
    }
}
