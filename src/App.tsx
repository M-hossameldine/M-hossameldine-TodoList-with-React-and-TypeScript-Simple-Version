import Todos from './components/Todos';
import Todo from './models/Todo';

const todos = [new Todo('React'), new Todo('TypeScript')];

function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
