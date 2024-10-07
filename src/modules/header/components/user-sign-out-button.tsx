import { signOutWithSocial } from "../actions/auth";

export const UserSingOutButton = () => {
  return (
    <form action={signOutWithSocial}>
      <button type="submit">Sign Out</button>
    </form>
  );
};
