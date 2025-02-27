import About from "@/components/aboutSection/About";
import Contact from "@/components/contactSection/Contact";
import Footer from "@/components/footerSection/Footer";
import Hero from "@/components/heroSection/Hero";
import Services from "@/components/servicesSection/Services";

export default function Home() {
    return (
        <section className="flex flex-col">
            {/* <CookieConsent/> */}
            <Hero />
            <Services />
            <About />
            <Contact />
            <Footer />
        </section>
    );
}
