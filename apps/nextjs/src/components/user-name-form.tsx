"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "next-auth";
import { useForm } from "react-hook-form";
import type * as z from "zod";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@saasfly/ui/card";
import * as Icons from "@saasfly/ui/icons";
import { Input } from "@saasfly/ui/input";
import { Label } from "@saasfly/ui/label";
import { toast } from "@saasfly/ui/use-toast";

import { userNameSchema } from "~/lib/validations/user";
import { trpc } from "~/trpc/client";

interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, "id" | "name">;
}

type FormData = z.infer<typeof userNameSchema>;

export function UserNameForm({ user, className, ...props }: UserNameFormProps) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      name: user?.name ?? "",
    },
  });
  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsSaving(true);

    const response = await trpc.customer.updateUserName.mutate({
      name: data.name,
      userId: user.id,
    });
    setIsSaving(false);

    if (!response?.success) {
      return toast({
        title: "Something went wrong.",
        description: "Your name was not updated. Please try again.",
        variant: "destructive",
      });
    }

    toast({
      description: "Your name has been updated.",
    });

    router.refresh();
  }

  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
      data-oid="1e6_5vw"
    >
      <Card data-oid="jzz1-vz">
        <CardHeader data-oid="u7ow:aj">
          <CardTitle data-oid="zphcyox">Your Name</CardTitle>
          <CardDescription data-oid="i2sgq3c">
            Please enter your full name or a display name you are comfortable
            with.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="-hs60kf">
          <div className="grid gap-1" data-oid="o4-um1z">
            <Label className="sr-only" htmlFor="name" data-oid="73mzxbk">
              Name
            </Label>
            <Input
              id="name"
              className="w-[400px]"
              size={32}
              {...register("name")}
              data-oid=".6myx08"
            />

            {errors?.name && (
              <p className="px-1 text-xs text-red-600" data-oid="-ubhs25">
                {errors.name.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter data-oid="x9l.hqw">
          <button
            type="submit"
            className={cn(buttonVariants(), className)}
            disabled={isSaving}
            data-oid="5i0.tjd"
          >
            {isSaving && (
              <Icons.Spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="0d6mb_m"
              />
            )}
            <span data-oid="jswobqy">Save</span>
          </button>
        </CardFooter>
      </Card>
    </form>
  );
}
