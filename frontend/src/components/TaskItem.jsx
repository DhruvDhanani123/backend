export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}
