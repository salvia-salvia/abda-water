"use client";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FormEvent } from "react";
interface EmailJSResponseStatus {
    text: string;
}

// interface EmailJS {
//     sendForm(
//         serviceID: string,
//         templateID: string,
//         form: HTMLFormElement | null,
//         user: { publicKey: string }
//     ): Promise<EmailJSResponseStatus>;
// }
export default function ContactForm() {
    const t = useTranslations("contact_us.form");
    const form = useRef(null);

    const TEMPLATE_ID = "template_pky6o7v";
    const SERVICE_ID = "service_lytlyn1";
    const PUBLIC_KEY = "iyJNmzy0ZEB_cMqg4";

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                    publicKey: PUBLIC_KEY,
                })
                .then(
                    () => {
                        // console.log("SUCCESS!");
                    },
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    (error: EmailJSResponseStatus) => {
                        // console.log("FAILED...", error.text);
                    }
                );
        } else {
            console.log("Form reference is null");
        }
    };
    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col items-center gap-10 p-6 mt-7 "
        >
            <div className="w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] flex flex-col md:flex-row gap-10 items-center justify-center">
                <input
                    placeholder={`${t("placeholder_name")} *`}
                    type="text"
                    name="name"
                    className="border-b-2 focus:outline-none w-full  py-3 focus:border-primary placeholder:text-sm focus:placeholder:text-white"
                    required
                />
                <input
                    placeholder={`${t("placeholder_email")} *`}
                    type="email"
                    name="email"
                    className="border-b-2 focus:outline-none w-full py-3 focus:border-primary placeholder:text-sm focus:placeholder:text-white"
                    required
                />
            </div>
            <input
                placeholder={`${t("placeholder_phone")} *`}
                type="text"
                name="phone"
                className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] py-3 focus:border-primary placeholder:text-sm focus:placeholder:text-white"
                required
            />

            <textarea
                placeholder={`${t("placeholder_msg")} *`}
                className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] py-3 focus:border-primary focus:placeholder:text-white"
                required
                name="message"
            ></textarea>
            <button
                type="submit"
                className=" text-sm  py-3 md:py-4 px-4 font-medium  uppercase bg-primary text-[#222] "
            >
                {t("btn_text")}
            </button>
        </form>
    );
}
