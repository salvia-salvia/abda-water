import WaterDropIcon from "@/components/icons/WaterDropIcon";
import Link from "next/link";
import React from "react";

export default function notFound() {
    return (
        <div className="w-full h-screen flex flex-col items-center gap-5 justify-center">
            <div className="text-6xl md:text-9xl font-bold text-primary flex items-center gap-1.5 md:gap-2">
                4<WaterDropIcon className="fill-primary w-[50px] md:w-[96px]" />
                4
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold mt-6">
                Something&apos;s missing.
            </h1>
            <p className="text-sm md:text-base text-secondary px-6 text-center">
                Sorry, we can&apos;t find that page. You&apos;ll find lots to
                explore on the home page.
            </p>
            <Link
                href="/"
                className=" text-xs md:text-sm text-center py-3 md:py-4 w-[140px] font-medium md:w-[180px] uppercase bg-primary text-white mt-6"
            >
                back to home page
            </Link>
        </div>
    );
}
