import { useTranslations } from "next-intl";
import MapLocationIcon from "../icons/MapLocationIcon";
import PhoneCallIcon from "../icons/PhoneCallIcon";

export default function ContactInfoFooter() {
    const t = useTranslations("footer");
    return (
        <div>
            <h3 className="text-xl font-semibold text-primary my-4 sm:ml-2.5 border-l-4 pl-3   border-primary">
            {t("contact")}
            </h3>
            <ul className="flex flex-col gap-2 ">
                <li className="flex items-center gap-3">
                    <MapLocationIcon className="h-6 w-6 fill-primary" />
                    <span className="text-xs md:text-sm">
                        USA, New York - 1060 Str. First Avenue 1
                    </span>
                </li>

                <li className="flex items-center gap-3">
                    <PhoneCallIcon className="h-6 w-6 fill-primary" />
                    <span className="text-xs md:text-sm">+34 627 18 42 51</span>
                </li>
            </ul>
        </div>
    );
}
