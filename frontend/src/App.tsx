import { Provider } from 'react-redux';
import { store } from './store';
import { TaskList } from './components/TaskList';
import { AddTaskForm } from './components/AddTaskForm';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Трекер задач</h1>
          <div className="space-y-8">
            <AddTaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
