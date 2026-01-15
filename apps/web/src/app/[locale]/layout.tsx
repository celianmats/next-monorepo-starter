import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "../../components/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js Template",
    default: "Next.js Template",
  },
  description: "A robust, production-ready Next.js monorepo template.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://example.com",
    siteName: "Next.js Template",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
