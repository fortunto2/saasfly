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
    <div className={cn("grid gap-6", className)} {...props} data-oid="6p_mr2o">
      <form onSubmit={handleSubmit(onSubmit)} data-oid="65jd8im">
        <div className="grid gap-2" data-oid="3xx23w4">
          <div className="grid gap-1" data-oid="dcp-im-">
            <Label className="sr-only" htmlFor="email" data-oid="ii_qun9">
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
              data-oid="jsmng97"
            />

            {errors?.email && (
              <p className="px-1 text-xs text-red-600" data-oid="oz5pawo">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            className={cn(buttonVariants())}
            disabled={isLoading}
            data-oid="29gfj6n"
          >
            {isLoading && (
              <Icons.Spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="i_6ylvc"
              />
            )}
            {dict.signin_email}
            {/* Sign In with Email */}
          </button>
        </div>
      </form>
      <div className="relative" data-oid="dzx_9on">
        <div className="absolute inset-0 flex items-center" data-oid="owq5_k7">
          <span className="w-full border-t" data-oid="8o1nc6." />
        </div>
        <div
          className="relative flex justify-center text-xs uppercase"
          data-oid="uwu2mcm"
        >
          <span
            className="bg-background px-2 text-muted-foreground"
            data-oid="bu2.sui"
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
        data-oid="v1rj08k"
      >
        {isAuth0Loading ? (
          <Icons.Spinner
            className="mr-2 h-4 w-4 animate-spin"
            data-oid="gjlejk_"
          />
        ) : (
          <Icons.Key className="mr-2 h-4 w-4" data-oid="-uxpf3g" />
        )}{" "}
        Auth0
      </button>
    </div>
  );
}
