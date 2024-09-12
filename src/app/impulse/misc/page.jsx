"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import mapImg from "/public/Images/impulse/misc/map.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full min-h-screen'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"Miscellaneous Features that I Don't Have a Place For"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Content</h3>
                                <p className={"text-gray-400"}>
                                    This is a small collection of things I've done that either don't have a place in any of the other categories, or don't have enough content in them to be their own categories yet. Hopefully, everything in here will eventually get cycled out into its own category, but that really depends on how much work I'm able to put into each thing. </p>
                                <br/>
                                <p className={"text-gray-400"}>
                                    I've done a few random things:
                                </p>
                                <ul className={"list-disc ml-8 "}>
                                    <li><Link href={"#passive"} className={"text-blue-400"}>Match Chat</Link></li>
                                    <li><Link href={"#stimulant"} className={"text-blue-400"}>Level Design</Link></li>
                                    <li><Link href={"#blink"} className={"text-blue-400"}>Visuals</Link></li>
                                </ul>
                                <p className={"text-gray-400"}>
                                    Here's how I made them...
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h3 className={"text-white font-bold text-xl"}>Match Chat</h3>
                                <p className={"text-gray-400"}>
                                    Another staple of online games: in-game chats. It's no voice chat, but that's another rabbit hole for another day. To get some game communication started, I went with a match chat system. I started with simply sending a message to the server and displaying it to everyone, but with a team mode being the core game mode for Impulse, as well as potential for private messages, I knew I had to add more options.
                                    <br/><br/>
                                    Players can cycle through their available chat methods by opening chat and hitting tab. When a chat message is sent to the server, it is tagged with an enumerator that determines what type of chat it is (team, party, match, etc.), then the server handles sending the message to the proper recipients. When the back-end matchmaking server becomes more robust, I intend on adding private and party chats that scope outside of just the current match the player is in.
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
                                    src={"/Images/impulse/misc/MatchChat.mp4"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Level Design</h4>
                                <p className={"text-gray-400"}>
                                    You can't play a game if you don't have a place to play it! The most put together map that I have is the deathmatch map. It prioritizes setting up sight lines, good positioning, and playing both in and out of buildings. It's made to be a total playground for both testing fun abilities, as well as strategy. I wanted to put a focus on height because of all the repositioning abilities that I have in Impulse, but I needed to test a lot of line of sight things as well, so I ended up with a multi-tiered town on stilts. Unfortunately, it'll stay very barren and basic until I get an artist on the project, or find the time to do the artwork myself.
                                    <br/><br/>
                                </p>
                            </div>
                            <div className={"flex flex-row"}>
                                <Image
                                    src={mapImg}
                                    height={225}
                                    width={500}
                                    className={"rounded-xl h-fit"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row pt-5 gap-8"}>
                            <div className={"w-[50%]"}>
                                <h4 className={"text-white font-bold text-xl"}>Visuals</h4>
                                <p className={"text-gray-400"}>
                                    Obviously there isn't much in the way of visuals... I mean, I currently have a bunch
                                    of blue guys in what looks to be diapers while shooting eachother with nerf guns.
                                    I've done a little bit of Niagara work, which can be seen with the bullet tracers,
                                    as well as a little bit of 3D & material work. I intend on using Niagara for all of
                                    my VFX, and that's next on my list after I finish up some backend work. My next
                                    steps for this is to start learning Niagara, then adding effects to abilities, as I
                                    feel that will have the biggest effect in game, while still being small and isolated
                                    so I can complete them like little projects.
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
                                    src={"/Images/impulse/misc/Visuals.mp4"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
