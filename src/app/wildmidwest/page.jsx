"use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import wildmidwest1 from '/public/images/wildmidwest/WildMidwest1.jpg'
import wildmidwest2 from '/public/images/wildmidwest/WildMidwest2.jpg'
import wildmidwest3 from '/public/images/wildmidwest/WildMidwest3.jpg'
import wildmidwest4 from '/public/images/wildmidwest/WildMidwest4.png'
import SectionTitle from "@/Components/SectionTitle";
import React, {useEffect, useState} from "react";
import SimpleProjectInformation from "@/Components/SimpleProjectInformation";
import Carousel from "@/Components/Carousel";
import Link from "next/link";

export default function Home() {
    const slides = [
        {
            type: 'video',
            src: 'https://www.youtube.com/embed/UtPpUDGrUCE',
            title: 'YouTube Video',
        },
        {
            type: 'image',
            src: wildmidwest1,
            alt: 'Poster',
        },
        {
            type: 'image',
            src: wildmidwest2,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: wildmidwest3,
            alt: 'Game Image',
        },
        {
            type: 'image',
            src: wildmidwest4,
            alt: 'Game Image',
        },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className={`bg-gray-800`}>
                <Navbar/>
            </div>
            <div className={'bg-mainBackgroundColor w-full'}>
                <div className={'mt-20 max-w-[50%] m-auto pb-5'}>
                    <SectionTitle title={"The Wild Midwest"}/>
                    <Carousel slides={slides}/>
                    <div className={"flex flex-row gap-10"}>
                        <div className={"flex flex-col pt-12"}>
                            <SimpleProjectInformation title={"Engine"} information={"Unreal Engine 5"}/>
                            <SimpleProjectInformation title={"Platform"} information={"Desktop"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Duration"} information={"16 Weeks"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Team Size"} information={"5 Members"} styles={"mt-5"}/>
                            <SimpleProjectInformation title={"Current Status"} information={"Released"} styles={"mt-5"} />
                            <SimpleProjectInformation title={"Links"} information={<span className={"text-blue-400"}><Link passHref={true} href={"https://pandorias.itch.io/the-wild-midwest"}>Itch.io</Link></span>} styles={"mt-5"}/>
                        </div>
                        <div className={"flex flex-col max-w-[75%] text-gray-400"}>
                            <SectionTitle title={"Development"} styles={"mb-5"}/>
                            <p>
                                This project was developed with the same group of friends that created Jump Ship! We wanted to try our hand at using the absolute beast that is Unreal Engine 5. This time around, we added another group member to help us with sound design. The new team consisted of two programmers (including myself), two artists, and a sound designer. This time around, we did a better job sticking to our roles, especially since we decided to get a lot more ambitious with our scope
                            </p>
                            <br/>
                            <p>
                                I completed work on the following areas:
                                <ul className={"list-disc ml-8"}>
                                    <li>Core game logic</li>
                                    <li>Objective functionality</li>
                                    <li>Win conditions</li>
                                    <li>UI Implementation</li>
                                </ul>
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Overview</h3>
                            <p>
                                Wild Midwest is a real time strategy first person shooter hybrid game. The player is dropped in to protect and expand their farmland from a rival farmer. They begin by controlling a tractor with a big ol' cannon that shoots corn cobs! When the capture period runs out, the player's tractors transform into mechs to brawl in a sudden death arena using upgrades they gathered while playing.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Core Game Logic</h3>
                            <p>
                                While we were concepting this game, the topic of multiplayer came up. Because we were early enough in development, I was able to build the authority game mode with the expectation of multiplayer, even if we never implemented a networking system. All of the important game events such as upgrade purchases, player deaths, and objective captures must be approved through the authority game mode before they are officially counted. In the end, we decided against the additional work of setting up networking and server host options, however LAN play does work.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Objective Functionality</h3>
                            <p>
                                In our preparation, we determined that the core elements of a real time strategy game
                                lie in three pillars: setting up your base, managing your resources, and building an
                                army. Wild Midwest aims to capture these core concepts and simplify them so the game can
                                be played in a short duration, with players whose understanding of how a real time
                                strategy game works could vary wildly. The first step to this was making a robust base
                                system. To simplify the base building aspect, we placed 7 bases on the map that are
                                armed with turrets, and can be captured. When captured, the player has access to its
                                shop menu.
                                <br/><br/>
                                This shop menu allows players to purchase up to three farms per base, starting at 100
                                corn per farm plot. The corn generates at a rate of one corn per second per plot. The
                                next purchasable item fills the army building requirement. The player is able to buy
                                minions at 50 corn each, that they can command to capture bases or fight enemies. The
                                final upgrade that players can purchase is a general damage upgrade. This maxes out at 3
                                levels total, and can not be upgraded further, even at other farms.
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>Win Conditions</h3>
                            <p>
                                Now that we have all of the necessary elements of gameplay, let's talk about win conditions. The authority game mode and state makes sure that the player wins when it hits one of two coniditions: total domination, or sudden death win. Total domination is when the player captures all of the bases and kills the entire enemy team. This was designed to be possible, but difficult even for veteran RTS players. If total domination is not accomplished before the timer hits zero, both teams are sent to the arena along with their minions and upgrades to fight to the death with their tractor turned mech suits. Last mech standing wins!
                            </p>
                            <br/>
                            <h3 className={"text-white font-bold text-xl"}>UI Implementation</h3>
                            <p>
                                Implementing the UI was relatively simple by the time the final UI widgets were completed. I simply had to expose a few behind the scenes variables that I had already been keeping track of. With the UI, players are able to see how much corn, minions, bases, health and time left on the clock. The hardest UI to implement was the base shop UI. At this point, the shop was partially working, but a lot of functionality needed to be given to different parts of the shop to show how many upgrades were done on a certain item, or if something was purchasable at all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
