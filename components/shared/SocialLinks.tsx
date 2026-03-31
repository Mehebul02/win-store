import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const socialLinks = [
    { href: '#', icon: FaFacebookF, label: 'Facebook' },
    { href: '#', icon: FaTwitter, label: 'Twitter' },
    { href: '#', icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
]
const SocialLinks = () => {
    return (

        <div className="ml-auto flex items-center gap-3 flex-shrink-0">
            {socialLinks.map(social => {
                const Icon = social.icon
                return (
                    <Link
                        key={social.label}
                        href={social.href}
                        className="text-white hover:text-white transition-colors"
                        aria-label={social.label}
                    >
                        <Icon size={17} />
                    </Link>
                )
            })}
        </div>

    );
};

export default SocialLinks;