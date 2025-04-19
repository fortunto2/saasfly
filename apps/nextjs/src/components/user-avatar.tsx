import type { AvatarProps } from "@radix-ui/react-avatar";
import type { User } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@saasfly/ui/avatar";
import * as Icons from "@saasfly/ui/icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props} data-oid="z.t9tnz">
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} data-oid="jy:rcjz" />
      ) : (
        <AvatarFallback data-oid="xq_.v4r">
          <span className="sr-only" data-oid="9phbe69">
            {user.name}
          </span>
          <Icons.User className="h-4 w-4" data-oid="32jndh9" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
