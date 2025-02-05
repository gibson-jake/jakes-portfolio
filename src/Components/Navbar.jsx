"use client";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import favicon from '/public/images/favicon.png';
import Link from "next/link";


const NavBar = () => {

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
                    <Link passHref={true} href="/">Jacob Gibson</Link></div>
                <div className="hidden lg:flex space-x-10 text-white text-xl ">
                    <div className={"hover:-translate-y-1.5 transition-transform duration-500"}><Link passHref={true} href={"/"}>Home</Link></div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
