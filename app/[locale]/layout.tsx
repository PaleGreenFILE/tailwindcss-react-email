import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";
import { ATopLevelComponent, Provider } from "@/components/Toast/ToastProvider";

const locales = ["en", "fr"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " | LOGIN",
};

export default async function RootLayout({
  children,
  params: { locale },
}: any) {
  // Validate that the incoming `locale` parameter is valids
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={"bg-black"}>
        <Provider>
          <ATopLevelComponent />
          <Suspense fallback={<Loading />}>{children} </Suspense>
        </Provider>
      </body>
    </html>
  );
}
