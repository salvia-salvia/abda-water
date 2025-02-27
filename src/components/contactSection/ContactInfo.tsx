import LocationIcon from "../icons/LocationIcon";
import EmailIcon from "../icons/EmailIcon";
import Contact2Icon from "../icons/Contact2Icon";
import { useTranslations } from "next-intl";
export default function ContactInfo() {
    const t = useTranslations("contact_us.contact_type");
    return (
        <div className="w-full flex justify-center items-center m-auto">
            <ul className="flex md:justify-center  w-[170px] md:w-fit items-center flex-wrap lg:flex-nowrap gap-10 md:gap-12 lg:gap-20 py-10  md:py-20">
                <li className="flex gap-3">
                    <LocationIcon className="fill-primary w-[30px] md:w-[40px] lg:w-[50px]" />
                    <span>
                        <h3 className="text-sm md:text-xl font-semibold text-[#222]">
                            {t("location")}
                        </h3>
                        <p className="text-xs md:text-base text-secondary">
                            USA, New York - 1060 <br /> Str. First Avenue 1
                        </p>
                    </span>
                </li>
                <li className="flex items-center gap-5">
                    <Contact2Icon className="fill-primary w-[30px] md:w-[40px] lg:w-[50px]" />
                    <span>
                        <h3 className="text-sm md:text-xl  font-semibold text-[#222]">
                            {t("call")}
                        </h3>
                        <p className="text-xs md:text-base text-secondary">
                            24/7 Support <br /> 1800 567 8990
                        </p>
                    </span>
                </li>
                <li className="flex items-center gap-5">
                    <EmailIcon className="fill-primary w-[30px] md:w-[40px] lg:w-[50px]" />
                    <span>
                        <h3 className="text-sm md:text-xl font-semibold text-[#222]">
                            {t("email")}
                        </h3>
                        <p className="text-xs md:text-base text-secondary">
                            about@company.com <br /> contact@company.com
                        </p>
                    </span>
                </li>
            </ul>
        </div>
    );
}
