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
      data-oid="_y1_emh"
    >
      <div className="w-full" data-oid="gxd25g_">
        <div
          className="flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center md:px-16"
          data-oid="jpa66x4"
        >
          <a href={siteConfig.url} data-oid="1443-wp">
            <Image
              src="/images/avatars/saasfly-logo.svg"
              className="mx-auto"
              width="64"
              height="64"
              alt=""
              data-oid="pg3hdpi"
            />
          </a>
          <h3 className="font-urban text-2xl font-bold" data-oid="ovtgp9k">
            {dict.signup}
          </h3>
          <p className="text-sm text-gray-500" data-oid="4imldor">
            {dict.privacy}
          </p>
        </div>

        <div
          className="flex flex-col space-y-4 bg-secondary/50 px-4 py-8 md:px-16"
          data-oid="9n8_0z_"
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
            data-oid="0s.a78-"
          >
            {signInClicked ? (
              <Icons.Spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="u2syzsq"
              />
            ) : (
              <Icons.GitHub className="mr-2 h-4 w-4" data-oid="23rek6z" />
            )}{" "}
            {dict.signup_github}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
