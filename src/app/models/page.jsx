"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import colorPhone from '/public/images/3d/models/UIUXPhoneRender.png'
import SectionTitle from "@/Components/SectionTitle";

import AutoCarousel from "@/Components/AutoCarousel";
import * as slides from "@/data/modelSlides"

export default function Home() {
    
    
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full min-h-screen'}>
                <div className={'mt-20 m-auto pb-5 max-w-[50%] mx-auto'}>
                    <SectionTitle title={"3D Work"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <p className={"text-gray-400"}>
                                    I've always enjoyed creating, whether it was building with LEGOs or exploring
                                    software like Visual Studio, Blender, and FL Studio. My passion for programming grew
                                    out of this love for creative problem-solving, with 3D modeling in Blender being a
                                    close second. While many of my previous models (shown below) were made in a more
                                    professional manner with Maya, I enjoy using 3D to express myself and make fun models for
                                    games. Above all, I hope to better understand the creative minds that I work with
                                    and the processes that they go through so I can bridge the gap between the technical
                                    and artistic sides of game design.
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <Image
                                    src={colorPhone}
                                    height={225}
                                    width={225}
                                    className={"rounded-xl h-fit transform -rotate-6"}
                                    placeholder="blur"
                                    alt={"3D Render"}
                                />
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    height={225}
                                    width={225}
                                    className={"rounded-xl h-fit transform rotate-6 translate-y-16 mb-16"}
                                    src={"/Images/3d/models/ReceiptPhoneAnimated.mp4"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-row pt-10 gap-8 max-w-[85%] mx-auto"}>
                    <div className={"flex flex-wrap"}>
                        {Object.entries(slides).map(([key, slideSet]) => (
                            <AutoCarousel key={key} slides={slideSet}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
