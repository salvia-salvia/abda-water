"use client";
import { getNavLinks } from "@/helpers";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default function Navbar() {
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
        <nav className="hidden md:flex justify-between items-center gap-20">
            <ul className="flex items-center gap-7 cursor-pointer capitalize">
                {navLinks?.map((link, index) => {
                    return (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="hover:text-primary duration-150"
                            >
                                {link.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
