import { RootLayout } from "@/layouts/root";

import { SFProText, SFCompactDisplay } from "./fonts";

import { CrispLoader } from "./scripts/crisp";

import { clsx } from "clsx";

import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eDoktor",
  description:
    "Book appointments, manage prescriptions, and access your public health data — all in one app",
};

export default function RootLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={clsx(
          SFProText.variable,
          SFCompactDisplay.variable,
          "container-variable",
          "antialiased",
        )}
      >
        <RootLayout>{children}</RootLayout>
      </body>

      <CrispLoader />
    </html>
  );
}
