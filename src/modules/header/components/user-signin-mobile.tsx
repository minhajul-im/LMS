import { signInWithSocial } from "../actions/auth";

export const UserSingInMobile = () => {
  return (
    <form action={signInWithSocial}>
      <button type="submit" name="action" value="google">
        Sign in
      </button>
    </form>
  );
};
