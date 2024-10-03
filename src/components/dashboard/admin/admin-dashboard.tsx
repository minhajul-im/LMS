import Image from "next/image";
import { findAllUsers } from "@/actions/_user";

export const AdminDashboard = async () => {
  const users = await findAllUsers();

  return (
    <div className="my-10 px-20 flex justify-start flex-col gap-4 bg-gray-400 py-8">
      {users.map((user) => (
        <div
          key={user?.id}
          className="flex gap-4 items-center justify-start my-2 rounded-md bg-slate-200 p-4">
          <div className="w-10 h-10 rounded-full border-2 border-green-600 relative">
            <Image
              src={user?.image as string}
              alt={user?.name as string}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-green-500">Name: {user?.name}</h3>
            <p className="italic text-xs text-gray-600">{user?.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
