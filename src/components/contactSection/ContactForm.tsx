import { useTranslations } from "next-intl";

export default function ContactForm() {
    const t = useTranslations("contact_us.form");
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted successfully");
            }}
            className="w-full flex flex-col items-center gap-10 p-6 mt-7 "
        >
            <div className="w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] flex flex-col md:flex-row gap-10 items-center justify-center">
                <input
                    placeholder={`${t("placeholder_name")} *`}
                    type="text"
                    className="border-b-2 focus:outline-none w-full  py-3 focus:border-primary placeholder:text-sm focus:placeholder:text-white"
                    required
                /> 
                <input
                    placeholder={`${t("placeholder_email")} *`}
                    type="email"
                    className="border-b-2 focus:outline-none w-full py-3 focus:border-primary placeholder:text-sm focus:placeholder:text-white"
                    required
                />
            </div>
            <input
                placeholder={`${t("placeholder_phone")} *`}
                type="text"
                className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] py-3 focus:border-primary placeholder:text-sm focus:placeholder:text-white"
                required
            />

            <textarea
                placeholder={`${t("placeholder_msg")} *`}
                className="border-b-2 focus:outline-none w-[310px] sm:w-[400px] md:w-[600px] lg:w-[800px] py-3 focus:border-primary focus:placeholder:text-white"
                required
            ></textarea>
            <button
                type="submit"
                className=" text-sm  py-3 md:py-4 w-[130px] font-medium lg:w-[180px] uppercase bg-primary text-[#222] "
            >
               {t("btn_text")}
            </button>
        </form>
    );
}
