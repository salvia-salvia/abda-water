import FacebookIcon from "../icons/socialMedia/FacebookIcon";
import InstagramIcon from "../icons/socialMedia/InstagramIcon";
import XIcon from "../icons/socialMedia/XIcon";
import YoutubeIcon from "../icons/socialMedia/YoutubeIcon";

export default function SolcialMediaIcons() {
    return (
        <ul className="flex items-center gap-3 pt-10">
            {/* X */}
            <li className="border p-1.5  rounded border-secondary">
                <a href="">
                    <XIcon className=" w-6 h-6 duration-300 fill-secondary hover:fill-primary" />
                </a>
            </li>

            {/* facebook */}
            <li className="border p-1.5  rounded border-secondary">
                <a href="">
                    <InstagramIcon className=" w-6 h-6 duration-300 fill-secondary hover:fill-primary" />
                </a>
            </li>
            {/* facebook */}
            <li className="border p-1.5 rounded border-secondary">
                <a href="">
                    <FacebookIcon className=" w-6 h-6 duration-300 fill-secondary hover:fill-primary" />
                </a>
            </li>
            {/* youtube */}
            <li className="border p-1.5 rounded border-secondary">
                <a target="_blank" href="">
                    <YoutubeIcon className=" w-6 h-6 duration-300 fill-secondary hover:fill-primary" />
                </a>
            </li>
        </ul>
    );
}
