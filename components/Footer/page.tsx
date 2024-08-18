import InstaIcon from "@/assets/icons/insta.svg";
import XSocial from "@/assets/icons/x-social.svg";
import GitHubIcon from "@/assets/icons/gitHub.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import YouTubeIcon from "@/assets/icons/youtube.svg";

const socials = [
    {
        name: "Instagram",
        icon: <InstaIcon/>,
        url: "https://www.instagram.com/bhavya.css?igsh=MXVwcmQ4eG1kdDV3Mg=="
    },
    
    {
        name: "GitHub",
        icon: <GitHubIcon/>,
        url: "https://github.com/Bhavya-72"
    },
    {
        name: "LinkedIn",
        icon: <LinkedInIcon/>,
        url: "https://www.linkedin.com/in/bhavya-kumar-129008202"
    },
   
]


export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="py-5 bg-slate-900 text-white/60 border-t border-white/20 ">
            <div className="container">
                <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
                    <div className="text-center">
                        &copy; {year} Bhavya Kumar Singh. All rights reserved.
                    </div>
                    <ul className="flex justify-center gap-2.5">
                        {socials.map((social, index) => (
                            <li key={index} className="inline-block px-2">
                                <a href={social.url} target="_blank" rel="noreferrer">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}