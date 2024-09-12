"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full min-h-screen'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"Procedural Animations"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Content</h3>
                                <p className={"text-gray-400"}>
                                    As you might have already discovered, I'm no professional artist. What I can do is put together a bunch of state logic for certain poses though. The vast majority of animations I show here are procedural and take a one frame pose plus some layered blending logic.
                                </p>
                                <br/>
                                <p className={"text-gray-400"}>
                                    I have a few different animations that I've set up for both first and third person models:
                                </p>
                                <ul className={"list-disc ml-8 "}>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>Breathing</Link></li>
                                    <li><Link href={"#stimulant"} className={"text-blue-400"}>Weapon Sway</Link></li>
                                    <li><Link href={"#blink"} className={"text-blue-400"}>Hand and Food IK</Link></li>
                                </ul>
                                <p className={"text-gray-400"}>
                                    Here's how I made them...
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Breathing</h3>
                                <p className={"text-gray-400"}>
                                    When I was playtesting different features, I felt like everything was a bit too
                                    static. Plus sometimes it was hard to tell if the game crashed when it was started,
                                    or everything was working fine until I tried to play and it was unresponsive and
                                    crashing.
                                    <br/><br/>
                                    I started with a default first person pose. I then essentially turned it into an
                                    animation by using float curves to adjust the position of the z axis over time. This
                                    created a slight up and down breathing effect that was almost good enough. Adding a
                                    curve for every axis can give an almost circular motion that feels a lot more like
                                    breathing. Each graph is a little bit different depending on how I felt the movement
                                    compared to myself breathing in the same pose.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/animations/Breathe.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Weapon Sway</h4>
                                <p className={"text-gray-400"}>
                                    Weapon sway was another one of those things that I thought would be cool, but I
                                    didn't think it would be as cool as it was. I know it's not super fancy or special,
                                    and most games have it, but I think it really helps make a difference.
                                    <br/><br/>
                                    Weapon sway is handled by telling the weapons barrel to stay where it is when the
                                    player is rotating... at least for the first tick. On the second tick of player
                                    rotation, the speed of rotation is now known and, using a little bit of fancy math,
                                    the amount of sway is controlled with an equation that uses the speed of ratation,
                                    and variables for weapon weight & size. This results in the weapon sway that you
                                    see, and each weapon can have it's own sway parameters based on whatever weight and
                                    size I give them.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/animations/Sway.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Hand and Foot IK</h4>
                                <p className={"text-gray-400"}>
                                    This is kind of a big one. Until I set up proper hand and foot IK, I was just using a few state machines and animations for my animations. It was great for quick animation setups and getting stuff working, but as I began working on the project more and more, I realized that I would need to get a more comprehensive setup going, otherwise it would be hard to manage. I started doing a bit of research on how to better handle animations, and found the Advanced Locomotion plugin. This system has a bunch of support for all sorts of fancy animations that are mostly procedural. I started studying this system for hours so I could understand how it worked. My aim was not to just plug and play the plugin, but to learn how it worked so I could build my own from the ground up and only use what I actually need... for both performance and organizational reasons.
                                    <br/><br/>

                                    So that's what I did. I build my own animation graph full of state machines, procedural and additive animations, and a lot of animation blending. Overall, the final result is much better than it was before, despite some bugs that I still need to iron out. Honestly, my favorite part is the fact that the feet automatically readjust to a normal standing position from whatever part of the animation that they're in. The feet will also look for where they should be placed individually, so they can adjust themselves if one foot is sitting on higher ground than the other. This means no more feet just floating off the edge of a cliff :D
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width={590}
                                    className={"rounded-xl h-fit "}
                                    src={"/Images/impulse/animations/ik.mp4"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
