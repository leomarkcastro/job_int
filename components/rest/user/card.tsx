import { User } from "@/types/users/user.types";
import Image from "next/image";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex h-32 overflow-hidden border rounded-lg shadow animate__animated animate__fadeIn">
      <div className="relative w-1/3 h-full">
        <Image
          src={user.avatar}
          alt={user.first_name}
          className="object-cover"
          layout="fill"
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-2">
        <h1 className="text-2xl font-bold text-center">
          {user.first_name} {user.last_name}
        </h1>
        <p className="text-center">{user.email}</p>
      </div>
    </div>
  );
}
