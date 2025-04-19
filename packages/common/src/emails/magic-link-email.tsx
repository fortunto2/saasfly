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
  <Html data-oid="9z6qjq9">
    <Head data-oid=".j9vst9" />
    <Preview data-oid="gb.m807">
      Click to {mailType === "login" ? "sign in" : "activate"} your {siteName}{" "}
      account.
    </Preview>
    <Tailwind data-oid="b0-.iun">
      <Body className="bg-white font-sans" data-oid="ndu4oih">
        <Container className="mx-auto py-5 pb-12" data-oid=".8oqwas">
          <Icons.Logo className="m-auto block h-10 w-10" data-oid="dfyxd15" />
          <Text className="text-base" data-oid="9-w7jx9">
            Hi {firstName},
          </Text>
          <Text className="text-base" data-oid="7rtyyw8">
            Welcome to {siteName} ! Click the link below to{" "}
            {mailType === "login" ? "sign in to" : "activate"} your account.
          </Text>
          <Section className="my-5 text-center" data-oid="l-g7ibg">
            <Button
              className="inline-block rounded-md bg-zinc-900 px-4 py-2 text-base text-white no-underline"
              href={actionUrl}
              data-oid="y_-ak0d"
            >
              {mailType === "login" ? "Sign in" : "Activate Account"}
            </Button>
          </Section>
          <Text className="text-base" data-oid="trya4fn">
            This link expires in 24 hours and can only be used once.
          </Text>
          {mailType === "login" ? (
            <Text className="text-base" data-oid="jr.6kli">
              If you did not try to log into your account, you can safely ignore
              it.
            </Text>
          ) : null}
          <Hr className="my-4 border-t-2 border-gray-300" data-oid="aid4ih0" />
          <Text className="text-sm text-gray-600" data-oid="19rgebb">
            saasfly.io
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default MagicLinkEmail;
