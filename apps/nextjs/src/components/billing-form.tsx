"use client";

import * as React from "react";

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
import { toast } from "@saasfly/ui/use-toast";

import { formatDate } from "~/lib/utils";
import { UserSubscriptionPlan } from "~/types";

interface BillingFormProps extends React.HTMLAttributes<HTMLFormElement> {
  subscriptionPlan: UserSubscriptionPlan & {
    isCanceled: boolean;
  };
}

export function BillingForm({
  subscriptionPlan,
  className,
  ...props
}: BillingFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setIsLoading(!isLoading);

    // Get a Stripe session URL.
    const response = await fetch("/api/users/stripe");

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Please refresh the page and try again.",
        variant: "destructive",
      });
    }

    // Redirect to the Stripe session.
    // This could be a checkout page for initial upgrade.
    // Or portal to manage existing subscription.
    const session = await response.json();
    if (session) {
      window.location.href = session.url;
    }
  }

  return (
    <form
      className={cn(className)}
      onSubmit={onSubmit}
      {...props}
      data-oid="5:-xkmx"
    >
      <Card data-oid="gmfrn20">
        <CardHeader data-oid="irlzrfe">
          <CardTitle data-oid="_v81._f">Subscription Plan</CardTitle>
          <CardDescription data-oid="t5zrdh8">
            You are currently on the{" "}
            <strong data-oid="9wzqy:q">{subscriptionPlan?.title}</strong> plan.
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="_b70:2e">
          {subscriptionPlan?.description}
        </CardContent>
        <CardFooter
          className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0"
          data-oid="ueo6q-q"
        >
          <button
            type="submit"
            className={cn(buttonVariants())}
            disabled={isLoading}
            data-oid="7gb1i9-"
          >
            {isLoading && (
              <Icons.Spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="5p6nycg"
              />
            )}
            {subscriptionPlan?.isPaid
              ? "Manage Subscription"
              : "Upgrade to PRO"}
          </button>
          {subscriptionPlan?.isPaid ? (
            <p className="rounded-full text-xs font-medium" data-oid="5u9xm_p">
              {subscriptionPlan?.isCanceled
                ? "Your plan will be canceled on "
                : "Your plan renews on "}
              {formatDate(subscriptionPlan?.stripeCurrentPeriodEnd)}.
            </p>
          ) : null}
        </CardFooter>
      </Card>
    </form>
  );
}
