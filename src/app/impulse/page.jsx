"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import mainImage from '/public/images/about/home.png';
import impulseLogo from '/public/images/about/Impulse.png'
import jumpshipLogo from '/public/images/about/JumpShip.png'
import wildMidwestLogo from '/public/images/about/TheWildMidwest.png'
import greenLightCombatLogo from '/public/images/about/GreenLightCombat.png'
import otherProjects from '/public/images/about/OtherProjects.png'
import ProjectCard from "@/Components/ProjectCard";
import SectionTitle from "@/Components/SectionTitle";
import {useEffect, useState} from "react";

export default function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => { setOffsetY(window.scrollY);}

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <Image
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                className={`transform w-full absolute opacity-40 bg-black`}
                src={mainImage}
                width={1920}
            />
            <div className={'bg-mainBackgroundColor mt-[22.5%] w-full h-full opacity-100 relative'}>
                <div className={"flex flex-col min-h-[50%] *:gap-10 gap-10 mx-auto w-fit"}>
                    <SectionTitle title={"Game Projects"}/>
                    <div className={'flex flex-row'}>
                        <ProjectCard
                            title={'Impulse'}
                            tools={"Unreal Engine, C++"}
                            role={"Gameplay Programmer & Networking"}
                            imageSource={impulseLogo}
                            link={"/impulse"}
                        />
                        <ProjectCard
                            title={'Jump Ship'}
                            tools={"Unity, C#"}
                            role={"Gameplay Programmer"}
                            imageSource={jumpshipLogo}
                            link={""}
                        />
                    </div>
                    <div className={'flex flex-row'}>
                        <ProjectCard
                            title={'Wild Midwest'}
                            tools={"Unreal Engine, Blueprints"}
                            role={"Gameplay Programmer"}
                            imageSource={wildMidwestLogo}
                            link={""}
                        />
                        <ProjectCard
                            title={'Green Light Combat'}
                            tools={"Unity, C#"}
                            role={"Gameplay Programmer"}
                            imageSource={greenLightCombatLogo}
                            link={""}
                        />
                        <ProjectCard
                            title={'Other Projects'}
                            tools={""}
                            role={"Programming"}
                            imageSource={otherProjects}
                            link={""}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
