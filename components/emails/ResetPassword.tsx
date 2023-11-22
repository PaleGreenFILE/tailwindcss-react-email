import {
  Body,
  Container,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface SendingLicenses {
  link?: string;
}

export const ResetPassword = ({ link }: SendingLicenses) => (
  <Tailwind>
    <Html>
      <Preview>Instructions to Reset Your Password</Preview>

      <Body className="bg-slate-50 my-auto mx-auto font-sans">
        <Container
          style={{
            backgroundSize: "cover",

            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/predictradeai.appspot.com/o/emails%2FnewBack.png?alt=media&token=bdb86c45-2f0b-44c8-ade7-f94acac187e2&_gl=1*1hsmeqg*_ga*MTkyMDg5NTc4MS4xNjkxMzg5MzQ4*_ga_CW55HF8NVT*MTY9NjM3Mjg3NC4xMTUuMS4xNjk2MzczNDgyLjU0LjAuMA..)",
          }}
          className="border-4 shadow-2xl text-white border-solid border-[#DAB365] rounded-xl my-[40px] mx-auto p-[20px] w-[865px] max-w-2xl"
        >
          <Section className={""}>
            <Img
              src={
                "https://firebasestorage.googleapis.com/v0/b/predictradeai.appspot.com/o/emails%2FprediLogo2.png?alt=media&token=b335d7ba-9ad9-4744-9d54-3ad454528d55&_gl=1*kqii11*_ga*MTkyMDg5NTc4MS4xNjkxMzg5MzQ4*_ga_CW55HF8NVT*MTY5NjM3Mjg3NC4xMTUuMS4xNjk2MzczMzg0LjYwLjAuMA.."
              }
              width="1980"
              height="1000"
              alt="predict's Logo"
              className="my-0 w-60 h-40 items-center justify-center mx-auto"
            />{" "}
            <Text style={{ color: "#FFFFFF" }} className="text-[14px]">
              Dear user,
            </Text>
            <Text style={{ color: "#FFFFFF" }}>
              We have received a password reset request for your Predictrade.ai
              account. If you initiated this request, please follow the
              instructions below to reset your password:
            </Text>
            <div style={{ color: "#FFFFFF" }} className={"text-[14px]"}>
              <ol className={"list-decimal"}>
                <li style={{ color: "#FFFFFF" }} className={"py-2"}>
                  Click on the button below to access the password reset page:
                </li>
                <Section className="text-center mt-[2px] mb-[2px]">
                  <Button
                    href={link}
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(231, 215, 177, 0.8), rgba(218, 179, 101, 0.6))",
                    }}
                    className="bg-[#000000] px-2 py-2 rounded text-white text-[12px] font-semibold no-underline text-center"
                  >
                    Reset my password
                  </Button>
                </Section>
                <li style={{ color: "#FFFFFF" }} className={"py-2"}>
                  You will be redirected to a page where you can enter a new
                  secure password.
                </li>
                <li style={{ color: "#FFFFFF" }} className={"py-2"}>
                  Once you&apos;ve entered the new password, confirm it and
                  save.
                </li>
              </ol>
            </div>
          </Section>
          <Section className={"flex m-auto items-center justify-center"}>
            <Text
              style={{ color: "#FFFFFF" }}
              className="text-[14px] leading-[24px]"
            >
              If you did not initiate this request, please contact us
              immediately.
            </Text>
            <Text
              style={{ color: "#FFFFFF" }}
              className="text-[14px] leading-[24px]"
            >
              Feel free to reach out if you have any questions or need
              assistance. We&apos;re here to help.
            </Text>
          </Section>
          <Text
            style={{ color: "#FFFFFF" }}
            className=" text-[14px] leading-[24px]"
          >
            Best regards,
          </Text>
          <Text
            style={{ color: "#FFFFFF" }}
            className=" text-[14px] leading-[24px]"
          >
            The PredicTrade.AI team
          </Text>
          <Hr />
          <Link href="https://app.predictrade.ai" target="_blank">
            <Img
              className={"flex mx-auto w-60 h-40"}
              src={
                "https://firebasestorage.googleapis.com/v0/b/predictradeai.appspot.com/o/emails%2FprediLogo2.png?alt=media&token=b335d7ba-9ad9-4744-9d54-3ad454528d55&_gl=1*kqii11*_ga*MTkyMDg5NTc4MS4xNjkxMzg5MzQ4*_ga_CW55HF8NVT*MTY5NjM3Mjg3NC4xMTUuMS4xNjk2MzczMzg0LjYwLjAuMA.."
              }
              width="1980"
              height="400"
              alt="predict's Logo"
            />{" "}
          </Link>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default ResetPassword;
