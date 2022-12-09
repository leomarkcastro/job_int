import { User } from "@/types/users/user.types";
import { UserCard } from "./card";

interface UserListProps {
  userList: User[];
}

export function UserList({ userList }: UserListProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {userList.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
    </div>
  );
}
