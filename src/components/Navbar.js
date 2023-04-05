import { useState, useEffect } from 'react';

const links = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#education", text: "Education" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
];

export default function Navbar() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [scrolledPastOnePx, setScrolledPastOnePx] = useState(false);

    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    }

    const handleMouseLeave = () => {
        setHoveredLink(null);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 1) {
                setScrolledPastOnePx(true);
            } else {
                setScrolledPastOnePx(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: "smooth"
        });
    }

    return (
        <nav className={scrolledPastOnePx ? 'scrolled' : ''}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            className={hoveredLink === link ? "isHovered" : ""}
                            onMouseEnter={() => handleMouseEnter(link)}
                            onMouseLeave={handleMouseLeave}
                            onClick={(e) => handleClick(e, link.href)}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
