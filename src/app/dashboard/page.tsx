import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { findSingleUser } from "@/actions/_user";
import { UserSingOut } from "@/components/auth/user-sign-out";
import { UserDashboard } from "@/components/dashboard/user/user-dashboard";
import { AdminDashboard } from "@/components/dashboard/admin/admin-dashboard";

const Dashboard = async () => {
  const session = await auth();
  const user = await findSingleUser(session?.user?.email as string);

  if (!session?.user) redirect("/");

  const name = user?.name as string;
  const image = user?.image as string;
  const email = user?.email as string;

  return (
    <main className="container mx-auto my-2">
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

      {user?.role === "ADMIN" && <AdminDashboard />}
      {user?.role === "USER" && <UserDashboard />}
    </main>
  );
};

export default Dashboard;
