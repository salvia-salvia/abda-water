"use client";
import { getNavLinks } from "@/helpers";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default function NavbarMobile() {
    const [navLinks, setNavLinks] = useState<{ name: string; href: string }[]>(
        []
    );

    const language = useLocale() as "en" | "fr";
    useEffect(() => {
        const fetchNavLinks = async () => {
            const links = await getNavLinks(language);
            setNavLinks(links);
        };

        fetchNavLinks();
    }, [language]);
    return (
        <section className="bg-[#000000ed] z-30 md:hidden w-full h-screen absolute top-[70px]">
            <ul className="flex flex-col p-10 gap-7 cursor-pointer capitalize">
                {navLinks?.map((link, index) => {
                    return (
                        <li key={index}>
                            <a
                                href={link.href}
                                className=" text-[#a7a7a7] text-xl font-semibold hover:hover:text-primary"
                            >
                                {link.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
