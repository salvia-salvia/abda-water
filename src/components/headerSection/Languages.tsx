import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function Languages() {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

    const locale = useLocale();
    console.log(locale);

    const changeLanguage = (locale: string) => {
        router.push(`/${locale}`); // Change locale
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(false);
            }
        }

        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);
    return (
        <div
            ref={dropdownRef}
            className="relative flex  items-center justify-center cursor-pointer"
        >
            <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 hover:text-primary"
            >
                <Image
                    src={`/icons/${locale}.svg`}
                    alt="logo"
                    width={26}
                    height={26}
                />
                <span className="uppercase text-sm ml-1 md:text-base">
                    {locale}
                </span>{" "}
                <ChevronDown className="" />
            </div>
            <ul
                className={`${
                    showDropdown ? "block" : "hidden"
                } absolute  top-[50px] p-3 flex flex-col gap-3 bg-white text-black w-[190px]`}
            >
                <li
                    onClick={() => changeLanguage("fr")}
                    className={`flex  items-center gap-4 hover:text-primary  ${
                        locale == "fr" && "text-primary"
                    }`}
                >
                    <Image
                        src="/icons/fr.svg"
                        alt="logo"
                        width={26}
                        height={26}
                    />{" "}
                    Français
                </li>
                <li
                    onClick={() => changeLanguage("en")}
                    className={`flex  items-center gap-4 hover:text-primary ${
                        locale == "en" && "text-primary"
                    }`}
                >
                    {" "}
                    <Image
                        src="/icons/en.svg"
                        alt="logo"
                        width={26}
                        height={26}
                    />{" "}
                    Eglish
                </li>
            </ul>
        </div>
    );
}
