import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { findSingleUser } from "./actions/find-all-user";
import { UserDashboard } from "./user-dashboard/user-dashboard";
import { AdminDashboard } from "./admin-dashboard/admin-dashboard";

export const ScreenDashboard = async () => {
  const session = await auth();
  const user = await findSingleUser(session?.user?.email as string);

  if (!session?.user) redirect("/");

  return (
    <main className="container mx-auto my-2">
      <div className="flex justify-between items-center">
        <Link href="/">Home</Link>
      </div>

      {user?.role === "ADMIN" && <AdminDashboard />}
      {user?.role === "USER" && <UserDashboard />}
    </main>
  );
};
