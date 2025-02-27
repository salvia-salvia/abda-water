"use client";
import { getNavLinks } from "@/helpers";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
export default function ResourcesFooter() {
    const t = useTranslations("footer");
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
        <div>
            <h3 className="text-xl font-semibold text-primary my-4 border-l-4 pl-3   border-primary">
                {t("resources")}
            </h3>

            <ul className="flex flex-col gap-2  ml-2.5">
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
        </div>
    );
}
