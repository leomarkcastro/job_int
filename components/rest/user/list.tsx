import { User } from "@/types/users/user.types";
import { UserCard } from "./card";

interface UserListProps {
  userList: User[];
}

export function UserList({ userList }: UserListProps) {
  return (
    <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3">
      {userList.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
    </div>
  );
}
