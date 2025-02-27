// Function to dynamically import the translation file based on language
export async function loadTranslations(language: "en" | "fr") {
    const translations = await import(`../../messages/${language}.json`);
    return translations;
}

export const getNavLinks = async (language: "en" | "fr") => {
    const navTranslations = await loadTranslations(language);

    return [
        { name: navTranslations.navbar.home, href: "#home" },
        { name: navTranslations.navbar.services, href: "#services" },
        { name: navTranslations.navbar.about, href: "#about-us" },
        { name: navTranslations.navbar.contact, href: "#contact-us" },
    ];
};


import { industriesdithoutTitleAndText } from "@/components/servicesSection/Slides";
import { Industry } from "@/types";


export async function getIndustries(language: "en" | "fr") {
    const translations = await loadTranslations(language);

    const mergedIndustries = industriesdithoutTitleAndText.map((industry) => {
        const translatedSlide = translations.services_section.slides.find(
            (slide: Industry) => slide.id === industry.id
        );

        return {
            ...industry,
            title: translatedSlide?.title || industry.title,
            text: translatedSlide?.text || industry.text,
        };
    });
    return mergedIndustries;
}
