"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Languages from "./Languages";
import { AlignJustifyIcon, X } from "lucide-react";
import NavbarMobile from "./NavbarMobile";
import Image from "next/image";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add event listener for scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showMobileMenu]);

    return (
        <>
            <section
                className={`z-20 fixed w-full flex flex-col items-center ${
                    scrolled
                        ? "bg-white shadow-lg h-[70px] text-black"
                        : "max-[767px]:bg-white"
                } `}
            >
                <div
                    className={` ${
                        scrolled ? "md:text-black" : "md:text-white"
                    }   relative w-full h-[80px] md:h-[130px] md:w-[85%] md:bg-transparent 2xl:w-[65%] text-secondary  px-6  md:px-3 flex justify-between items-center `}
                >
                    {/* logo */}
                    <picture>
                        {!scrolled && (
                            <source
                                media="(min-width: 768px)"
                                srcSet="/icons/logo.svg"
                            />
                        )}
                        <Image
                            className=" w-[140px] md:w-[200px] 2xl:w-[200px] h-auto"
                            src="/icons/primary-logo.svg"
                            alt="Logo"
                            width={220}
                            height={60}
                            priority
                        />
                    </picture>

                    <div className={`flex items-center gap-2 md:gap-10`}>
                        {" "}
                        <Navbar />
                        <Languages />
                        {showMobileMenu ? (
                            <X
                                onClick={() =>
                                    setShowMobileMenu(!showMobileMenu)
                                }
                                className="cursor-pointer md:hidden hover:text-black"
                            />
                        ) : (
                            <AlignJustifyIcon
                                onClick={() =>
                                    setShowMobileMenu(!showMobileMenu)
                                }
                                className="cursor-pointer md:hidden hover:text-black"
                            />
                        )}
                    </div>
                </div>

                {showMobileMenu && <NavbarMobile />}

                <div
                    className={` ${
                        scrolled && "hidden md:hidden"
                    } w-full hidden md:block border-b  border-[#7f7d78]`}
                />
            </section>
        </>
    );
}
