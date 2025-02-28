"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroContent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const t = useTranslations("hero");
    
   
    const images = [
        "https://htmldemo.net/megan/megan/assets/img/slider/one/home_00_15.jpg",
        "https://htmldemo.net/megan/megan/assets/img/slider/seven/slider-h4-3.jpg",
        "https://htmldemo.net/megan/megan/assets/img/slider/six/slider-h3-2.jpg",
        // "https://htmldemo.net/megan/megan/assets/img/backgrounds/14.jpg",
        // "/images/hero-slide-1.svg",
        // "/images/img-2.jpg", 
        // "/images/main-img-1.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 9000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    // };

    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };
    return (
        <section className="relative w-full flex flex-col items-center  justify-center h-screen md:h-[85%] 2xl:h-[80%]">
            <div className="flex z-10 w-full  md:w-[85%] 2xl:w-[65%]  flex-col text-white mt-10 pl-6 sm:pl-20 md:pl-0   justify-center">
                <motion.h2
                    className=""
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="block text-xl md:text-3xl lg:text-5xl 2xl:text-8xl font-light ">
                        {t("title.part_one")}
                    </span>{" "}
                    <br />
                    <span
                        className={`block mb-12 text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl tracking-wide  font-bold`}
                    >
                        {t("title.part_two")}
                    </span>
                </motion.h2>
                <motion.p
                    className="text-xs md:text-sm lg:text-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                >
                    {t("desc")}
                </motion.p>
                <motion.button
                    className="mt-10 text-sm md:text-base py-3 md:py-3 max-w-[160px] md:max-w-[200px] uppercase bg-primary text-[#093365] "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    {t("btn_text")}
                </motion.button>
            </div>
            <div className="absolute top-0 w-full h-full  mx-auto overflow-hidden">
                {/* Image Display */}
                <div className="relative h-full">
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="duration-700 ease-in-out"
                    />
                </div>

                {/* Controls */}
               {/* <button
                    onClick={prevSlide}
                    className="absolute left-4 mt-3 top-1/2 transform -translate-y-1/2 bg-black/20 text-white px-4 py-2 md:px-5 md:py-3 lg:px-7 lg:py-5 rounded-full"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 mt-3 top-1/2 transform -translate-y-1/2 bg-black/20 text-white px-4 py-2 md:px-5 md:py-3 lg:px-7 lg:py-5 rounded-full"
                >
                    ❯
                </button> */}

                {/* Indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex
                                    ? "bg-white"
                                    : "bg-gray-400"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
