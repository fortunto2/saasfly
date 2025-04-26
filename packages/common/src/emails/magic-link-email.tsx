import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import * as Icons from "@saasfly/ui/icons";

interface MagicLinkEmailProps {
  actionUrl: string;
  firstName: string;
  mailType: "login" | "register";
  siteName: string;
}

export const MagicLinkEmail = ({
  firstName = "",
  actionUrl,
  mailType,
  siteName,
}: MagicLinkEmailProps) => (
  <Html data-oid="ocyw29t">
    <Head data-oid="gfo07wm" />
    <Preview data-oid="to8me.3">
      Click to {mailType === "login" ? "sign in" : "activate"} your {siteName}{" "}
      account.
    </Preview>
    <Tailwind data-oid="l7zp_ds">
      <Body className="bg-white font-sans" data-oid="pfg5ecb">
        <Container className="mx-auto py-5 pb-12" data-oid="44vpu0e">
          <Icons.Logo className="m-auto block h-10 w-10" data-oid="78tp.fg" />
          <Text className="text-base" data-oid="9vbzs-2">
            Hi {firstName},
          </Text>
          <Text className="text-base" data-oid="tb6l2v0">
            Welcome to {siteName} ! Click the link below to{" "}
            {mailType === "login" ? "sign in to" : "activate"} your account.
          </Text>
          <Section className="my-5 text-center" data-oid="c-40bza">
            <Button
              className="inline-block rounded-md bg-zinc-900 px-4 py-2 text-base text-white no-underline"
              href={actionUrl}
              data-oid="l_1nsha"
            >
              {mailType === "login" ? "Sign in" : "Activate Account"}
            </Button>
          </Section>
          <Text className="text-base" data-oid="8dltxdb">
            This link expires in 24 hours and can only be used once.
          </Text>
          {mailType === "login" ? (
            <Text className="text-base" data-oid="637q:4z">
              If you did not try to log into your account, you can safely ignore
              it.
            </Text>
          ) : null}
          <Hr className="my-4 border-t-2 border-gray-300" data-oid="cy2ff73" />
          <Text className="text-sm text-gray-600" data-oid="5wdho5j">
            saasfly.io
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default MagicLinkEmail;
