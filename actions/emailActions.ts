"use server";
import { Resend } from "resend";
import ResetPassword from "@/components/emails/ResetPassword";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToUser(payload: any, action: string) {
  try {
    let emailOptions: any;
    let link: any;

    switch (action) {
      case "resetRequestPassword":
        //link = await generateLink(payload.email, "ResetPassword");
        link = "https://380084IHODNODOI4ODIIODNOND";
        emailOptions = {
          from: "noreply@app.predictrade.ai",
          to: payload.email,
          subject: "Instructions to Reset Your Password",
          react: ResetPassword({ link }),
        };
        break;

      default:
        return { error: `Invalid action provided: ${action}` };
    }

    const sendResult: any = await resend.emails.send(emailOptions);

    if (
      sendResult.error ||
      sendResult.name === "application_error" ||
      sendResult.name === "validation_error"
    ) {
      return { error: sendResult.message };
    }

    return {
      message: "Email sent successfully",
      status: 200,
    };
  } catch (e) {
    console.error(e);

    if (e instanceof Error) {
      if (e.message.includes("RESET_PASSWORD_EXCEED_LIMIT")) {
        return {
          message:
            "You have exceeded the limit for password reset requests. Please try again later.",
          status: 429,
        };
      } else if (e.message.includes("The domain is not verified")) {
        return { message: e.message, status: 403 };
      } else if (e.message.includes("auth/email-not-found")) {
        return {
          message:
            "There is no user record corresponding to the provided email.",
          status: 404,
        };
      } else {
        return { message: e.message, status: 400 };
      }
    } else {
      return { message: "Error sending email.", status: 400 };
    }
  }
}
