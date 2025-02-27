"use client";

import HeroContent from "./HeroContent";
import Header from "../headerSection/Header";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative  flex flex-col items-center h-screen"
        >
            <Header />
            <HeroContent />
        </section>
    );
};

export default Hero;
