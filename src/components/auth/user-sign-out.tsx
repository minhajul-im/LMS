import { signOutWithSocial } from "@/actions/_auth";

export const UserSingOut = async () => {
  return (
    <form
      action={signOutWithSocial}
      className="flex justify-center gap-4 flex-col">
      <button className="bg-blue-400 my-2 text-white p-1 rounded" type="submit">
        sign out
      </button>
    </form>
  );
};
