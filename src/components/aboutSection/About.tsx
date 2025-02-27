import Presentation from "./Presentation";
import Description from "./Description";
import Features from "./Features";

export default function About() {
    return (
        <section id="about-us" className="w-full min-h-screen">
            <Presentation />
            <Description />
            <Features />
        </section>
    );
}
