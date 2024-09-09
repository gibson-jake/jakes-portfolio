"use client";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import menuIcon from '/public/images/hamburgerMenu.svg';
import closeIcon from '/public/images/closeMenu.svg';
import favicon from '/public/images/favicon.png';
import Link from "next/link";


const NavBar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [menuIconSrc, setMenuIconSrc] = useState(menuIcon);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        // Toggle menu icon based on dropdown visibility
        if (isDropdownVisible) {
            setMenuIconSrc(menuIcon);
        } else {
            setMenuIconSrc(closeIcon);
        }
    };

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => { setOffsetY(window.scrollY); console.log(window.pageYOffset) }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-10 bg-opacity-[23%] bg-gray-700`} style={{backgroundColor: `rgba(58, 80, 125, ${offsetY/300})`}}>
            <div className="py-8 px-8 lg:p-8 flex items-center justify-between lg:mx-[10%]  2xl:mx-[20%]">
                <div className="text-white text-xl font-semibold whitespace-nowrap flex flex-row">
                    <Image className={"mr-3 -translate-y-0.5"} src={favicon} width={32} height={32} alt={"Profile Picture"}/>
                    <a href="/">Jacob Gibson</a></div>
                <div className="hidden lg:flex space-x-10 text-white text-xl ">
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}><Link passHref={true} href={"/"}>About</Link></div>
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}><Link passHref={true} href={"/Games"}>Games</Link></div>
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}><Link passHref={true} href={"/Web"}>Web</Link></div>
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}><Link passHref={true} href={"/Apps"}>Apps</Link></div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        onClick={toggleDropdown}
                        className="text-black text-xl"
                    >
                        <Image src={menuIconSrc} alt="Menu Icon" width={24} height={24}/>
                    </button>
                </div>
            </div>
            {/* Dropdown menu items for smaller screens */}
            <div
                className={`lg:hidden fixed inset-0 bg-white transition-max-height duration-500 ease-in-out overflow-hidden ${isDropdownVisible ? 'max-h-screen' : 'max-h-0'}`}
                style={{top: '5.5rem'}}
            >
                <div className="mt-[25%] flex flex-col items-center h-full text-black *:text-2xl *:font-bold *:py-8">
                    <div><Link passHref={true} href={"/"}>Work</Link></div>
                    <div><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></div>
                    <div><Link passHref={true} href={"/about"}>About</Link></div>
                    <div><a href="mailto:celestechanglu@gmail.com">Contact</a></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
