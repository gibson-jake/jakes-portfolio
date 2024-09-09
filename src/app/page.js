"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import mainImage from '/public/images/about/home.png';
import impulseLogo from '/public/images/about/Impulse.png'
import jumpshipLogo from '/public/images/about/JumpShip.png'
import wildMidwestLogo from '/public/images/about/TheWildMidwest.png'
import greenLightCombatLogo from '/public/images/about/GreenLightCombat.png'
import otherProjects from '/public/images/about/OtherProjects.png'
import PlayfulPhonesThumbnail from '/public/images/about/PlayfulPhonesThumbnail.png'
import Rig from '/public/images/about/Rig.png'
import JakeSf from '/public/images/about/JakeSf.png'
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
            <Navbar/>
            <Image
                style={{transform: `translateY(${offsetY * 0.5}px)`}}
                className={`transform w-full absolute opacity-40 bg-black`}
                src={mainImage}
                width={1920}
            />
            <div className={'bg-mainBackgroundColor mt-[22.5%] w-full h-full opacity-100 relative'}>
                <div className={"min-w-fit mx-auto w-fit "}>
                    <div className={"flex flex-col gap-4 min-h-[50%] *:gap-10"}>
                        <SectionTitle title={"Game Projects"}/>
                        <div className={'flex justify-between w-fill'}>
                            <ProjectCard
                                title={'Impulse'}
                                tools={"Unreal Engine, C++"}
                                role={"Gameplay Programmer & Network Engineer"}
                                imageSource={impulseLogo}
                                link={"/impulse"}
                            />
                            <ProjectCard
                                title={'Jump Ship'}
                                tools={"Unity, C#"}
                                role={"Gameplay Programmer"}
                                imageSource={jumpshipLogo}
                                link={"/jumpship"}
                            />
                        </div>
                        <div className={'flex justify-between w-fill'}>
                            <ProjectCard
                                title={'Wild Midwest'}
                                tools={"Unreal Engine, Blueprints"}
                                role={"Gameplay Programmer"}
                                imageSource={wildMidwestLogo}
                                link={"wildmidwest"}
                            />
                            <ProjectCard
                                title={'Green Light Combat'}
                                tools={"Unity, C#"}
                                role={"Gameplay Programmer"}
                                imageSource={greenLightCombatLogo}
                                link={"greenlightcombat"}
                            />
                            <ProjectCard
                                title={'Other Projects'}
                                tools={""}
                                role={"Programming"}
                                imageSource={otherProjects}
                                link={"https://github.com/WebG1itch/"}
                            />
                        </div>
                    </div>
                    <div className={"flex flex-col min-h-[50%] *:gap-10 gap-10 w-full mt-5"}>
                        <SectionTitle title={"3D Work"}/>
                        <div className={'flex justify-between'}>
                            <ProjectCard
                                title={'3D Modeling'}
                                tools={"Blender, Maya"}
                                imageSource={PlayfulPhonesThumbnail}
                                link={"/impulse"}
                            />
                            <ProjectCard
                                title={'3D Animation'}
                                tools={"Blender, Maya"}
                                imageSource={Rig}
                                link={"/jumpship"}
                            />
                        </div>
                    </div>


                </div>

                <div className={"mx-auto min-h-[50%] w-full mt-5 bg-gray-900 py-10"}>
                    <div className={"mx-auto w-fit "}>
                        <SectionTitle title={"About me"}/>
                        <div className={'flex flex-row gap-12 my-10 w-fit'}>
                            <p className={"max-w-[55rem]"}>
                                I'm a gameplay programmer who specializes in networked multiplayer experiences. My most
                                notable foray into game networking has been Impulse, in which I'm rolling my own
                                matchmaking and hosting service from scratch! I also enjoy working with 3D models and
                                find the process quite therapeutic :)
    
                                When not working on games, you can often find me spending time with my friends - gaming
                                or otherwise, going on adventures, and learning about cool new tech!
                            </p>
                            
                            <Image
                                src={JakeSf}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}
