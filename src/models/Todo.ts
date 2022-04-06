class Todo {
  // to define the expected types
  id: string;
  text: string;

  // to initialize values
  constructor(text: string) {
    this.text = text;
    this.id = new Date().toISOString();
  }
}

export default Todo;
