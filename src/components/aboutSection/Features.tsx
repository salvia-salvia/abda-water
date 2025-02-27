"use client";

import SupportIcon from "../icons/SupportIcon";
import ThinkingIcon from "../icons/ThinkingIcon";
import QualityIcon from "../icons/QualityIcon";
import { useTranslations } from "next-intl";

export default function Features() {
    const t = useTranslations("about_section.features");
    return (
        <ul className="flex justify-center w-full flex-wrap lg:flex-nowrap gap-14 py-20">
            <li className="flex flex-col w items-center gap-6">
                <QualityIcon className="w-[75px]" />
                <h2 className="text-xl font-semibold">
                    {" "}
                    {t("feat_one.title")}
                </h2>
                <p className="text-sm text-center max-w-[320px] md:max-w-[380px] md:text-base text-secondary">
                    {t("feat_one.desc")}
                </p>
            </li>
            <li className="flex flex-col items-center gap-6">
                <ThinkingIcon className="w-[75px] fill-primary" />
                <h2 className="text-xl font-semibold">{t("feat_two.title")}</h2>
                <p className="text-sm text-center max-w-[320px] md:max-w-[380px] md:text-base text-secondary">
                    {t("feat_two.desc")}
                </p>
            </li>
            <li className="flex flex-col items-center gap-6">
                <SupportIcon className="w-[75px] stroke-primary fill-none" />
                <h2 className="text-xl font-semibold">
                    {t("feat_three.title")}
                </h2>
                <p className="text-sm text-center max-w-[320px] md:max-w-[380px] md:text-base text-secondary">
                    {t("feat_three.desc")}
                </p>
            </li>
        </ul>
    );
}
