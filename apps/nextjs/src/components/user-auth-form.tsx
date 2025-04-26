"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";
import { Input } from "@saasfly/ui/input";
import { Label } from "@saasfly/ui/label";
import { toast } from "@saasfly/ui/use-toast";

type Dictionary = Record<string, string>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  lang: string;
  dict: Dictionary;
  disabled?: boolean;
}

const userAuthSchema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({
  className,
  lang,
  dict,
  disabled,
  ...props
}: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isAuth0Loading, setIsAuth0Loading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") ?? `/${lang}/dashboard`,
    }).catch((error) => {
      console.error("Error during sign in:", error);
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props} data-oid="i228wqg">
      <form onSubmit={handleSubmit(onSubmit)} data-oid="j-t0lv1">
        <div className="grid gap-2" data-oid="696:ly7">
          <div className="grid gap-1" data-oid="_ji3w6o">
            <Label className="sr-only" htmlFor="email" data-oid="5s9d:bd">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isAuth0Loading || disabled}
              {...register("email")}
              data-oid="4hicnvc"
            />

            {errors?.email && (
              <p className="px-1 text-xs text-red-600" data-oid="uhn6030">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            className={cn(buttonVariants())}
            disabled={isLoading}
            data-oid="ivw0up5"
          >
            {isLoading && (
              <Icons.Spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="cnnobl."
              />
            )}
            {dict.signin_email}
            {/* Sign In with Email */}
          </button>
        </div>
      </form>
      <div className="relative" data-oid="5vizq59">
        <div className="absolute inset-0 flex items-center" data-oid="o5:ueqc">
          <span className="w-full border-t" data-oid="myz8h96" />
        </div>
        <div
          className="relative flex justify-center text-xs uppercase"
          data-oid="fqqtgbl"
        >
          <span
            className="bg-background px-2 text-muted-foreground"
            data-oid="2mr7451"
          >
            {dict.signin_others}
            {/* Or continue with */}
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsAuth0Loading(true);
          signIn("auth0", {
            callbackUrl: searchParams?.get("from") ?? `/${lang}/dashboard`,
          }).catch((error) => {
            console.error("Auth0 signIn error:", error);
          });
        }}
        disabled={isLoading || isAuth0Loading}
        data-oid="51mfvjl"
      >
        {isAuth0Loading ? (
          <Icons.Spinner
            className="mr-2 h-4 w-4 animate-spin"
            data-oid="bi8wgnf"
          />
        ) : (
          <Icons.Key className="mr-2 h-4 w-4" data-oid="4g41656" />
        )}{" "}
        Auth0
      </button>
    </div>
  );
}
