"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import colorPhone from '/public/images/3d/UIUXPhoneRender.png'
import receiptPhone from '/public/images/3d/UIUXPhoneRender.png'
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import SimpleProjectInformation from "@/Components/SimpleProjectInformation";
import Carousel from "@/Components/Carousel";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full min-h-screen'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"3D Work"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Intro to Blender</h3>
                                <p className={"text-gray-400"}>
                                    I've always enjoyed creating, whether it was building with LEGOs or exploring software like Visual Studio, Blender, and FL Studio. My passion for programming grew out of this love for creative problem-solving, with 3D modeling in Blender being a close second. This year, I've committed to deepening my skills in 3D modeling, resulting in a series of renders that focus on a clean and playful aesthetic. Through this process, I've learned a lot about the modeling and rendering pipeline in Blender, such as working with glass materials and managing UV unwrapping. My goal is to create game-ready assets by refining my skills, optimizing polygons, and improving my workflow to become a more versatile game developer.
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <Image
                                    src={colorPhone}
                                    height={225}
                                    width={225}
                                    className={"rounded-xl h-fit transform -rotate-6"}
                                />
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    height={225}
                                    width={225}
                                    className={"rounded-xl h-fit transform rotate-6 translate-y-16"}
                                    src={"/Images/3d/ReceiptPhoneAnimated.mp4"}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
