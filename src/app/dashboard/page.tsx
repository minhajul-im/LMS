import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { findAllUsers } from "@/actions/_user";
import { UserSingOut } from "@/components/auth/user-sign-out";

const Dashboard = async () => {
  const session = await auth();
  const users = await findAllUsers();

  if (!session?.user) redirect("/");

  const image = session?.user?.image as string;
  const name = session?.user?.name as string;
  const email = session?.user?.email as string;

  return (
    <main className="container mx-auto">
      <div className="flex justify-between items-center">
        <Link href="/">Home</Link>
        <div className="flex gap-4 items-center">
          <UserSingOut />
          <div className="flex justify-center gap-4 items-center">
            <div className="w-10 h-10 rounded-full border-2 border-green-600 relative">
              <Image
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-green-500">Name: {name}</h3>
              <p className="italic text-xs text-gray-600">{email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 px-20 flex flex-col gap-4 bg-gray-400">
        {users.map((user) => (
          <div
            key={user?.id}
            className="flex justify-center gap-4 items-center">
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
    </main>
  );
};

export default Dashboard;
