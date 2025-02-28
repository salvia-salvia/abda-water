import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Head from "next/head";
export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!routing.locales.includes(locale as "en" | "fr")) {
        notFound();
    }
   
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <>
            {/* Dynamically set the lang attribute using next/head */}
            <Head>
                <html lang={locale} />
            </Head>

            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        </>
    );
}
