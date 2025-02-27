"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Presentation() {
    const t = useTranslations("about_section.presentation");
    return (
        <div className="w-full lg:h-[700px] flex flex-col lg:flex-row items-center justify-center">
            <Image
                className="lg:w-[40%] h-full object-cover"
                width={1920}
                height={1080}
                src="https://htmldemo.net/megan/megan/assets/img/backgrounds/14.jpg"
                alt="Water Desalination"
            />

            <div className="w-full lg:w-[60%] h-full bg-[#f7f7f7] flex flex-col justify-center gap-10 py-10 pl-6 lg:pl-20">
                <h2 className="text-2xl text-[#222] w-[430px] max-w-[100%] px-1 mt-10 md:text-3xl lg:text-4xl lg:leading-[1.5] font-bold">
                    {t("title")}
                </h2>
                <p className="text-sm py-1 pr-2 md:text-base text-secondary max-w-[100%] md:max-w-[530px]">
                    {t("desc")}
                </p>
                <a href="#description" className="text-sm text-center py-3 md:py-3 w-[140px] 2xl:w-[180px] uppercase bg-primary text-white">
                    {t("btn_text")}
                </a>
                
            </div>
        </div>
    );
}
