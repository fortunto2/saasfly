"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { Modal } from "~/components/modal";
import { siteConfig } from "~/config/site";
import { useSigninModal } from "~/hooks/use-signin-modal";

export const SignInModal = ({ dict }: { dict: Record<string, string> }) => {
  const signInModal = useSigninModal();
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal
      showModal={signInModal.isOpen}
      setShowModal={signInModal.onClose}
      data-oid="2jf0qsi"
    >
      <div className="w-full" data-oid="hvfh.sv">
        <div
          className="flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center md:px-16"
          data-oid="j.vmt.n"
        >
          <a href={siteConfig.url} data-oid=":s1ec4d">
            <Image
              src="/images/avatars/saasfly-logo.svg"
              className="mx-auto"
              width="64"
              height="64"
              alt=""
              data-oid="hilmmf."
            />
          </a>
          <h3 className="font-urban text-2xl font-bold" data-oid="8ung-bg">
            {dict.signup}
          </h3>
          <p className="text-sm text-gray-500" data-oid="bai13.0">
            {dict.privacy}
          </p>
        </div>

        <div
          className="flex flex-col space-y-4 bg-secondary/50 px-4 py-8 md:px-16"
          data-oid="d--w77n"
        >
          <Button
            variant="default"
            disabled={signInClicked}
            onClick={() => {
              setSignInClicked(true);
              signIn("github", { redirect: false })
                .then(() =>
                  setTimeout(() => {
                    signInModal.onClose();
                  }, 1000),
                )
                .catch((error) => {
                  console.error("signUp failed:", error);
                });
            }}
            data-oid="uiz07xl"
          >
            {signInClicked ? (
              <Icons.Spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid=":yx4d-4"
              />
            ) : (
              <Icons.GitHub className="mr-2 h-4 w-4" data-oid="h0ccj36" />
            )}{" "}
            {dict.signup_github}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
