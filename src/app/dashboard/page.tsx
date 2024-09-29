import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { UserSingOut } from "@/components/auth/user-sign-out";

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  const image = session?.user?.image as string;
  const name = session?.user?.name as string;
  const email = session?.user?.email as string;

  console.log("user", session?.user);

  return (
    <main className="container mx-auto flex gap-4">
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
    </main>
  );
};

export default Dashboard;
