import Tasks from "@/components/tasks";
import AddTask from "@/components/add-task";

const HomePage = async () => {
  const tasks: string[] = [];
  return (
    <main className="flex justify-center items-center h-screen">
      <AddTask />
      <Tasks tasks={tasks} />
    </main>
  );
};

export default HomePage;
