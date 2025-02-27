"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("contact_us");
    return (
        <section
            id="contact-us" 
            className="w-full min-h-screen flex flex-col items-center justify-center"
        >
            <h2 className="text-xl py-6 md:text-3xl lg:text-5xl font-semibold">
            {t("title")}
            </h2>
            <p className="text-sm md:text-base text-secondary px-6 text-center">
            {t("desc")}
            </p>
            <ContactForm />
            <ContactInfo />
        </section>
    );
}
