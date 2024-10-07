import Link from "next/link";
import Image from "next/image";
import { UserImage } from "../type";

export const UserProfilePicture = ({ name, image }: UserImage) => {
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
