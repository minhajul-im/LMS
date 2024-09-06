const Tasks = ({ tasks }: { tasks: string[] }) => {
  return (
    <ul className="py-10">
      {tasks?.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Tasks;
