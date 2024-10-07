import { signInWithSocial } from "../actions/auth";
import { Button } from "@/common/components/ui/button";

export const UserSingInButton = () => {
  return (
    <form action={signInWithSocial}>
      <Button variant="outline" type="submit" name="action" value="google">
        sign in
      </Button>
    </form>
  );
};
