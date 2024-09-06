const AddTask = () => {
  return (
    <form action="" className="flex gap-4">
      <label
        htmlFor="Username"
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type="text"
          id="Username"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent px-2 py-2 focus:outline-none focus:ring-0"
          placeholder="Username"
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Task
        </span>
      </label>

      <button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
