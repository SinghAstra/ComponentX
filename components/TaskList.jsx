export function TaskList() {
  const tasks = [
    { id: 1, title: "First One", completed: true },
    { id: 2, title: "Design system architecture", completed: false },
    { id: 3, title: "Conduct research", completed: false },
  ];

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-center ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            className="mr-2"
            readOnly
          />
          {task.title}
        </div>
      ))}
    </div>
  );
}
