import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { signInWithSocial } from "@/actions/_auth";

export const UserSignIn = () => {
  return (
    <form action={signInWithSocial}>
      <Button variant="outline" type="submit" name="action" value="google">
        sign in
      </Button>
    </form>
  );
};

export const UserSigned = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  return (
    <Link href="/dashboard">
      <div className="w-10 h-10 rounded-full border-[3px] border-green-600 relative">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </Link>
  );
};
