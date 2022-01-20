import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, social } from "../data";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linklenght = linksRef.current.getBoundingClientRect().height;
        console.log(linklenght);

        if (showLinks) {
            linksContainerRef.current.style.height = linklenght + "px";
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [showLinks]);
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h2>BlockChain</h2>
                    <button
                        className="nav-toggle"
                        onClick={() => setShowLinks(!showLinks)}
                    >
                        <FaBars />
                    </button>
                </div>
                <div className="links-container " ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
