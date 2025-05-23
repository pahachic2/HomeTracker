import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchTasks, deleteTask, updateTask } from '../features/tasks/tasksSlice';
import type { Task } from '../features/tasks/tasksSlice';

export const TaskList = () => {
  const dispatch = useDispatch();
  const { items: tasks, status, error } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const handleToggleComplete = (task: Task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  if (status === 'loading') {
    return <div className="text-center">Загрузка...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
              className="h-4 w-4 text-blue-500"
            />
            <div>
              <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.title}
              </h3>
              <p className="text-gray-500">{task.description}</p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(task.id)}
            className="btn btn-danger"
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}; 