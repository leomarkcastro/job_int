import { User } from "@/types/users/user.types";
import Image from "next/legacy/image";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex h-32 overflow-hidden border rounded-lg shadow">
      <div className="relative w-1/3 h-full">
        <Image
          src={user.avatar}
          alt={user.first_name}
          className="object-cover"
          layout="fill"
          sizes="320 640 750"
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-2">
        <h1 className="text-2xl font-bold text-center">
          {user.id}. {user.first_name} {user.last_name}
        </h1>
        <p className="text-center">{user.email}</p>
      </div>
    </div>
  );
}
