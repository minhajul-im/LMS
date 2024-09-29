import { signInWithSocial } from "@/actions/_auth";

export const UserSignIn = () => {
  return (
    <form action={signInWithSocial} className="flex gap-6 justify-center py-5">
      <button
        type="submit"
        name="action"
        value="google"
        className="py-4 px-6 rounded-lg bg-gray-500 text-white">
        Google
      </button>
      <button
        type="submit"
        name="action"
        value="github"
        className="py-4 px-6 rounded-lg bg-gray-500 text-white">
        GitHub
      </button>
    </form>
  );
};
