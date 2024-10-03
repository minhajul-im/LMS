import { signOutWithSocial } from "@/actions/_auth";
import { Button } from "../ui/button";

export const UserSingOut = async () => {
  return (
    <form
      action={signOutWithSocial}
      className="flex justify-center gap-4 flex-col">
      <Button type="submit">sign out</Button>
    </form>
  );
};
