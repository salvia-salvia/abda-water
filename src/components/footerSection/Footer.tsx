import Image from "next/image";
import Link from "next/link";

import ContactInfoFooter from "./ContactInfoFooter";
import ResourcesFooter from "./ResourcesFooter";
import SolcialMediaIcons from "./SolcialMediaIcons";
import { useTranslations } from "next-intl";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const t = useTranslations("footer");

    return (
        <section className="px-8 lg:px-0 capitalize bg-black  text-white">
            <div className=" pt-10 w-full lg:w-[90%] xl:w-[70%] m-auto">
                <section className="flex justify-between gap-y-5 flex-wrap">
                    <div>
                        <Link href={"/"}>
                            <Image
                                width={200}
                                height={90}
                                className="w-[160px] h-[90px] md:w-[170px]"
                                src={"/icons/logo.svg"}
                                alt="logo"
                            />
                        </Link>
                        {/*  Social medial  */}
                        <SolcialMediaIcons />
                    </div>

                    {/*  Contact us */}
                    <ContactInfoFooter />

                    {/* Resources */}
                    <ResourcesFooter />
                </section>

                {/* Copyright */}
                <div className={`  w-full border-b  border-[#7f7d78] mt-5`} />
                <div className="flex justify-center flex-wrap gap-5 items-center text-xs md:text-sm py-8 text-gray-100">
                    <p>
                    {t("copyright.part_one")} ©{currentYear}{" "}
                        <strong className="text-primary">ABDAWATER</strong>.{t("copyright.part_two")}
                    </p>
                </div>
            </div>
        </section>
    );
}
