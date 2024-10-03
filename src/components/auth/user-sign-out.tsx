import { signOutWithSocial } from "@/actions/_auth";

export const UserSingOut = () => {
  return (
    <form action={signOutWithSocial}>
      <button type="submit">Sign Out</button>
    </form>
  );
};
