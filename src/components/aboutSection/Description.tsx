"use client";

import { useTranslations } from "next-intl";

export default function Description() {
    const t = useTranslations("about_section.description");
    return (
        <div
            id="description"
            className="w-full flex flex-col md:flex-row justify-center gap-10 mt-10 md:pt-16 py-10 px-3.5 md:px-10"
        >
            <h2 className="text-2xl text-[#222] px-1 md:w-[40%] 2xl:w-[30%] mt-4 lg:text-4xl lg:leading-[1.5] font-bold">
                {t("title")}
            </h2>

            <div className="flex flex-col gap-5" data-aos="fade-left">
                <h3 className="text-xl font-bold border-b-4 max-w-[450px] md:my-6 py-2 border-primary">
                    {t("sub_title")}
                </h3>
                <p className="text-sm md:text-base text-secondary max-w-[100%] md:max-w-[630px]">
                    {t("desc_part_one")}
                </p>
                <p className="text-sm md:text-base text-secondary max-w-[100%] md:max-w-[630px]">
                    {t("desc_part_two")}
                </p>
            </div>
        </div>
    );
}
