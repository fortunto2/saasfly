import type { AvatarProps } from "@radix-ui/react-avatar";
import type { User } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@saasfly/ui/avatar";
import * as Icons from "@saasfly/ui/icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props} data-oid="mhsrloq">
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} data-oid="95jdy.6" />
      ) : (
        <AvatarFallback data-oid="azx0vz9">
          <span className="sr-only" data-oid="_ny0.w-">
            {user.name}
          </span>
          <Icons.User className="h-4 w-4" data-oid=".rlf73g" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
