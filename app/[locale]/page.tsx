import ResetPass from "@/components/forgot-password/ResetPasswordPage";
import pick from "lodash/pick";
import { timeZone } from "@/i18n";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <section>
      <NextIntlClientProvider
        timeZone={timeZone}
        messages={
          // Only provide the minimum of messages
          pick(messages, "Forgot", "Sidebar")
        }
      >
        <ResetPass />
      </NextIntlClientProvider>
    </section>
  );
}
