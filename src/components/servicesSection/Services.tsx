import React from "react";
import Slides from "./Slides";
import { useTranslations } from "next-intl";


export default function Services() { 
    const t = useTranslations("services_section");

    return (
        <section
            id="services"
            className="w-full min-h-screen flex flex-col justify-center "
        >
            <h1 className=" text-3xl md:text-5xl text-center">
                <span className=" font-light">{t("title.part_one")}</span>{" "}
                <span className="font-bold">{t("title.part_two")}</span>
            </h1>
            <Slides />
        </section>
    );
}
