import { Roboto } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
const roboto = Roboto({
    variable: "--font-poboto",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Abda Water - Desalination & Water Treatment Materials",
    description:
        "Leading supplier of high-quality materials and equipment for seawater desalination and water treatment, ensuring durability and efficiency.",
    icons: {
        icon: "/icons/favicon.svg",
    },
    openGraph: {
        type: "website",
        title: "Abda Water - Desalination & Water Treatment Materials",
        description:
            "Leading supplier of high-quality materials and equipment for seawater desalination and water treatment, ensuring durability and efficiency.",
        url: "https://www.yourwebsite.com",
        images: "/icons/primary-logo.svg",
        siteName: "Abda Water",
    },

    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1",
    keywords:
        "desalination, water treatment, high-quality materials, seawater desalination, water purification",
};



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
