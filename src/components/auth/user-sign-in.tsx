import { Button } from "../ui/button";
import { signInWithSocial } from "@/actions/_auth";

export const UserSignIn = () => {
  return (
    <form action={signInWithSocial} className="flex gap-6 justify-center py-5">
      <Button type="submit" name="action" value="google" className="">
        Google
      </Button>
      <Button type="submit" name="action" value="github" className="">
        GitHub
      </Button>
    </form>
  );
};
