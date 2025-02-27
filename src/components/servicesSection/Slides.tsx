"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import WorkerIcon from "../icons/WorkerIcon";
import DesalinationEngineeringIcon from "../icons/DesalinationEngineeringIcon";
import FactoryIcon from "../icons/FactoryIcon";
import FiltrationIcon from "../icons/FiltrationIcon";
import PumpIcon from "../icons/PumpIcon";
import { getIndustries } from "@/helpers";
import { useLocale } from "next-intl";
import { Industry } from "@/types";

export const industriesdithoutTitleAndText: Industry[] = [
    {
        id: 1,
        icons: <FiltrationIcon className="w-[75px] fill-primary  " />,
        img: "https://media.gettyimages.com/id/1470557428/photo/water-pipes-of-the-water-treatment-plant-of-the-kleine-kinzig-dam-freudenstadt-district-black.jpg?s=612x612&w=0&k=20&c=Ar5OKXl0fcJBNyAo7yLVVikaWUpzo2sIquROlMdAOqc=",
    },
    {
        id: 2,
        icons: <FactoryIcon className="w-[75px] fill-primary  " />,
        img: "https://htmldemo.net/megan/megan/assets/img/industry/3-340x400.jpg",
    },
    {
        id: 3,
        icons: <PumpIcon className="w-[75px] fill-primary" />,
        img: "https://media.gettyimages.com/id/1391619725/photo/asian-chinese-technician-recording-meter-reading-in-tank-routine-quality-control-in-water.jpg?s=612x612&w=0&k=20&c=QFcHd3gKItjgqCvCUKxNjw2bjXsN2gNNb1vZ_oXnW40=",
    },
    {
        id: 4,
        icons: <WorkerIcon className="w-[75px] fill-primary" />,
        img: "https://media.gettyimages.com/id/1193444024/photo/industrial-engineering-works-in-front-of-monitoring-screen-in-the-control-centre-technology.jpg?s=612x612&w=0&k=20&c=tZW9CjevrZYE734X-gu4VeBkOOZn0HkBhixOc6fPKGQ=",
    },
    {
        id: 5,
        icons: (
            <DesalinationEngineeringIcon className="w-[75px] fill-primary" />
        ),
        img: "https://media.gettyimages.com/id/949618680/photo/warehouse.jpg?s=612x612&w=0&k=20&c=nUy2BAd-LHcy9nCpi_UBr5vxq0T1_Xroho_uRk5m2Hw=",
    },
];

export default function Sliders() {
    const language = useLocale() as "fr" | "en";
    const [industries, setIndustries] = useState<Industry[]>();

    useEffect(() => {
        const fetchIndustries = async () => {
            const industriess = await getIndustries(language);
            setIndustries(industriess);
        };
        fetchIndustries();
    }, [language]);

    return (
        <div className="w-full mx-auto mt-12 py-10">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 9000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 }, // For mobile, 1 slide per view
                    1024: { slidesPerView: 2 }, // For screen widths >= 1024px, 2 slides per view
                    1524: { slidesPerView: 3 }, // For screen widths >= 1524px, 3 slides per view
                }}
                className="h-[670px] md:h-[450px] w-full"
            >
                {industries?.map((industry) => (
                    <SwiperSlide key={industry.id}>
                        <div className=" flex flex-col justify-center sm:w-full sm:flex-row gap-3 shadow-[0px_8px_24px_#d7d1d1] my-7 rounded overflow-hidden">
                            <Image
                                width={380}
                                height={300}
                                src={industry.img}
                                alt={industry?.title || "Industry Image"}
                                className=" h-[300px] w-full sm:h-[350px] sm:w-[330px]  object-cover"
                            />
                            <div className=" flex p-3 md:p-6 gap-4 md:gap-7 lg:p-3 lg:gap-4 flex-col">
                                {industry.icons}
                                <h3 className="text-xl md:text-2xl lg:text-xl font-semibold capitalize ">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    {industry.text}
                                </p>
                                {/* <Link
                                    className="uppercase text-sm flex items-center gap-1"
                                    href={"/"}
                                >
                                    see more{" "}
                                    <ArrowRightIcon className="text-primary w-4" />
                                </Link> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
